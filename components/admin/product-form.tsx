"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ImageUpload } from "@/components/admin/image-upload"
import { ProductVariantsForm } from "@/components/admin/product-variants-form"

interface ProductFormProps {
  product?: any
  categories: any[]
}

export function ProductForm({ product, categories }: ProductFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: product?.name || "",
    slug: product?.slug || "",
    description: product?.description || "",
    price: product?.price || "",
    compare_at_price: product?.compare_at_price || "",
    cost_price: product?.cost_price || "",
    sku: product?.sku || "",
    barcode: product?.barcode || "",
    inventory_quantity: product?.inventory_quantity || 0,
    category_id: product?.category_id || "",
    featured: product?.featured || false,
    active: product?.active !== undefined ? product?.active : true,
  })
  const [images, setImages] = useState<any[]>(product?.images || [])
  const [variants, setVariants] = useState<any[]>(product?.variants || [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
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
      if (!formData.name || !formData.slug || !formData.price || !formData.category_id) {
        toast({
          title: "Error",
          description: "Por favor completa todos los campos requeridos.",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      // Crear o actualizar producto
      const endpoint = product ? `/api/admin/products/${product.id}` : "/api/admin/products"
      const method = product ? "PUT" : "POST"

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          images,
          variants,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al guardar el producto")
      }

      toast({
        title: "Éxito",
        description: product ? "Producto actualizado correctamente." : "Producto creado correctamente.",
      })

      router.push("/admin/products")
      router.refresh()
    } catch (error) {
      console.error("Error saving product:", error)
      toast({
        title: "Error",
        description: "No se pudo guardar el producto.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="images">Imágenes</TabsTrigger>
          <TabsTrigger value="variants">Variantes</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
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
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">
                    Precio <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="compare_at_price">Precio Comparativo</Label>
                  <Input
                    id="compare_at_price"
                    name="compare_at_price"
                    type="number"
                    value={formData.compare_at_price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cost_price">Precio de Costo</Label>
                  <Input
                    id="cost_price"
                    name="cost_price"
                    type="number"
                    value={formData.cost_price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inventory_quantity">Cantidad en Inventario</Label>
                  <Input
                    id="inventory_quantity"
                    name="inventory_quantity"
                    type="number"
                    value={formData.inventory_quantity}
                    onChange={handleChange}
                    min="0"
                    step="1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input id="sku" name="sku" value={formData.sku} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="barcode">Código de Barras</Label>
                  <Input id="barcode" name="barcode" value={formData.barcode} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category_id">
                    Categoría <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.category_id.toString()}
                    onValueChange={(value) => handleSelectChange("category_id", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id.toString()}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => handleSwitchChange("featured", checked)}
                    />
                    <Label htmlFor="featured">Destacado</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="active"
                      checked={formData.active}
                      onCheckedChange={(checked) => handleSwitchChange("active", checked)}
                    />
                    <Label htmlFor="active">Activo</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images">
          <Card>
            <CardContent className="pt-6">
              <ImageUpload images={images} setImages={setImages} productId={product?.id} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="variants">
          <Card>
            <CardContent className="pt-6">
              <ProductVariantsForm variants={variants} setVariants={setVariants} productId={product?.id} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/products")} disabled={isSubmitting}>
          Cancelar
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : product ? "Actualizar Producto" : "Crear Producto"}
        </Button>
      </div>
    </form>
  )
}
