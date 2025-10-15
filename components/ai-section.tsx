import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Brain, LineChart, Shield, ArrowRight } from "lucide-react"

export function AiSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Sparkles className="h-4 w-4" />
              <span>Próximamente</span>
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Evaluación con Inteligencia Artificial
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Estamos desarrollando una herramienta de IA avanzada para identificar patrones y ayudarte a prevenir
              problemas cardiovasculares.
            </p>
          </div>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Sistema de Análisis Predictivo</CardTitle>
              <CardDescription className="text-base">
                Tecnología de vanguardia para tu salud cardiovascular
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 rounded-lg bg-card p-3">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Análisis de Patrones</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Identifica tendencias en tus datos de salud para detectar riesgos tempranos
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 rounded-lg bg-card p-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Prevención Personalizada</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Recomendaciones específicas basadas en tu perfil de riesgo único
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 rounded-lg bg-card p-3">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">Monitoreo Continuo</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Seguimiento inteligente de tu salud cardiovascular en tiempo real
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-card p-6">
                <h3 className="mb-4 text-center text-lg font-semibold text-foreground">¿Cómo funcionará?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Ingresa tus datos de salud</p>
                      <p className="text-sm text-muted-foreground">
                        Presión arterial, colesterol, historial familiar y hábitos de vida
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Análisis con IA</p>
                      <p className="text-sm text-muted-foreground">
                        Nuestro sistema identifica patrones y calcula tu nivel de riesgo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Recibe recomendaciones personalizadas</p>
                      <p className="text-sm text-muted-foreground">
                        Plan de acción específico para mejorar tu salud cardiovascular
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" disabled className="gap-2">
                  Próximamente disponible
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="mt-3 text-sm text-muted-foreground">
                  Regístrate para recibir notificaciones cuando esté disponible
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
