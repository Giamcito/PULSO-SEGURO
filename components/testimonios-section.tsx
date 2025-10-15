"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Plus, Pencil, Trash2 } from "lucide-react"
import { AgregarTestimonioDialog } from "@/components/agregar-testimonio-dialog"
import { EditarTestimonioDialog } from "@/components/editar-testimonio-dialog"
import {
  getTestimonios,
  eliminarTestimonio,
  toggleLike,
  formatearFecha,
  type Testimonio,
} from "@/lib/testimonios-storage"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function TestimoniosSection() {
  const [testimonios, setTestimonios] = useState<Testimonio[]>([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [testimonioAEditar, setTestimonioAEditar] = useState<Testimonio | null>(null)
  const [testimonioAEliminar, setTestimonioAEliminar] = useState<string | null>(null)

  useEffect(() => {
    setTestimonios(getTestimonios())
  }, [])

  const handleAgregarTestimonio = () => {
    setTestimonios(getTestimonios())
  }

  const handleEditarTestimonio = () => {
    setTestimonios(getTestimonios())
  }

  const handleEliminar = (id: string) => {
    eliminarTestimonio(id)
    setTestimonios(getTestimonios())
    setTestimonioAEliminar(null)
  }

  const handleLike = (id: string) => {
    toggleLike(id)
    setTestimonios(getTestimonios())
  }

  const abrirEditar = (testimonio: Testimonio) => {
    setTestimonioAEditar(testimonio)
    setEditDialogOpen(true)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Testimonios de la Comunidad</h2>
            <p className="text-muted-foreground">Historias reales de personas que cuidan su corazón</p>
          </div>
          <Button onClick={() => setDialogOpen(true)} size="lg">
            <Plus className="h-5 w-5 mr-2" />
            Compartir mi Historia
          </Button>
        </div>

        <div className="grid gap-6">
          {testimonios.map((testimonio) => (
            <Card key={testimonio.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <img src={testimonio.avatar || "/placeholder.svg"} alt={testimonio.autor} />
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold">{testimonio.autor}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{formatearFecha(testimonio.fecha)}</span>
                      <Button variant="ghost" size="sm" onClick={() => abrirEditar(testimonio)} className="h-8 w-8 p-0">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setTestimonioAEliminar(testimonio.id)}
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{testimonio.titulo}</h4>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{testimonio.contenido}</p>

              <div className="flex items-center gap-6 pt-4 border-t">
                <Button variant="ghost" size="sm" className="gap-2" onClick={() => handleLike(testimonio.id)}>
                  <Heart
                    className={`h-4 w-4 ${testimonio.likedBy.includes("usuario-actual") ? "fill-red-500 text-red-500" : ""}`}
                  />
                  <span>{testimonio.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{testimonio.comentarios}</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Compartir
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <AgregarTestimonioDialog open={dialogOpen} onOpenChange={setDialogOpen} onSubmit={handleAgregarTestimonio} />

      {testimonioAEditar && (
        <EditarTestimonioDialog
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
          testimonio={testimonioAEditar}
          onSubmit={handleEditarTestimonio}
        />
      )}

      <AlertDialog open={!!testimonioAEliminar} onOpenChange={() => setTestimonioAEliminar(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El testimonio será eliminado permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => testimonioAEliminar && handleEliminar(testimonioAEliminar)}>
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}
