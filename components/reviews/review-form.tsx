"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Rating } from "@/components/ui/rating"
import { useToast } from "@/components/ui/use-toast"
import { createReview } from "@/lib/api-client"

interface ReviewFormProps {
  productId: number
  onSuccess: () => void
  onCancel: () => void
}

export function ReviewForm({ productId, onSuccess, onCancel }: ReviewFormProps) {
  const [rating, setRating] = useState(5)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { user } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast({
        title: "Error",
        description: "Debes iniciar sesión para dejar una reseña",
        variant: "destructive",
      })
      return
    }

    if (rating === 0) {
      toast({
        title: "Error",
        description: "Por favor, selecciona una calificación",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await createReview(productId, rating, title.trim() || null, content.trim() || null)

      if (result.success) {
        toast({
          title: "Reseña enviada",
          description: "Tu reseña ha sido enviada y está pendiente de aprobación",
        })
        onSuccess()
      } else {
        throw new Error(result.error || "Error al enviar la reseña")
      }
    } catch (error) {
      console.error("Error submitting review:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Error al enviar la reseña",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border rounded-lg p-4">
      <h3 className="text-lg font-medium">Escribe una reseña</h3>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Calificación</label>
        <Rating value={rating} onChange={setRating} className="text-2xl" />
      </div>
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium">
          Título (opcional)
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Resume tu experiencia"
          maxLength={100}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="content" className="block text-sm font-medium">
          Comentario (opcional)
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="¿Qué te gustó o no te gustó? ¿Para qué usaste este producto?"
          rows={4}
          maxLength={1000}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar reseña"}
        </Button>
      </div>
    </form>
  )
}
