// app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Prompt especializado para el bot cardiovascular
    const systemPrompt = {
      role: "system",
      content:
        "Eres un asistente médico especializado en la detección temprana de enfermedades cardiovasculares. Para iniciar el diagnóstico, solicita al usuario los siguientes datos: presión arterial sistólica, presión arterial diastólica y pulso o frecuencia cardíaca. Si el usuario no tiene estos datos, indícale que debe tomarlos antes de continuar. No respondas preguntas fuera de este contexto y da respuestas claras y concisas."
    };
    let messages = body.messages ?? [{ role: "user", content: body.message ?? "Hola" }];
    // Inserta el prompt del sistema si no está presente
    if (!messages.some((m: { role: string }) => m.role === "system")) {
      messages = [systemPrompt, ...messages];
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json({ error: "OPENROUTER_API_KEY no configurada en el servidor." }, { status: 500 });
    }

    const orRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // cambia por el modelo que quieras
        messages,
      }),
    });

    const text = await orRes.text();
    // Si OpenRouter devuelve JSON válido, parseamos, si no devolvemos el texto crudo.
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    if (!orRes.ok) {
      console.error("OpenRouter error:", orRes.status, data);
      return NextResponse.json({ error: data, status: orRes.status }, { status: orRes.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Error en /api/chat:", err);
    return NextResponse.json({ error: "Error interno del servidor", detail: String(err) }, { status: 500 });
  }
}
