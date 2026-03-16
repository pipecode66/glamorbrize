import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import { CategoryForm } from "@/components/admin/category-form"

export default async function EditCategoryPage({ params }: { params: { id: string } }) {
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

  // Si es una nueva categoría
  if (params.id === "new") {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Nueva Categoría</h1>
        <CategoryForm categories={categories || []} />
      </div>
    )
  }

  // Si es editar una categoría existente
  const { data: category } = await supabase.from("categories").select("*").eq("id", params.id).single()

  if (!category) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Editar Categoría</h1>
      <CategoryForm category={category} categories={categories?.filter((c) => c.id !== category.id) || []} />
    </div>
  )
}
