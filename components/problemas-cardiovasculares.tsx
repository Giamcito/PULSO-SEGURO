import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Zap, Droplets, Wind, Brain, Activity } from "lucide-react"

const problemas = [
  {
    icon: Heart,
    title: "Enfermedad Coronaria",
    description: "Ocurre cuando las arterias que suministran sangre al corazón se estrechan o bloquean.",
    symptoms: ["Dolor en el pecho", "Fatiga", "Dificultad para respirar"],
  },
  {
    icon: Zap,
    title: "Arritmias",
    description: "Alteraciones en el ritmo cardíaco que pueden ser demasiado rápido, lento o irregular.",
    symptoms: ["Palpitaciones", "Mareos", "Desmayos"],
  },
  {
    icon: Droplets,
    title: "Hipertensión",
    description: "Presión arterial alta que puede dañar las arterias y el corazón con el tiempo.",
    symptoms: ["Dolores de cabeza", "Visión borrosa", "Sangrado nasal"],
  },
  {
    icon: Wind,
    title: "Insuficiencia Cardíaca",
    description: "El corazón no puede bombear suficiente sangre para satisfacer las necesidades del cuerpo.",
    symptoms: ["Hinchazón", "Fatiga extrema", "Tos persistente"],
  },
  {
    icon: Brain,
    title: "Accidente Cerebrovascular",
    description: "Interrupción del flujo sanguíneo al cerebro, causando daño a las células cerebrales.",
    symptoms: ["Debilidad facial", "Confusión", "Dificultad para hablar"],
  },
  {
    icon: Activity,
    title: "Cardiopatía Congénita",
    description: "Defectos en la estructura del corazón presentes desde el nacimiento.",
    symptoms: ["Cianosis", "Soplos cardíacos", "Crecimiento lento"],
  },
]

export function ProblemasCardiovasculares() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Principales Problemas Cardiovasculares
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Conoce los problemas cardiovasculares más comunes, sus características y síntomas principales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problemas.map((problema, index) => {
            const Icon = problema.icon
            return (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{problema.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{problema.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Síntomas comunes:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {problema.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
