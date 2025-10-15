import { Card } from "@/components/ui/card"
import { AlertTriangle, Cigarette, Scale, Activity, Droplet, Brain, Dna, Calendar } from "lucide-react"

const factores = [
  {
    icon: Cigarette,
    titulo: "Tabaquismo",
    descripcion: "Fumar daña las arterias y aumenta significativamente el riesgo de enfermedades cardíacas.",
    modificable: true,
  },
  {
    icon: Scale,
    titulo: "Obesidad",
    descripcion: "El exceso de peso aumenta la presión arterial y los niveles de colesterol.",
    modificable: true,
  },
  {
    icon: Activity,
    titulo: "Sedentarismo",
    descripcion: "La falta de ejercicio debilita el corazón y aumenta otros factores de riesgo.",
    modificable: true,
  },
  {
    icon: Droplet,
    titulo: "Hipertensión",
    descripcion: "La presión arterial alta daña las arterias y sobrecarga el corazón.",
    modificable: true,
  },
  {
    icon: Brain,
    titulo: "Estrés Crónico",
    descripcion: "El estrés prolongado aumenta la presión arterial y puede dañar las arterias.",
    modificable: true,
  },
  {
    icon: Dna,
    titulo: "Factores Genéticos",
    descripcion: "Antecedentes familiares de enfermedades cardiovasculares aumentan el riesgo.",
    modificable: false,
  },
  {
    icon: Calendar,
    titulo: "Edad",
    descripcion: "El riesgo aumenta con la edad, especialmente después de los 45 años en hombres y 55 en mujeres.",
    modificable: false,
  },
]

export function FactoresRiesgo() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-semibold">Factores de Riesgo</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Conoce los Factores de Riesgo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Identificar y controlar los factores de riesgo es fundamental para prevenir enfermedades cardiovasculares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {factores.map((factor, index) => {
            const Icon = factor.icon
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-lg transition-all ${
                  factor.modificable ? "border-l-4 border-l-primary" : "border-l-4 border-l-muted"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${factor.modificable ? "bg-primary/10" : "bg-muted"}`}>
                    <Icon className={`h-6 w-6 ${factor.modificable ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{factor.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{factor.descripcion}</p>
                    <span
                      className={`text-xs font-semibold ${
                        factor.modificable ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {factor.modificable ? "✓ Modificable" : "○ No modificable"}
                    </span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-center text-muted-foreground">
            <span className="font-semibold text-foreground">Importante:</span> Los factores modificables pueden
            controlarse con cambios en el estilo de vida y tratamiento médico adecuado.
          </p>
        </Card>
      </div>
    </section>
  )
}
