import { SeccionesHub } from "@/components/secciones-hub"
import { InformacionGeneral } from "@/components/informacion-general"

export default function Page() {
  return (
    <main className="min-h-screen py-12">
      <InformacionGeneral />
      <SeccionesHub />
    </main>
  )
}
