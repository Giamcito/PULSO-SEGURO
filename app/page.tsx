import { CarruselEducativo } from "@/components/carrusel-educativo"
import { InformacionGeneral } from "@/components/informacion-general"
import { Estadisticas } from "@/components/estadisticas"
import { ProblemasCardiovasculares } from "@/components/problemas-cardiovasculares"
import { FactoresRiesgo } from "@/components/factores-riesgo"
import { Prevencion } from "@/components/prevencion"
import { AiSection } from "@/components/ai-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CarruselEducativo />
      <InformacionGeneral />
      <Estadisticas />
      <ProblemasCardiovasculares />
      <FactoresRiesgo />
      <Prevencion />
      <AiSection />
      <Footer />
    </main>
  )
}
