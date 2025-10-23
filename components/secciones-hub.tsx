"use client"

import { useRouter } from "next/navigation"
import React from "react"

const sections = [
  { href: "/informacion-general", label: "Información General" },
  { href: "/estadisticas", label: "Estadísticas" },
  { href: "/problemas-cardiovasculares", label: "Problemas Cardiovasculares" },
  { href: "/factores-riesgo", label: "Factores de Riesgo" },
  { href: "/prevencion", label: "Prevención" },
  { href: "/ia", label: "Evaluación IA" },
  // { href: "/nosotros", label: "Nosotros" },
]

// Devuelve el SVG personalizado según la ruta
function getIcon(href: string) {
  switch (href) {
    case "/informacion-general":
      return (
        <svg className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M12 8v1" />
          <path d="M11 11h2v5h-2z" />
        </svg>
      )
    case "/estadisticas":
      return (
        <svg className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 3v18h18" />
          <rect x="6" y="10" width="2" height="8" rx="1" />
          <rect x="10" y="6" width="2" height="12" rx="1" />
          <rect x="14" y="13" width="2" height="5" rx="1" />
          <rect x="18" y="4" width="2" height="14" rx="1" />
        </svg>
      )
    case "/problemas-cardiovasculares":
      return (
        <svg className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M20.8 8.6a5.5 5.5 0 00-8-7.2L12 3 11.2 1.4A5.5 5.5 0 003 8.6c0 5.7 9 11 9 11s9-5.3 9-11z" />
          <path d="M8 12s1.5-2 4-2 4 2 4 2" />
        </svg>
      )
    case "/factores-riesgo":
      return (
        <svg className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      )
    case "/prevencion":
      return (
        <svg className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M12 2l7 4v6c0 5-3.58 9.74-7 10-3.42-.26-7-5-7-10V6l7-4z" />
          <path d="M9.5 12.5l1.5 1.5 4-4" />
        </svg>
      )
    case "/ia":
      return (
        <svg className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 12h10" />
          <path d="M12 7v10" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M16 21v-4" />
          <path d="M8 21v-4" />
        </svg>
      )
    case "/nosotros":
      return (
        <svg className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    default:
      return (
        <svg className="w-6 h-6 text-muted-foreground transition-colors group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8l4 4-4 4" />
          <path d="M8 12h8" />
        </svg>
      )
  }
}

export function SeccionesHub() {
  const router = useRouter()

  const handleClick = async (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    try {
      await router.push(href)
    } catch (err) {
      window.location.href = href
    }
  }

  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-bold">Secciones</h2>
        <p className="mb-6 text-sm text-muted-foreground">Accede rápidamente a cualquier sección del sitio.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sections.map((s) => (
            <div key={s.label} className="">
              <a
                href={s.href}
                onClick={(e) => handleClick(e, s.href)}
                className="bg-gray-100 group block rounded-lg border p-4 bg-card transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99] cursor-pointer"
                aria-label={`Ir a ${s.label}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{s.label}</h3>

                  {/* Icono personalizado por sección */}
                  <span className="ml-4 inline-flex items-center justify-center rounded-full p-2 bg-transparent transition-colors group-hover:bg-accent/10">
                    {getIcon(s.href)}
                    <span className="sr-only">Ir a {s.label}</span>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
