"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { actualizarTestimonio, type Testimonio } from "@/lib/testimonios-storage"

interface EditarTestimonioDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  testimonio: Testimonio
  onSubmit: () => void
}

export function EditarTestimonioDialog({ open, onOpenChange, testimonio, onSubmit }: EditarTestimonioDialogProps) {
  const [titulo, setTitulo] = useState(testimonio.titulo)
  const [contenido, setContenido] = useState(testimonio.contenido)

  useEffect(() => {
    setTitulo(testimonio.titulo)
    setContenido(testimonio.contenido)
  }, [testimonio])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (titulo.trim() && contenido.trim()) {
      actualizarTestimonio(testimonio.id, titulo, contenido)
      onOpenChange(false)
      onSubmit()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Editar Testimonio</DialogTitle>
          <DialogDescription>Actualiza tu historia para reflejar tu experiencia más reciente.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="titulo-editar">Título de tu historia</Label>
              <Input
                id="titulo-editar"
                placeholder="Ej: Mi camino hacia una vida más saludable"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contenido-editar">Tu testimonio</Label>
              <Textarea
                id="contenido-editar"
                placeholder="Comparte tu experiencia, consejos o palabras de aliento..."
                className="min-h-[200px]"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">Guardar Cambios</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
