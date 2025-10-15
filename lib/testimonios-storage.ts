// Utilidad para gestionar testimonios en localStorage

export interface Testimonio {
  id: string
  autor: string
  avatar: string
  fecha: string
  titulo: string
  contenido: string
  likes: number
  comentarios: number
  likedBy: string[]
}

const STORAGE_KEY = "pulso-seguro-testimonios"

// Testimonios iniciales de ejemplo
const testimoniosIniciales: Testimonio[] = [
  {
    id: "1",
    autor: "María González",
    avatar: "/placeholder.svg?height=40&width=40",
    fecha: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    titulo: "Mi recuperación después del infarto",
    contenido:
      "Hace 6 meses sufrí un infarto y pensé que mi vida había terminado. Gracias a los consejos de esta comunidad y el apoyo de mi familia, he logrado cambiar completamente mi estilo de vida. Ahora hago ejercicio regularmente y cuido mi alimentación. Me siento mejor que nunca.",
    likes: 45,
    comentarios: 12,
    likedBy: [],
  },
  {
    id: "2",
    autor: "Carlos Ramírez",
    avatar: "/placeholder.svg?height=40&width=40",
    fecha: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    titulo: "Controlando la hipertensión naturalmente",
    contenido:
      "Después de años luchando con la presión alta, finalmente encontré un equilibrio. Reduje la sal, aumenté el ejercicio y practiqué meditación. Mi presión ha bajado significativamente y mi médico está muy contento con los resultados.",
    likes: 38,
    comentarios: 8,
    likedBy: [],
  },
  {
    id: "3",
    autor: "Ana Martínez",
    avatar: "/placeholder.svg?height=40&width=40",
    fecha: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    titulo: "Prevención: la mejor medicina",
    contenido:
      "Tengo antecedentes familiares de problemas cardíacos, así que decidí tomar acción antes de que fuera tarde. Cambié mi dieta, empecé a correr y me hago chequeos regulares. La prevención realmente funciona y me siento increíble.",
    likes: 52,
    comentarios: 15,
    likedBy: [],
  },
]

export function getTestimonios(): Testimonio[] {
  if (typeof window === "undefined") return testimoniosIniciales

  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(testimoniosIniciales))
    return testimoniosIniciales
  }
  return JSON.parse(stored)
}

export function agregarTestimonio(titulo: string, contenido: string, autor = "Usuario Anónimo"): Testimonio {
  const testimonios = getTestimonios()
  const nuevoTestimonio: Testimonio = {
    id: Date.now().toString(),
    autor,
    avatar: "/placeholder.svg?height=40&width=40",
    fecha: new Date().toISOString(),
    titulo,
    contenido,
    likes: 0,
    comentarios: 0,
    likedBy: [],
  }

  const nuevosTestimonios = [nuevoTestimonio, ...testimonios]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosTestimonios))
  return nuevoTestimonio
}

export function actualizarTestimonio(id: string, titulo: string, contenido: string): boolean {
  const testimonios = getTestimonios()
  const index = testimonios.findIndex((t) => t.id === id)

  if (index === -1) return false

  testimonios[index] = {
    ...testimonios[index],
    titulo,
    contenido,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonios))
  return true
}

export function eliminarTestimonio(id: string): boolean {
  const testimonios = getTestimonios()
  const nuevosTestimonios = testimonios.filter((t) => t.id !== id)

  if (nuevosTestimonios.length === testimonios.length) return false

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosTestimonios))
  return true
}

export function toggleLike(id: string, userId = "usuario-actual"): boolean {
  const testimonios = getTestimonios()
  const testimonio = testimonios.find((t) => t.id === id)

  if (!testimonio) return false

  const yaLeDioLike = testimonio.likedBy.includes(userId)

  if (yaLeDioLike) {
    testimonio.likedBy = testimonio.likedBy.filter((uid) => uid !== userId)
    testimonio.likes = Math.max(0, testimonio.likes - 1)
  } else {
    testimonio.likedBy.push(userId)
    testimonio.likes += 1
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonios))
  return !yaLeDioLike
}

export function formatearFecha(fechaISO: string): string {
  const fecha = new Date(fechaISO)
  const ahora = new Date()
  const diferencia = ahora.getTime() - fecha.getTime()

  const minutos = Math.floor(diferencia / 60000)
  const horas = Math.floor(diferencia / 3600000)
  const dias = Math.floor(diferencia / 86400000)

  if (minutos < 1) return "Ahora mismo"
  if (minutos < 60) return `Hace ${minutos} minuto${minutos > 1 ? "s" : ""}`
  if (horas < 24) return `Hace ${horas} hora${horas > 1 ? "s" : ""}`
  if (dias < 7) return `Hace ${dias} día${dias > 1 ? "s" : ""}`
  if (dias < 30) return `Hace ${Math.floor(dias / 7)} semana${dias >= 14 ? "s" : ""}`

  return fecha.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
}
