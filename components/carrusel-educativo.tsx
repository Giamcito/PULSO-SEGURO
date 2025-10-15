"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Cuida tu Corazón",
    description:
      "El corazón late aproximadamente 100,000 veces al día. Aprende cómo mantenerlo saludable con hábitos simples y efectivos.",
    image: "/corazon-saludable-ilustracion-medica.jpg",
    color: "from-rose-500 to-orange-500",
  },
  {
    title: "Prevención es Clave",
    description:
      "El 80% de las enfermedades cardiovasculares pueden prevenirse con un estilo de vida saludable. Descubre cómo empezar hoy.",
    image: "/prevencion-cardiovascular-ejercicio-alimentacion.jpg",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Conoce los Síntomas",
    description:
      "Reconocer los signos tempranos puede salvar vidas. Aprende a identificar los síntomas de problemas cardiovasculares.",
    image: "/sintomas-cardiovasculares-diagnostico-medico.jpg",
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Alimentación Saludable",
    description:
      "Una dieta balanceada rica en frutas, verduras y grasas saludables protege tu corazón. Conoce los mejores alimentos.",
    image: "/alimentacion-saludable-corazon-frutas-verduras.jpg",
    color: "from-amber-500 to-orange-500",
  },
]

export function CarruselEducativo() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative">
          {/* Slides */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`} />
                <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
                  <div className="flex-1 text-white z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{slide.title}</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-balance max-w-2xl">{slide.description}</p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full max-w-md h-auto rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-20"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-20"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
