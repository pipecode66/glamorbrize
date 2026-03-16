"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryFormProps {
  category?: any
  categories: any[]
}

export function CategoryForm({ category, categories }: CategoryFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: category?.name || "",
    slug: category?.slug || "",
    description: category?.description || "",
    parent_id: category?.parent_id || null,
    image_url: category?.image_url || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value === "null" ? null : value }))
  }

  const generateSlug = () => {
    const slug = formData.name
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
    setFormData((prev) => ({ ...prev, slug }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validar datos
      if (!formData.name || !formData.slug) {
        toast({
          title: "Error",
          description: "Por favor completa todos los campos requeridos.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      // Crear o actualizar categoría
      const endpoint = category ? `/api/admin/categories/${category.id}` : "/api/admin/categories"
      const method = category ? "PUT" : "POST"

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Error al guardar la categoría")
      }

      toast({
        title: "Éxito",
        description: category ? "Categoría actualizada correctamente." : "Categoría creada correctamente.",
      })

      router.push("/admin/categories")
      router.refresh()
    } catch (error) {
      console.error("Error saving category:", error)
      toast({
        title: "Error",
        description: "No se pudo guardar la categoría.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Nombre <span className="text-red-500">*</span>
              </Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">
                Slug <span className="text-red-500">*</span>
              </Label>
              <div className="flex space-x-2">
                <Input id="slug" name="slug" value={formData.slug} onChange={handleChange} required />
                <Button type="button" variant="outline" onClick={generateSlug}>
                  Generar
                </Button>
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="parent_id">Categoría Padre</Label>
              <Select
                value={formData.parent_id?.toString() || "null"}
                onValueChange={(value) => handleSelectChange("parent_id", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Ninguna (categoría principal)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="null">Ninguna (categoría principal)</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id.toString()}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image_url">URL de la Imagen</Label>
              <Input
                id="image_url"
                name="image_url"
                value={formData.image_url || ""}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/categories")}
          disabled={isSubmitting}
        >
          Cancelar
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : category ? "Actualizar Categoría" : "Crear Categoría"}
        </Button>
      </div>
    </form>
  )
}
