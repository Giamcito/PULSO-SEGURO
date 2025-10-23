import { SeccionesHub } from "@/components/secciones-hub"
import { Estadisticas } from "@/components/estadisticas"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Estadisticas />
      <SeccionesHub />
    </main>
  )
}
