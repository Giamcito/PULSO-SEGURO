import { ArticulosCientificos } from "@/components/articulos-cientificos"
import { GuiasMedicas } from "@/components/guias-medicas"
import { RutinasEjercicio } from "@/components/rutinas-ejercicio"
import { AlimentosSaludables } from "@/components/alimentos-saludables"
import { BookOpen } from "lucide-react"
import { SeccionesHub } from "@/components/secciones-hub"

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <div className="px-6 py-12 bg-gradient-to-r from-accent/90 to-red-800 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-4">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-semibold">Biblioteca de Recursos</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Conocimiento para tu salud</h1>
                  <p className="text-base md:text-lg max-w-2xl opacity-95">Accede a artículos científicos, guías médicas, rutinas de ejercicio y consejos nutricionales para cuidar tu corazón.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes de contenidos (mantener) */}
      <section id="buscar">
        <ArticulosCientificos />
        <GuiasMedicas />
        <RutinasEjercicio />
        <AlimentosSaludables />
      </section>

      {/* Hub de Secciones (navegación rápida) */}
      <SeccionesHub />
    </main>
  )
}
