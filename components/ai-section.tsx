// components/ai-section.tsx
"use client"

import { Button as ButtonImport } from "@/components/ui/button"
import {
  CardContent as CardContentImport,
  CardDescription as CardDescriptionImport,
  CardHeader as CardHeaderImport,
  Card as CardImport,
  CardTitle as CardTitleImport,
} from "@/components/ui/card"
import { Input as InputImport } from "@/components/ui/input"
import { ArrowRight, Brain as BrainIcon, LineChart, Send as SendIcon, Shield, Sparkles } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

/* Fallbacks simples si alguna importación viene undefined. */
const Card: any = (CardImport as any) ?? ((props: any) => <div className={props.className}>{props.children}</div>)
const CardHeader: any =
  (CardHeaderImport as any) ?? ((props: any) => <div className={props.className}>{props.children}</div>)
const CardContent: any =
  (CardContentImport as any) ?? ((props: any) => <div className={props.className}>{props.children}</div>)
const CardTitle: any =
  (CardTitleImport as any) ?? ((props: any) => <h3 className={props.className}>{props.children}</h3>)
const CardDescription: any =
  (CardDescriptionImport as any) ?? ((props: any) => <p className={props.className}>{props.children}</p>)
const Button: any =
  (ButtonImport as any) ??
  ((props: any) => (
    <button {...props} className={props.className ?? "px-3 py-2 rounded bg-blue-600 text-white"}>
      {props.children}
    </button>
  ))
const Input: any =
  (InputImport as any) ?? ((props: any) => <input {...props} className={props.className ?? "border px-2 py-1 rounded"} />)

const Brain = (BrainIcon as any) ?? (() => <span>🧠</span>)
const Send = (SendIcon as any) ?? (() => <span>➡️</span>)
const SparklesIcon = (Sparkles as any) ?? (() => <span>✨</span>)
const LineChartIcon = (LineChart as any) ?? (() => <span>📈</span>)
const ShieldIcon = (Shield as any) ?? (() => <span>🛡️</span>)
const ArrowRightIcon = (ArrowRight as any) ?? (() => <span>➡️</span>)

/** Named export requerido por app/page.tsx */
export function AiSection() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const chatRef = useRef<HTMLDivElement | null>(null)

  // Hace scroll al final cuando cambian mensajes
  useEffect(() => {
    try {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight
      }
    } catch (e) {
      // noop
    }
  }, [messages, loading])

  const sendMessage = async () => {
    if (loading) return // evita doble envío
    const content = input.trim()
    if (!content) return

    setLoading(true)

    const userMsg = { role: "user", content }
    const msgsWithUser = [...messages, userMsg]
    // Actualiza mensajes con el user message
    setMessages(msgsWithUser)
    setInput("")

    // Agrega placeholder "Pensando..."
    const thinkingMsg = { role: "assistant", content: "⏳ Pensando..." }
    setMessages((prev) => [...prev, thinkingMsg])

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: msgsWithUser }),
      })

      const text = await res.text()
      // debug: puedes comentar estos console.logs en producción
      console.debug("/api/chat status:", res.status)
      console.debug("/api/chat raw response:", text)

      if (!res.ok) {
        // reemplaza el mensaje thinking por el error
        setMessages((prev) => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: "assistant", content: `⚠️ Error: ${res.status} - ${text}` }
          return copy
        })
        return
      }

      // intenta parsear JSON
      let data: any = null
      try {
        data = JSON.parse(text)
      } catch {
        // si no es JSON, muestra el texto crudo
        setMessages((prev) => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: "assistant", content: text || "Respuesta inválida del servidor." }
          return copy
        })
        return
      }

      // extrae respuesta (ajusta si tu API devuelve otra estructura)
      const reply =
        data?.choices?.[0]?.message?.content ??
        data?.message ??
        data?.reply ??
        (typeof data === "string" ? data : JSON.stringify(data).slice(0, 2000))

      // reemplaza thinking con la respuesta real
      setMessages((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = { role: "assistant", content: reply }
        return copy
      })
    } catch (err) {
      console.error("Error fetch /api/chat:", err)
      setMessages((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = { role: "assistant", content: `⚠️ Error interno: ${String(err)}` }
        return copy
      })
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // evita enviar si Shift+Enter (permite nueva línea) y evita doble envío
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (!loading) sendMessage()
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <SparklesIcon className="h-4 w-4" />
              <span>Próximamente</span>
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Evaluación con Inteligencia Artificial
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Estamos desarrollando una herramienta de IA avanzada para identificar patrones y ayudarte a prevenir
              problemas cardiovasculares.
            </p>
          </div>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Sistema de Análisis Predictivo</CardTitle>
              <CardDescription className="text-base">Tecnología de vanguardia para tu salud cardiovascular</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 rounded-lg bg-card p-3">
                    <LineChartIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Análisis de Patrones</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Identifica tendencias en tus datos de salud para detectar riesgos tempranos
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 rounded-lg bg-card p-3">
                    <ShieldIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Prevención Personalizada</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Recomendaciones específicas basadas en tu perfil de riesgo único
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 rounded-lg bg-card p-3">
                    <SparklesIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Monitoreo Continuo</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Seguimiento inteligente de tu salud cardiovascular en tiempo real
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-card p-6">
                <h3 className="mb-4 text-center text-lg font-semibold text-foreground">¿Cómo funcionará?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Ingresa tus datos de salud</p>
                      <p className="text-sm text-muted-foreground">
                        Presión arterial, colesterol, historial familiar y hábitos de vida
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Análisis con IA</p>
                      <p className="text-sm text-muted-foreground">
                        Nuestro sistema identifica patrones y calcula tu nivel de riesgo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Recibe recomendaciones personalizadas</p>
                      <p className="text-sm text-muted-foreground">
                        Plan de acción específico para mejorar tu salud cardiovascular
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" disabled className="gap-2" type="button">
                  Próximamente disponible
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <p className="mt-3 text-sm text-muted-foreground">
                  Regístrate para recibir notificaciones cuando esté disponible
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Chat box abajo */}
          <div className="mt-8">
            <Card className="mt-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/10">
                    <Brain className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Chat IA (beta)</CardTitle>
                    <CardDescription className="text-sm">Haz preguntas sobre salud cardiovascular</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div ref={chatRef} className="h-120 overflow-y-auto rounded-md border p-3 bg-card">
                  {messages.length === 0 && (
                    <p className="text-muted-foreground text-center mt-6">💬 Escribe algo para comenzar</p>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} className={`my-2 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                          m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        }`}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <Input
                    placeholder="Escribe tu mensaje..."
                    value={input}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                    aria-label="Mensaje"
                  />
                  <Button onClick={sendMessage} disabled={loading} className="px-4" type="button" aria-label="Enviar">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {loading && <p className="text-muted-foreground text-sm mt-2">⏳ Pensando...</p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
