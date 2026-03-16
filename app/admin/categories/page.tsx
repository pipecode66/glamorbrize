import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { Plus, Pencil } from "lucide-react"
import { DeleteCategoryButton } from "@/components/admin/delete-category-button"

export default async function AdminCategoriesPage() {
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

  // Obtener categorías
  const { data: categories } = await supabase
    .from("categories")
    .select(`
      *,
      parent:parent_id(name),
      products:products(id)
    `)
    .order("name")

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Categorías</h1>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/admin/categories/new">
            <Plus className="mr-2 h-4 w-4" /> Nueva Categoría
          </Link>
        </Button>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="grid grid-cols-6 gap-4 p-4 font-medium border-b">
          <div className="col-span-2">Categoría</div>
          <div>Categoría Padre</div>
          <div>Productos</div>
          <div>Slug</div>
          <div className="text-right">Acciones</div>
        </div>
        <div className="divide-y">
          {categories?.length ? (
            categories.map((category) => (
              <div key={category.id} className="grid grid-cols-6 gap-4 p-4 items-center">
                <div className="col-span-2 flex items-center space-x-4">
                  {category.image_url ? (
                    <div className="h-10 w-10 relative rounded-md overflow-hidden">
                      <Image
                        src={category.image_url || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                      <span className="text-xs">Sin imagen</span>
                    </div>
                  )}
                  <div className="font-medium">{category.name}</div>
                </div>
                <div>{category.parent?.name || "—"}</div>
                <div>{category.products?.length || 0}</div>
                <div className="text-sm text-muted-foreground">{category.slug}</div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/admin/categories/${category.id}`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <DeleteCategoryButton id={category.id} hasProducts={category.products?.length > 0} />
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">No hay categorías disponibles</div>
          )}
        </div>
      </div>
    </div>
  )
}
