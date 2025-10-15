import { Activity, Users, TrendingDown, AlertCircle } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "17.9M",
    label: "Muertes anuales por enfermedades cardiovasculares",
    description: "Principal causa de muerte a nivel mundial",
  },
  {
    icon: Activity,
    value: "80%",
    label: "Son prevenibles",
    description: "Con cambios en el estilo de vida",
  },
  {
    icon: TrendingDown,
    value: "30%",
    label: "Reducción del riesgo",
    description: "Con detección temprana",
  },
  {
    icon: AlertCircle,
    value: "1 de 3",
    label: "Adultos afectados",
    description: "Tienen algún factor de riesgo",
  },
]

export function Estadisticas() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-2 text-3xl font-bold text-foreground md:text-4xl">{stat.value}</div>
                <div className="mb-1 font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
