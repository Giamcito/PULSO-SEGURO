"use client"

import type React from "react"

import { useState } from "react"
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
import { agregarTestimonio } from "@/lib/testimonios-storage"

interface AgregarTestimonioDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: () => void
}

export function AgregarTestimonioDialog({ open, onOpenChange, onSubmit }: AgregarTestimonioDialogProps) {
  const [titulo, setTitulo] = useState("")
  const [contenido, setContenido] = useState("")
  const [autor, setAutor] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (titulo.trim() && contenido.trim()) {
      agregarTestimonio(titulo, contenido, autor.trim() || "Usuario Anónimo")
      setTitulo("")
      setContenido("")
      setAutor("")
      onOpenChange(false)
      onSubmit()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Comparte tu Historia</DialogTitle>
          <DialogDescription>
            Tu experiencia puede inspirar y ayudar a otros miembros de la comunidad. Comparte tu testimonio de forma
            anónima o con tu nombre.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="autor">Tu nombre (opcional)</Label>
              <Input
                id="autor"
                placeholder="Deja en blanco para publicar como anónimo"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="titulo">Título de tu historia</Label>
              <Input
                id="titulo"
                placeholder="Ej: Mi camino hacia una vida más saludable"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contenido">Tu testimonio</Label>
              <Textarea
                id="contenido"
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
            <Button type="submit">Publicar Testimonio</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
