import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, CheckCircle } from "lucide-react"

const guias = [
  {
    titulo: "Guía completa para el manejo de la hipertensión arterial",
    descripcion: "Protocolo actualizado para el diagnóstico, tratamiento y seguimiento de pacientes con presión alta.",
    puntosClave: [
      "Medición correcta de la presión arterial",
      "Tratamiento farmacológico y no farmacológico",
      "Modificaciones en el estilo de vida",
      "Seguimiento y control a largo plazo",
    ],
    paginas: 45,
  },
  {
    titulo: "Prevención y tratamiento del colesterol alto",
    descripcion:
      "Recomendaciones basadas en evidencia para el control de los niveles de colesterol y prevención de aterosclerosis.",
    puntosClave: [
      "Interpretación de análisis de lípidos",
      "Dieta para reducir el colesterol",
      "Medicamentos hipolipemiantes",
      "Ejercicio y cambios de hábitos",
    ],
    paginas: 38,
  },
  {
    titulo: "Rehabilitación cardíaca post-infarto",
    descripcion: "Programa estructurado de recuperación para pacientes que han sufrido un evento cardiovascular agudo.",
    puntosClave: [
      "Fases de la rehabilitación cardíaca",
      "Ejercicios seguros y progresivos",
      "Apoyo psicológico y emocional",
      "Prevención de recurrencias",
    ],
    paginas: 52,
  },
]

export function GuiasMedicas() {
  return (
    <section id="guias" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Guías Médicas</h2>
          </div>
          <p className="text-muted-foreground">Recomendaciones para tratamiento y manejo de afecciones cardíacas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guias.map((guia, index) => (
            <Card key={index} className="p-6 flex flex-col hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-balance">{guia.titulo}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{guia.descripcion}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Puntos clave:</h4>
                <ul className="space-y-2">
                  {guia.puntosClave.map((punto, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">{guia.paginas} páginas</span>
                </div>
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Descargar PDF
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
