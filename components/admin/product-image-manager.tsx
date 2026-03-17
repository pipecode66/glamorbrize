"use client"

import { useState } from "react"
import { ImageUploader } from "@/components/admin/image-uploader"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "@/components/ui/use-toast"
import { getSupabaseClient } from "@/lib/supabase-client"

interface ProductImageManagerProps {
  products: Array<{
    id: number
    name: string
    category_id: number
    categories?: { name: string } | Array<{ name: string }>
  }>
  categoryName?: string
}

export function ProductImageManager({ products, categoryName }: ProductImageManagerProps) {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [productImages, setProductImages] = useState<Record<number, any[]>>({})
  const [isLoading, setIsLoading] = useState<Record<number, boolean>>({})

  const loadProductImages = async (productId: number) => {
    if (productImages[productId]) return

    setIsLoading((prev) => ({ ...prev, [productId]: true }))

    try {
      const supabase = getSupabaseClient()
      const { data, error } = await supabase.from("product_images").select("*").eq("product_id", productId).order("position")

      if (error) {
        throw error
      }

      setProductImages((prev) => ({ ...prev, [productId]: data || [] }))
    } catch (error) {
      console.error("Error loading product images:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar las imagenes del producto.",
        variant: "destructive",
      })
    } finally {
      setIsLoading((prev) => ({ ...prev, [productId]: false }))
    }
  }

  const handleImagesChange = async (productId: number, images: any[]) => {
    try {
      const supabase = getSupabaseClient()

      await supabase.from("product_images").delete().eq("product_id", productId)

      if (images.length > 0) {
        const imagesToInsert = images.map((img) => ({
          product_id: productId,
          url: img.url,
          alt_text: img.alt_text,
          position: img.position,
        }))

        const { error } = await supabase.from("product_images").insert(imagesToInsert)

        if (error) {
          throw error
        }
      }

      setProductImages((prev) => ({ ...prev, [productId]: images }))

      toast({
        title: "Exito",
        description: "Imagenes actualizadas correctamente.",
      })
    } catch (error) {
      console.error("Error updating product images:", error)
      toast({
        title: "Error",
        description: "No se pudieron actualizar las imagenes del producto.",
        variant: "destructive",
      })
    }
  }

  const getCategoryFromProduct = (product: ProductImageManagerProps["products"][number]) => {
    if (Array.isArray(product.categories)) {
      return product.categories[0]?.name || "Sin categoria"
    }

    return product.categories?.name || "Sin categoria"
  }

  const getProductCategory = (product: ProductImageManagerProps["products"][number]) => {
    const currentCategoryName = getCategoryFromProduct(product)
    if (currentCategoryName.toLowerCase().includes("bata")) return "batas"
    if (currentCategoryName.toLowerCase().includes("uniforme")) return "uniformes"
    return "general"
  }

  return (
    <div className="space-y-4">
      {products.length === 0 ? (
        <p className="py-8 text-center text-muted-foreground">No hay productos disponibles en esta categoria.</p>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {products.map((product) => (
            <AccordionItem key={product.id} value={product.id.toString()}>
              <AccordionTrigger
                onClick={() => {
                  setSelectedProduct(product.id)
                  loadProductImages(product.id)
                }}
              >
                <div className="flex w-full items-center justify-between pr-4">
                  <span>{product.name}</span>
                  <span className="text-sm text-muted-foreground">{categoryName ? "" : getCategoryFromProduct(product)}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {isLoading[product.id] || selectedProduct === null ? (
                  <div className="py-8 text-center">Cargando imagenes...</div>
                ) : (
                  <ImageUploader
                    initialImages={productImages[product.id] || []}
                    onImagesChange={(images) => handleImagesChange(product.id, images)}
                    category={getProductCategory(product) as any}
                  />
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  )
}
