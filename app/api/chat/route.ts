// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { estimateColombiaRisk, missingFieldsForRisk, type HealthData } from "@/lib/colombia-risk";

// Normaliza caracteres Unicode a alternativas más compatibles y limpia saltos de línea
function normalizeText(t: string): string {
  return (t || "")
    .replace(/[≥]/g, ">=")
    .replace(/[≤]/g, "<=")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[—–]/g, "-")
    .replace(/\r\n/g, "\n");
}

// Elimina sintaxis Markdown básica (##, **negrita**, *itálica*) y deja texto plano legible
function stripMarkdown(t: string): string {
  if (!t) return "";
  let s = t;
  // Encabezados ###, ##, # al inicio de línea
  s = s.replace(/^\s{0,3}#{1,6}\s+/gm, "");
  // Negritas **texto** o __texto__
  s = s.replace(/\*\*(.*?)\*\*/g, "$1");
  s = s.replace(/__(.*?)__/g, "$1");
  // Itálicas *texto* o _texto_
  s = s.replace(/(^|\W)\*(\S.*?\S)\*(?=\W|$)/g, "$1$2");
  s = s.replace(/(^|\W)_(\S.*?\S)_(?=\W|$)/g, "$1$2");
  // Código en línea `texto`
  s = s.replace(/`([^`]+)`/g, '$1');
  // Viñetas: mantener guiones como bullets simples
  s = s.replace(/^\s*[-•]\s+/gm, match => match.replace(/•/g, "-").replace(/^\s*/, ""));
  // Colapsar saltos de línea excesivos
  s = s.replace(/\n{3,}/g, "\n\n");
  return s.trim();
}

export async function POST(req: Request) {
  try {
  const body = await req.json();
  const url = new URL(req.url);
  const fmtParam = url.searchParams.get("fmt")?.toLowerCase();
  const format: "plain" | "markdown" = (fmtParam === "md" || fmtParam === "markdown" || body?.format === "markdown") ? "markdown" : "plain";
    const healthData: HealthData | undefined = body.healthData;
    // Prompt especializado para Colombia (HEARTS/OMS/OPS)
    const systemPrompt = {
      role: "system",
      content:
        "Eres un asistente de salud cardiovascular para personas en Colombia. Usa parámetros alineados con HEARTS/OPS y guías nacionales: HTA se sospecha con ≥140/90 mmHg, crisis hipertensiva con ≥180/120 mmHg. Solicita y valida: edad, sexo, presión sistólica/diastólica (mmHg), frecuencia cardiaca, tabaquismo, diabetes, peso/talla (o IMC), colesterol total si está disponible, medicación antihipertensiva y antecedentes cardiovasculares. Si faltan datos, pídelos de forma clara. Cuando tengas datos suficientes, ofrece una orientación educativa: clasifica presión arterial, estima una banda de riesgo (bajo/moderado/alto/muy alto) y recomendaciones generales (no constituyen diagnóstico). Si hay signos de alerta (p. ej., crisis ≥180/120, dolor torácico intenso, disnea severa, déficit neurológico súbito), indica buscar atención urgente. Evita responder fuera de este contexto."
    } as const;
    let messages = body.messages ?? [{ role: "user", content: body.message ?? "Hola" }];
    const hasSystem = messages.some((m: { role: string }) => m.role === "system");
    if (!hasSystem) {
      messages = [systemPrompt, ...messages];
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json({ error: "OPENROUTER_API_KEY no configurada en el servidor." }, { status: 500 });
    }

    // Si se envían datos de salud, intentamos estimar y enriquecer el contexto
  if (healthData) {
      const missing = missingFieldsForRisk(healthData);
      if (missing.length === 0) {
        const prelim = estimateColombiaRisk(healthData);
        if (prelim) {
          const structuredSummaryRaw = `\nDatos del paciente (Colombia):\n- Edad: ${healthData.age} años\n- Sexo: ${healthData.sex}\n- PA: ${healthData.sbp}/${healthData.dbp} mmHg\n- FC: ${healthData.heartRate ?? "s/d"} lpm\n- Fuma: ${healthData.smoker ? "si" : "no"}\n- Diabetes: ${healthData.diabetes ? "si" : "no"}\n- IMC: ${healthData.bmi ?? (healthData.weightKg && healthData.heightCm ? ((healthData.weightKg)/(((healthData.heightCm)/100)**2)).toFixed(1) : "s/d")}\n- Colesterol total: ${healthData.totalCholesterol ?? "s/d"} mg/dL\n\nEvaluacion automatica preliminar (no diagnostica):\n- Categoria de PA: ${prelim.bpCategory}\n- Banda de riesgo: ${prelim.riskBand}\n- Motivos: ${prelim.reasons.join(", ") || "-"}`;
          const structuredSummary = normalizeText(structuredSummaryRaw);
          messages = [
            ...(hasSystem ? [] : [systemPrompt]),
            ...messages,
            { role: "user", content: structuredSummary + "\nExplica breve en Markdown simple (sin tablas), con bullets y proximas acciones practicas." }
          ];
        }
      } else {
        const ask = `Para una orientación válida en Colombia necesito: ${missing.join(", ")}. Por favor indica esos datos en unidades estándar (mmHg, kg, cm).`;
        messages = [
          ...(hasSystem ? [] : [systemPrompt]),
          ...messages,
          { role: "user", content: normalizeText(ask) }
        ];
      }
    } else {
      // Asegura el contexto base
      if (!hasSystem) messages = [systemPrompt, ...messages];
    }

    // Instrucción breve según formato deseado
    if (format === "plain") {
      messages = [
        ...messages,
        { role: "user", content: "Responde en texto plano, sin Markdown (sin **, ##, tablas ni código). Usa líneas cortas y viñetas con guiones - cuando sea necesario." }
      ];
    }

    const orRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // puedes ajustar el modelo en despliegue
        messages,
        temperature: 0.2,
        max_tokens: 350
      }),
    });

    const text = await orRes.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!orRes.ok) {
      console.error("OpenRouter error:", orRes.status, data);
      return NextResponse.json({ error: data, status: orRes.status }, { status: orRes.status });
    }

      let content = normalizeText(
        data?.choices?.[0]?.message?.content ?? data?.raw ?? ""
      );
      if (!content || !content.trim()) {
        content = "No pude generar una respuesta. Intenta nuevamente o proporciona más detalles (edad, sexo, presión sistólica/diastólica, frecuencia cardiaca, tabaquismo, diabetes, peso/talla o IMC).";
      }
      if (format === "plain") {
        content = stripMarkdown(content);
      }
      // Devuelve solo texto plano para que el frontend no muestre JSON crudo
      return new NextResponse(content, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
  } catch (err) {
    console.error("Error en /api/chat:", err);
    return NextResponse.json({ error: "Error interno del servidor", detail: String(err) }, { status: 500 });
  }
}
