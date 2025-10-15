import { ArticulosCientificos } from "@/components/articulos-cientificos"
import { GuiasMedicas } from "@/components/guias-medicas"
import { RutinasEjercicio } from "@/components/rutinas-ejercicio"
import { AlimentosSaludables } from "@/components/alimentos-saludables"
import { BookOpen } from "lucide-react"

export default function RecursosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-5 w-5" />
            <span className="font-semibold">Biblioteca de Recursos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Conocimiento para tu Salud</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Accede a artículos científicos, guías médicas, rutinas de ejercicio y consejos nutricionales para cuidar tu
            corazón.
          </p>
        </div>
      </section>

      <ArticulosCientificos />
      <GuiasMedicas />
      <RutinasEjercicio />
      <AlimentosSaludables />
    </main>
  )
}
