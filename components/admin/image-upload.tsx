"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Trash2, Upload, GripVertical } from "lucide-react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

interface ImageUploadProps {
  images: any[]
  setImages: (images: any[]) => void
  productId?: number
}

export function ImageUpload({ images, setImages, productId }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)

    try {
      // En un entorno real, aquí subirías los archivos a un servicio de almacenamiento
      // y obtendrías las URLs. Para este ejemplo, usaremos URLs locales.
      const newImages = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        url: URL.createObjectURL(file),
        alt_text: "",
        position: images.length + index,
        file, // Guardar el archivo para subirlo más tarde
      }))

      setImages([...images, ...newImages])
      toast({
        title: "Imágenes añadidas",
        description: `${files.length} imágenes añadidas correctamente.`,
      })
    } catch (error) {
      console.error("Error uploading images:", error)
      toast({
        title: "Error",
        description: "No se pudieron subir las imágenes.",
        variant: "destructive",
      })
    } finally {
      setUploading(false)
      e.target.value = ""
    }
  }

  const handleRemoveImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const handleAltTextChange = (index: number, value: string) => {
    const newImages = [...images]
    newImages[index].alt_text = value
    setImages(newImages)
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(images)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    // Actualizar posiciones
    const updatedItems = items.map((item, index) => ({
      ...item,
      position: index,
    }))

    setImages(updatedItems)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Imágenes del Producto</h3>
        <div>
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
            disabled={uploading}
          />
          <Label htmlFor="image-upload" className="cursor-pointer">
            <Button type="button" variant="outline" disabled={uploading}>
              <Upload className="mr-2 h-4 w-4" />
              {uploading ? "Subiendo..." : "Subir Imágenes"}
            </Button>
          </Label>
        </div>
      </div>

      {images.length === 0 ? (
        <div className="border border-dashed rounded-md p-8 text-center">
          <p className="text-muted-foreground">No hay imágenes. Sube algunas imágenes para mostrar.</p>
        </div>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="images">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {images.map((image, index) => (
                  <Draggable key={image.id} draggableId={image.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="flex items-center space-x-4 border rounded-md p-4"
                      >
                        <div {...provided.dragHandleProps} className="cursor-move">
                          <GripVertical className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="h-16 w-16 relative rounded-md overflow-hidden">
                          <Image
                            src={image.url || "/placeholder.svg"}
                            alt={image.alt_text || "Product image"}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <Input
                            placeholder="Texto alternativo"
                            value={image.alt_text || ""}
                            onChange={(e) => handleAltTextChange(index, e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => handleRemoveImage(index)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  )
}
