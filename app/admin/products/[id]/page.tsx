import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { ProductForm } from "@/components/admin/product-form"

export default async function EditProductPage({ params }: { params: { id: string } }) {
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

  // Obtener categorías para el formulario
  const { data: categories } = await supabase.from("categories").select("*").order("name")

  // Si es un nuevo producto
  if (params.id === "new") {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Nuevo Producto</h1>
        <ProductForm categories={categories || []} />
      </div>
    )
  }

  // Si es editar un producto existente
  const { data: product } = await supabase
    .from("products")
    .select(
      `
      *,
      category:categories(*),
      images:product_images(*),
      variants:product_variants(*)
    `,
    )
    .eq("id", params.id)
    .single()

  if (!product) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Editar Producto</h1>
      <ProductForm product={product} categories={categories || []} />
    </div>
  )
}
