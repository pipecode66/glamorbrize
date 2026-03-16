import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { Plus, Pencil } from "lucide-react"
import { DeleteProductButton } from "@/components/admin/delete-product-button"

export default async function AdminProductsPage() {
  const cookieStore = await cookies()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })

  // Obtener productos con sus categorías e imágenes
  const { data: products } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*),
      images:product_images(*)
    `)
    .order("created_at", { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Productos</h1>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" /> Nuevo Producto
          </Link>
        </Button>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
          <div className="col-span-3">Producto</div>
          <div>Categoría</div>
          <div>Precio</div>
          <div>Estado</div>
          <div className="text-right">Acciones</div>
        </div>
        <div className="divide-y">
          {products?.length ? (
            products.map((product) => (
              <div key={product.id} className="grid grid-cols-7 gap-4 p-4 items-center">
                <div className="col-span-3 flex items-center space-x-4">
                  <div className="h-12 w-12 relative rounded-md overflow-hidden">
                    <Image
                      src={product.images[0]?.url || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-muted-foreground">SKU: {product.sku || "N/A"}</div>
                  </div>
                </div>
                <div>{product.category?.name || "Sin categoría"}</div>
                <div>${Number(product.price).toLocaleString("es-CO")}</div>
                <div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      product.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.active ? "Activo" : "Inactivo"}
                  </span>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/admin/products/${product.id}`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <DeleteProductButton id={product.id} />
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">No hay productos disponibles</div>
          )}
        </div>
      </div>
    </div>
  )
}
