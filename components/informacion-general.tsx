import { Heart, AlertCircle, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function InformacionGeneral() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Enfermedades Cardiovasculares</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Las enfermedades cardiovasculares son la principal causa de muerte a nivel mundial. Conocer sus causas y su
            impacto es el primer paso para la prevención.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 border-2 hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">¿Qué son?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Las enfermedades cardiovasculares son un conjunto de trastornos del corazón y los vasos sanguíneos.
                  Incluyen cardiopatía coronaria, enfermedades cerebrovasculares, hipertensión arterial, enfermedad
                  arterial periférica, cardiopatía reumática y cardiopatías congénitas.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Causas Principales</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dieta poco saludable y alta en grasas saturadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sedentarismo y falta de actividad física</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Consumo de tabaco y alcohol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Estrés crónico y factores genéticos</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <TrendingUp className="h-12 w-12 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Impacto en la Salud Pública</h3>
              <p className="text-muted-foreground leading-relaxed">
                Las enfermedades cardiovasculares causan aproximadamente 17.9 millones de muertes al año, representando
                el 31% de todas las muertes globales. En América Latina, son responsables de más del 30% de las muertes,
                afectando principalmente a personas entre 30 y 70 años. La buena noticia es que la mayoría de estas
                enfermedades pueden prevenirse.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
