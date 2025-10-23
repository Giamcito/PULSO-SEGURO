import { TestimoniosSection } from "@/components/testimonios-section"
import { ForoPreview } from "@/components/foro-preview"
import { Users, MessageSquare, Heart, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { SeccionesHub } from "@/components/secciones-hub"

export default function ComunidadPage() {
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
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">Comunidad de Pacientes</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Comparte tu experiencia</h1>
                  <p className="text-base md:text-lg max-w-2xl opacity-95">Un espacio seguro donde pacientes y familiares comparten experiencias, consejos y apoyo mutuo en su camino hacia una mejor salud cardiovascular.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-white border shadow-sm">
              <Users className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">1,234</div>
              <div className="text-sm text-muted-foreground">Miembros</div>
            </Card>
            <Card className="p-6 text-center bg-white border shadow-sm">
              <MessageSquare className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">567</div>
              <div className="text-sm text-muted-foreground">Testimonios</div>
            </Card>
            <Card className="p-6 text-center bg-white border shadow-sm">
              <Heart className="h-8 w-8 text-rose-500 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">2,890</div>
              <div className="text-sm text-muted-foreground">Reacciones</div>
            </Card>
            <Card className="p-6 text-center bg-white border shadow-sm">
              <Star className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">4.8</div>
              <div className="text-sm text-muted-foreground">Valoración</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Destacados de la comunidad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">Historias de recuperación</h3>
                  <p className="text-sm text-muted-foreground mt-2">Relatos inspiradores de miembros que mejoraron su calidad de vida.</p>
                </div>
                <div className="text-3xl text-accent font-bold">❤</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">Hilos activos</h3>
                  <p className="text-sm text-muted-foreground mt-2">Conversaciones recientes sobre síntomas, medicamentos y apoyo emocional.</p>
                </div>
                <div className="text-3xl text-pink-500 font-bold">💬</div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">Eventos y grupos</h3>
                  <p className="text-sm text-muted-foreground mt-2">Encuentros virtuales y grupos de apoyo por región.</p>
                </div>
                <div className="text-3xl text-emerald-600 font-bold">★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <TestimoniosSection />

      {/* Foro Preview */}
      <ForoPreview />

      {/* Hub de Secciones (navegación rápida) */}
      <SeccionesHub />
    </main>
  )
}
