import { Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Pulso Seguro</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Plataforma integral para educar, prevenir y conectar a las personas en torno a la salud cardiovascular.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Navegación</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="hover:text-primary transition-colors">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="hover:text-primary transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/#ai-section" className="hover:text-primary transition-colors">
                  Evaluación IA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/recursos#articulos" className="hover:text-primary transition-colors">
                  Artículos Científicos
                </Link>
              </li>
              <li>
                <Link href="/recursos#guias" className="hover:text-primary transition-colors">
                  Guías Médicas
                </Link>
              </li>
              <li>
                <Link href="/recursos#ejercicio" className="hover:text-primary transition-colors">
                  Rutinas de Ejercicio
                </Link>
              </li>
              <li>
                <Link href="/recursos#alimentacion" className="hover:text-primary transition-colors">
                  Alimentación Saludable
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos de uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 Pulso Seguro. Esta información es solo para fines educativos y no reemplaza el consejo médico
            profesional.
          </p>
        </div>
      </div>
    </footer>
  )
}
