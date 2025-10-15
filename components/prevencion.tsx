import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Apple, Dumbbell, Cigarette, Stethoscope, Moon, Smile } from "lucide-react"

const consejos = [
  {
    icon: Apple,
    title: "Alimentación Saludable",
    tips: [
      "Consume frutas y verduras diariamente",
      "Reduce el consumo de sal y grasas saturadas",
      "Incluye pescado rico en omega-3",
      "Limita el azúcar y alimentos procesados",
    ],
  },
  {
    icon: Dumbbell,
    title: "Actividad Física Regular",
    tips: [
      "Al menos 150 minutos de ejercicio semanal",
      "Combina ejercicio aeróbico y de fuerza",
      "Mantén un peso saludable",
      "Evita el sedentarismo prolongado",
    ],
  },
  {
    icon: Cigarette,
    title: "Evita Hábitos Nocivos",
    tips: [
      "No fumes ni uses productos de tabaco",
      "Limita el consumo de alcohol",
      "Evita el estrés crónico",
      "Mantén un ambiente libre de humo",
    ],
  },
  {
    icon: Stethoscope,
    title: "Controles Médicos",
    tips: [
      "Revisa tu presión arterial regularmente",
      "Controla tus niveles de colesterol",
      "Monitorea tu glucosa en sangre",
      "Realiza chequeos médicos anuales",
    ],
  },
  {
    icon: Moon,
    title: "Descanso Adecuado",
    tips: [
      "Duerme 7-8 horas diarias",
      "Mantén horarios regulares de sueño",
      "Crea un ambiente propicio para dormir",
      "Trata trastornos del sueño",
    ],
  },
  {
    icon: Smile,
    title: "Salud Mental",
    tips: [
      "Gestiona el estrés efectivamente",
      "Practica técnicas de relajación",
      "Mantén conexiones sociales",
      "Busca apoyo profesional si es necesario",
    ],
  },
]

export function Prevencion() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Prevención y Cuidado
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Adopta estos hábitos saludables para reducir significativamente tu riesgo cardiovascular.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consejos.map((consejo, index) => {
            const Icon = consejo.icon
            return (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-3 w-fit">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{consejo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {consejo.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
