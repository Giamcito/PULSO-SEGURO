import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, TrendingUp, Clock, Users } from "lucide-react"

const temasPopulares = [
  {
    titulo: "¿Qué ejercicios son mejores para el corazón?",
    autor: "Pedro López",
    respuestas: 23,
    vistas: 156,
    tiempo: "Hace 3 horas",
  },
  {
    titulo: "Recetas saludables para el corazón",
    autor: "Laura Sánchez",
    respuestas: 45,
    vistas: 289,
    tiempo: "Hace 1 día",
  },
  {
    titulo: "Cómo manejar el estrés y la ansiedad",
    autor: "Roberto Díaz",
    respuestas: 18,
    vistas: 134,
    tiempo: "Hace 2 días",
  },
]

export function ForoPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MessageSquare className="h-5 w-5" />
            <span className="font-semibold">Foro de Discusión</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Temas Populares</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Únete a las conversaciones y comparte tus dudas con la comunidad
          </p>
        </div>

        <div className="grid gap-4 mb-8">
          {temasPopulares.map((tema, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{tema.titulo}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {tema.autor}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tema.tiempo}
                    </span>
                  </div>
                </div>
                <div className="flex gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{tema.respuestas}</div>
                    <div className="text-xs text-muted-foreground">Respuestas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{tema.vistas}</div>
                    <div className="text-xs text-muted-foreground">Vistas</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Foro Completo Próximamente</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estamos desarrollando un sistema completo de foros donde podrás crear temas, responder preguntas y conectar
            con otros miembros de la comunidad.
          </p>
          <Button size="lg">Notificarme cuando esté listo</Button>
        </Card>
      </div>
    </section>
  )
}
