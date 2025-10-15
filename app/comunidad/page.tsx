import { TestimoniosSection } from "@/components/testimonios-section"
import { ForoPreview } from "@/components/foro-preview"
import { Users, MessageSquare, Heart, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ComunidadPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Users className="h-5 w-5" />
            <span className="font-semibold">Comunidad de Pacientes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Comparte tu Experiencia</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Un espacio seguro donde pacientes y familiares pueden compartir experiencias, consejos y apoyo mutuo en su
            camino hacia una mejor salud cardiovascular.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">1,234</div>
              <div className="text-sm text-muted-foreground">Miembros</div>
            </Card>
            <Card className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">567</div>
              <div className="text-sm text-muted-foreground">Testimonios</div>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">2,890</div>
              <div className="text-sm text-muted-foreground">Reacciones</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">4.8</div>
              <div className="text-sm text-muted-foreground">Valoración</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <TestimoniosSection />

      {/* Foro Preview */}
      <ForoPreview />
    </main>
  )
}
