import { CarruselEducativo } from "@/components/carrusel-educativo"
import { SeccionesHub } from "@/components/secciones-hub"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CarruselEducativo />
      {/* Hub de secciones: enlaces (nodo del grafo) */}
      <SeccionesHub />
    </main>
  )
}
