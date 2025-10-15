import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Calendar, User } from "lucide-react"

const articulos = [
  {
    titulo: "Nuevos avances en el tratamiento de la insuficiencia cardíaca",
    autores: "Dr. Juan Pérez, Dra. María López",
    fecha: "Enero 2025",
    revista: "Journal of Cardiology",
    resumen:
      "Estudio reciente sobre nuevas terapias farmacológicas que han demostrado reducir la mortalidad en pacientes con insuficiencia cardíaca crónica en un 30%.",
    enlace: "#",
  },
  {
    titulo: "Impacto de la dieta mediterránea en la salud cardiovascular",
    autores: "Dra. Ana García, Dr. Carlos Ruiz",
    fecha: "Diciembre 2024",
    revista: "European Heart Journal",
    resumen:
      "Investigación que confirma los beneficios de la dieta mediterránea en la prevención de enfermedades cardiovasculares, con seguimiento de 10 años.",
    enlace: "#",
  },
  {
    titulo: "Ejercicio de alta intensidad y salud cardíaca",
    autores: "Dr. Roberto Martínez",
    fecha: "Noviembre 2024",
    revista: "Sports Medicine Review",
    resumen:
      "Análisis de los efectos del entrenamiento de intervalos de alta intensidad (HIIT) en la función cardiovascular y la prevención de enfermedades.",
    enlace: "#",
  },
]

export function ArticulosCientificos() {
  return (
    <section id="articulos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Artículos Científicos</h2>
          </div>
          <p className="text-muted-foreground">Publicaciones recientes sobre enfermedades cardiovasculares</p>
        </div>

        <div className="grid gap-6">
          {articulos.map((articulo, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-balance">{articulo.titulo}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {articulo.autores}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {articulo.fecha}
                    </span>
                    <span className="font-semibold text-primary">{articulo.revista}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{articulo.resumen}</p>
                </div>
                <div className="flex md:flex-col gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Leer más
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
