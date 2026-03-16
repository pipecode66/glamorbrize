"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Trash2, Plus } from "lucide-react"

interface ProductVariantsFormProps {
  variants: any[]
  setVariants: (variants: any[]) => void
  productId?: number
}

export function ProductVariantsForm({ variants, setVariants, productId }: ProductVariantsFormProps) {
  const handleAddVariant = () => {
    setVariants([
      ...variants,
      {
        id: Date.now(),
        product_id: productId,
        name: "",
        color: "",
        size: "",
        price: "",
        inventory_quantity: 0,
        sku: "",
        active: true,
      },
    ])
  }

  const handleRemoveVariant = (index: number) => {
    const newVariants = [...variants]
    newVariants.splice(index, 1)
    setVariants(newVariants)
  }

  const handleVariantChange = (index: number, field: string, value: any) => {
    const newVariants = [...variants]
    newVariants[index][field] = value
    setVariants(newVariants)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Variantes del Producto</h3>
        <Button type="button" variant="outline" onClick={handleAddVariant}>
          <Plus className="mr-2 h-4 w-4" />
          Añadir Variante
        </Button>
      </div>

      {variants.length === 0 ? (
        <div className="border border-dashed rounded-md p-8 text-center">
          <p className="text-muted-foreground">
            No hay variantes. Añade variantes para diferentes colores, tallas, etc.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {variants.map((variant, index) => (
            <div key={variant.id} className="border rounded-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Variante {index + 1}</h4>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveVariant(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`variant-name-${index}`}>Nombre</Label>
                  <Input
                    id={`variant-name-${index}`}
                    value={variant.name}
                    onChange={(e) => handleVariantChange(index, "name", e.target.value)}
                    placeholder="Ej: Azul - Talla M"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`variant-color-${index}`}>Color</Label>
                  <Input
                    id={`variant-color-${index}`}
                    value={variant.color || ""}
                    onChange={(e) => handleVariantChange(index, "color", e.target.value)}
                    placeholder="Ej: Azul"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`variant-size-${index}`}>Talla</Label>
                  <Input
                    id={`variant-size-${index}`}
                    value={variant.size || ""}
                    onChange={(e) => handleVariantChange(index, "size", e.target.value)}
                    placeholder="Ej: M"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`variant-price-${index}`}>Precio</Label>
                  <Input
                    id={`variant-price-${index}`}
                    type="number"
                    value={variant.price || ""}
                    onChange={(e) => handleVariantChange(index, "price", e.target.value)}
                    min="0"
                    step="0.01"
                    placeholder="Dejar en blanco para usar el precio del producto"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`variant-inventory-${index}`}>Cantidad en Inventario</Label>
                  <Input
                    id={`variant-inventory-${index}`}
                    type="number"
                    value={variant.inventory_quantity}
                    onChange={(e) => handleVariantChange(index, "inventory_quantity", e.target.value)}
                    min="0"
                    step="1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`variant-sku-${index}`}>SKU</Label>
                  <Input
                    id={`variant-sku-${index}`}
                    value={variant.sku || ""}
                    onChange={(e) => handleVariantChange(index, "sku", e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2 md:col-span-2">
                  <Switch
                    id={`variant-active-${index}`}
                    checked={variant.active}
                    onCheckedChange={(checked) => handleVariantChange(index, "active", checked)}
                  />
                  <Label htmlFor={`variant-active-${index}`}>Activo</Label>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
