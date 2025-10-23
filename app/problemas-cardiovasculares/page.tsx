import { SeccionesHub } from "@/components/secciones-hub"
import { ProblemasCardiovasculares } from "@/components/problemas-cardiovasculares"

export default function Page() {
  return (
    <main className="min-h-screen">
      <ProblemasCardiovasculares />
      <SeccionesHub />
    </main>
  )
}
