import { SeccionesHub } from "@/components/secciones-hub"

export default function Page() {
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="container mx-auto pb-12 px-4">
        <header className="mb-10 rounded-xl overflow-hidden shadow-md">
          <div className="px-6 py-10 bg-gradient-to-r from-accent/90 to-red-800 text-white">
            <h1 className="mb-2 text-4xl sm:text-5xl font-extrabold tracking-tight">Nosotros</h1>
            <p className="text-base sm:text-lg max-w-3xl opacity-95">
              Somos un equipo comprometido con la salud cardiovascular. Diseñamos herramientas,
              contenidos y soluciones para ayudar a las personas a prevenir, detectar y entender
              su condición cardíaca.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            <article className="prose max-w-none bg-white/80 p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <svg className="w-12 h-12 text-accent shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h2 className="font-bold text-2xl">Misión</h2>
                  <p className="mt-2">Nuestra misión es empoderar a la comunidad con información confiable, recursos accesibles y tecnología para la prevención y el seguimiento de la salud cardiovascular. Trabajamos para que cada persona pueda tomar decisiones informadas sobre su bienestar.</p>
                </div>
              </div>

              <hr className="my-6 border-slate-100" />

              <div className="flex items-start gap-4">
                <svg className="w-12 h-12 text-pink-500 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-bold text-2xl">Visión</h3>
                  <p className="mt-2">Ser la plataforma de referencia en educación y prevención cardiovascular en habla hispana, integrando investigación, datos y accesibilidad tecnológica.</p>
                </div>
              </div>

              <hr className="my-6 border-slate-100" />

              <div>
                <h3 className="font-bold text-2xl">Valores</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <li className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="font-semibold">Transparencia</div>
                    <div className="text-sm text-muted-foreground mt-1">Contenido basado en evidencia y fuentes claras.</div>
                  </li>
                  <li className="p-4 rounded-lg bg-sky-50 border border-sky-100">
                    <div className="font-semibold">Colaboración</div>
                    <div className="text-sm text-muted-foreground mt-1">Trabajo conjunto con profesionales y tecnologías.</div>
                  </li>
                  <li className="p-4 rounded-lg bg-rose-50 border border-rose-100">
                    <div className="font-semibold">Innovación responsable</div>
                    <div className="text-sm text-muted-foreground mt-1">IA y tecnología al servicio de la salud.</div>
                  </li>
                </ul>
              </div>
            </article>

            <article className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border shadow-sm">
                <h3 className="text-lg font-semibold inline-flex items-center gap-2"><span className="text-accent">●</span> Impacto</h3>
                <p className="text-muted-foreground text-sm mt-2">Historias reales de usuarios que mejoraron su salud gracias a las recomendaciones y herramientas.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border shadow-sm">
                <h3 className="text-lg font-semibold inline-flex items-center gap-2"><span className="text-pink-500">❤</span> Investigación</h3>
                <p className="text-muted-foreground text-sm mt-2">Colaboramos con instituciones para validar y mejorar nuestras métricas.</p>
              </div>
            </article>
          </section>

          <aside className="space-y-6">
            <div className="p-4 rounded-xl bg-white border shadow-sm">
              <h3 className="text-lg font-semibold">Equipo</h3>
              <p className="text-sm text-muted-foreground mt-2">Profesionales en ingeniería y tecnologías.</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium">CG</div>
                  <div>
                    <div className="font-medium">Camilo Giraldo</div>
                    <div className="text-xs text-muted-foreground">Líder de producto</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-sm font-medium">KP</div>
                  <div>
                    <div className="font-medium">Katerin Palacio</div>
                    <div className="text-xs text-muted-foreground">Investigación clínica</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-medium">GL</div>
                  <div>
                    <div className="font-medium">Gersain Leal</div>
                    <div className="text-xs text-muted-foreground">Ingeniería</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-sm font-medium">AS</div>
                  <div>
                    <div className="font-medium">Adrian Saavedra</div>
                    <div className="text-xs text-muted-foreground">Periodista</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white border shadow-sm">
              <h3 className="text-lg font-semibold">Estadísticas rápidas</h3>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">1.2k+</div>
                  <div className="text-xs text-muted-foreground">Usuarios</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-800">350+</div>
                  <div className="text-xs text-muted-foreground">Historias</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">24</div>
                  <div className="text-xs text-muted-foreground">Colaboradores</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-accent/10 to-pink-50 border border-accent/20 text-center shadow-sm">
              <h4 className="font-semibold">¿Quieres colaborar?</h4>
              <p className="text-sm text-muted-foreground mt-2">Escríbenos para propuestas de investigación, contenido o alianzas.</p>
              <a href="/contacto" className="inline-block mt-3 rounded-md px-4 py-2 bg-accent text-accent-foreground font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70">Contacto</a>
            </div>
          </aside>
        </div>
      </div>

      <SeccionesHub />
    </main>
  )
}
