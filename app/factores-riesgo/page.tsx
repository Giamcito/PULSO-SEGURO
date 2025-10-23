import { SeccionesHub } from "@/components/secciones-hub"
import { FactoresRiesgo } from "@/components/factores-riesgo"

export default function Page() {
  return (
    <main className="min-h-screen">
      <FactoresRiesgo />
      <SeccionesHub />
    </main>
  )
}
