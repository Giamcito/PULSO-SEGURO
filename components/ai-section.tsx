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
const ArrowRightIcon = (ArrowRight as any) ?? (() => <span>➡️</span>)

/** Named export requerido por app/page.tsx */
export function AiSection() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const chatRef = useRef<HTMLDivElement | null>(null)
  const chatCardRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const SCROLL_OFFSET = 96 // ajuste en px: aumenta si quieres que quede más abajo, disminuye si quieres más arriba

  // Scroll suave hacia el chat (usa la ref si existe)
  const scrollToChat = () => {
    try {
      // Priorizar el contenedor completo del chat y aplicar offset para que quede "un poco más arriba"
      if (chatCardRef.current) {
        const rect = chatCardRef.current.getBoundingClientRect()
        const top = rect.top + window.scrollY - SCROLL_OFFSET
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
        return
      }
      // Fallback: scroll al área de mensajes con offset
      if (chatRef.current) {
        const rect = chatRef.current.getBoundingClientRect()
        const top = rect.top + window.scrollY - SCROLL_OFFSET
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
        return
      }
      const el = document.getElementById("chat-container")
      if (el) {
        const rect = el.getBoundingClientRect()
        const top = rect.top + window.scrollY - SCROLL_OFFSET
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
      }
    } catch (e) {
      // noop
    }
  }

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

  const suggestedPrompts = [
    "¿Cuál es mi riesgo cardiovascular según mis datos?",
    "Consejos rápidos de dieta para bajar colesterol",
    "Rutina de ejercicio suave para principiantes",
    "¿Qué alimentos debo evitar si tengo hipertensión?",
  ]

  const handleChoosePrompt = (p: string) => {
    setInput(p)
    // desplazar y enfocar
    scrollToChat()
    setTimeout(() => inputRef.current?.focus(), 300)
  }

  return (
    <section id="ai-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Evaluación con Inteligencia Artificial
            </h2>
          </div>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5 shadow-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Sistema de Análisis Predictivo</CardTitle>
              <CardDescription className="text-base">Recibe recomendaciones específicas basadas en tu perfil de riesgo único</CardDescription>
            </CardHeader>

            <CardContent>

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
              <div className="mt-4 flex justify-center">
                <Button
                  onClick={scrollToChat}
                  className="px-4 py-2 bg-gradient-to-r from-accent to-red-800 text-white transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
                  type="button"
                  aria-label="Ir al chat"
                >
                  Ir al chat
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Chat box abajo */}
          <div className="mt-6" ref={chatCardRef}>
            <Card className="mt-6 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent/10">
                    <Brain className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Karmelita IA</CardTitle>
                    <CardDescription className="text-sm">Haz preguntas sobre salud cardiovascular</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Sugerencias rápidas</div>
                  <div className="text-xs text-muted-foreground">Respuestas en segundos</div>
                </div>

                <div className="mb-4 flex flex-wrap gap-3">
                  {suggestedPrompts.map((p) => (
                    <button
                      key={p}
                      onClick={() => handleChoosePrompt(p)}
                      className="px-3 py-1 rounded-full bg-muted/40 hover:bg-muted/60 text-sm transition"
                      aria-label={`Usar prompt: ${p}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <div
                  id="chat-container"
                  ref={chatRef}
                  className="min-h-[10rem] max-h-[30rem] overflow-y-auto rounded-md border p-3 bg-card transition-all duration-200"
                >
                  {messages.length === 0 && (
                    <p className="text-muted-foreground text-center mt-6">Escribe algo en el chat para comenzar</p>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} className={`my-2 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm break-words whitespace-pre-wrap shadow-sm leading-relaxed ${
                          m.role === "user"
                            ? "bg-gradient-to-r from-accent to-red-800 text-white rounded-br-none"
                            : "bg-white text-foreground rounded-bl-none border"
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
                    ref={inputRef}
                    className="flex-1 px-4 py-3 rounded-lg border border-muted-foreground/20 bg-input placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Mensaje"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={loading}
                    className="px-4 rounded-lg bg-gradient-to-r from-accent to-red-800 text-white hover:shadow-md"
                    type="button"
                    aria-label="Enviar"
                  >
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
