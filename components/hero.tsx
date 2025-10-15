import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" />
            <span>Salud Cardiovascular</span>
          </div>

          <h1 className="mb-6 text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Cuida tu corazón, cuida tu vida
          </h1>

          <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Información completa sobre problemas cardiovasculares, prevención y herramientas avanzadas para proteger tu
            salud cardíaca.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Conocer más
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Evaluación con IA
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[url('/abstract-medical-heart-pattern.jpg')] bg-cover bg-center opacity-5" />
    </section>
  )
}
