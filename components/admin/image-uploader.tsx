"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Trash2, Upload, ImageIcon, Plus } from "lucide-react"
import Image from "next/image"

interface ImageUploaderProps {
  initialImages?: Array<{
    id?: number
    url: string
    alt_text?: string | null
    position?: number
  }>
  onImagesChange: (
    images: Array<{
      id?: number
      url: string
      alt_text?: string | null
      position: number
    }>,
  ) => void
  maxImages?: number
  allowReorder?: boolean
  category?: "batas" | "uniformes" | "general"
}

export function ImageUploader({
  initialImages = [],
  onImagesChange,
  maxImages = 10,
  allowReorder = true,
  category = "general",
}: ImageUploaderProps) {
  const [images, setImages] = useState<
    Array<{
      id?: number
      url: string
      alt_text?: string | null
      position: number
    }>
  >(initialImages.map((img, index) => ({ ...img, position: img.position || index })))

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return

    if (images.length + e.target.files.length > maxImages) {
      toast({
        title: "Límite de imágenes",
        description: `Solo puedes subir un máximo de ${maxImages} imágenes.`,
        variant: "destructive",
      })
      return
    }

    const files = Array.from(e.target.files)
    const newImages: Array<{
      url: string
      alt_text: string | null
      position: number
    }> = []

    for (const file of files) {
      // Validar tipo de archivo
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Tipo de archivo no válido",
          description: "Solo se permiten archivos de imagen.",
          variant: "destructive",
        })
        continue
      }

      // Validar tamaño de archivo (5MB máximo)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Archivo demasiado grande",
          description: "El tamaño máximo permitido es 5MB.",
          variant: "destructive",
        })
        continue
      }

      try {
        // Crear un FormData para enviar el archivo
        const formData = new FormData()
        formData.append("file", file)
        formData.append("category", category)

        // Enviar el archivo al servidor
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          throw new Error("Error al subir la imagen")
        }

        const data = await response.json()

        // Añadir la nueva imagen a la lista
        newImages.push({
          url: data.url,
          alt_text: file.name.split(".")[0] || null,
          position: images.length + newImages.length,
        })
      } catch (error) {
        console.error("Error uploading image:", error)
        toast({
          title: "Error",
          description: "No se pudo subir la imagen.",
          variant: "destructive",
        })
      }
    }

    // Actualizar el estado con las nuevas imágenes
    const updatedImages = [...images, ...newImages]
    setImages(updatedImages)
    onImagesChange(updatedImages)

    // Limpiar el input de archivos
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleRemoveImage = (index: number) => {
    const updatedImages = images
      .filter((_, i) => i !== index)
      .map((img, i) => ({
        ...img,
        position: i,
      }))
    setImages(updatedImages)
    onImagesChange(updatedImages)
  }

  const handleMoveImage = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= images.length) return

    const updatedImages = [...images]
    const [movedItem] = updatedImages.splice(fromIndex, 1)
    updatedImages.splice(toIndex, 0, movedItem)

    // Actualizar las posiciones
    const reorderedImages = updatedImages.map((img, i) => ({
      ...img,
      position: i,
    }))

    setImages(reorderedImages)
    onImagesChange(reorderedImages)
  }

  const handleUpdateAltText = (index: number, altText: string) => {
    const updatedImages = images.map((img, i) => (i === index ? { ...img, alt_text: altText } : img))
    setImages(updatedImages)
    onImagesChange(updatedImages)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          Imágenes ({images.length}/{maxImages})
        </h3>
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={images.length >= maxImages}
        >
          <Upload className="mr-2 h-4 w-4" />
          Subir imágenes
        </Button>
        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>

      {images.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 rounded-md p-12 text-center">
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-500">No hay imágenes. Haz clic en "Subir imágenes" para añadir.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative border rounded-md p-2 group">
              <div className="aspect-square relative overflow-hidden rounded-md">
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.alt_text || `Imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-2">
                <Label htmlFor={`alt-text-${index}`} className="text-xs">
                  Texto alternativo:
                </Label>
                <Input
                  id={`alt-text-${index}`}
                  value={image.alt_text || ""}
                  onChange={(e) => handleUpdateAltText(index, e.target.value)}
                  className="mt-1 text-xs h-8"
                  placeholder="Descripción de la imagen"
                />
              </div>

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleRemoveImage(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {allowReorder && (
                <div className="absolute bottom-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleMoveImage(index, index - 1)}
                    disabled={index === 0}
                  >
                    ↑
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleMoveImage(index, index + 1)}
                    disabled={index === images.length - 1}
                  >
                    ↓
                  </Button>
                </div>
              )}

              {index === 0 && (
                <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-md">
                  Principal
                </div>
              )}
            </div>
          ))}

          {images.length < maxImages && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center p-4 hover:border-gray-400 transition-colors"
            >
              <Plus className="h-8 w-8 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Añadir imagen</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
