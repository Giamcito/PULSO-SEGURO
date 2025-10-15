import { Card } from "@/components/ui/card"
import { Dumbbell, Clock, TrendingUp, Heart } from "lucide-react"

const rutinas = [
  {
    titulo: "Caminata cardiovascular",
    nivel: "Principiante",
    duracion: "30 minutos",
    frecuencia: "5 días/semana",
    beneficios: "Mejora la circulación, fortalece el corazón, reduce la presión arterial",
    descripcion:
      "Comienza con 5 minutos de calentamiento a paso lento, luego aumenta el ritmo durante 20 minutos manteniendo una intensidad moderada donde puedas hablar pero con algo de esfuerzo. Finaliza con 5 minutos de enfriamiento.",
    color: "from-green-500 to-emerald-500",
  },
  {
    titulo: "Entrenamiento de intervalos",
    nivel: "Intermedio",
    duracion: "25 minutos",
    frecuencia: "3 días/semana",
    beneficios: "Aumenta la capacidad aeróbica, quema calorías, fortalece el sistema cardiovascular",
    descripcion:
      "Alterna entre 2 minutos de ejercicio intenso (correr, bicicleta) y 1 minuto de recuperación activa. Repite 8 ciclos. Incluye 5 minutos de calentamiento y enfriamiento.",
    color: "from-orange-500 to-red-500",
  },
  {
    titulo: "Natación cardiovascular",
    nivel: "Todos los niveles",
    duracion: "40 minutos",
    frecuencia: "3-4 días/semana",
    beneficios: "Ejercicio de bajo impacto, trabaja todo el cuerpo, excelente para el corazón",
    descripcion:
      "Nada a ritmo constante durante 30 minutos, alternando estilos (crol, espalda). Incluye 5 minutos de calentamiento y 5 de enfriamiento con estiramientos en el agua.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    titulo: "Yoga para el corazón",
    nivel: "Principiante",
    duracion: "45 minutos",
    frecuencia: "3 días/semana",
    beneficios: "Reduce el estrés, mejora la flexibilidad, regula la presión arterial",
    descripcion:
      "Secuencia de posturas suaves enfocadas en la respiración y relajación. Incluye saludos al sol modificados, posturas de equilibrio y meditación final.",
    color: "from-purple-500 to-pink-500",
  },
]

export function RutinasEjercicio() {
  return (
    <section id="ejercicio" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Dumbbell className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Rutinas de Ejercicio</h2>
          </div>
          <p className="text-muted-foreground">Actividades físicas diseñadas para fortalecer tu corazón</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rutinas.map((rutina, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${rutina.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{rutina.titulo}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {rutina.nivel}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{rutina.duracion}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span>{rutina.frecuencia}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Beneficios:</h4>
                      <p className="text-sm text-muted-foreground">{rutina.beneficios}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{rutina.descripcion}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <p className="text-center text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Importante:</span> Consulta con tu médico antes de comenzar
            cualquier programa de ejercicio, especialmente si tienes condiciones cardíacas preexistentes.
          </p>
        </Card>
      </div>
    </section>
  )
}
