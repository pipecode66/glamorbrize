import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import { ProductImageManager } from "@/components/admin/product-image-manager"

export default async function AdminImagesPage() {
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
  const { data: categories } = await supabase.from("categories").select("*").order("name")

  // Obtener productos
  const { data: products } = await supabase
    .from("products")
    .select(`
      id,
      name,
      category_id,
      categories(name)
    `)
    .order("name")

  // Agrupar productos por categoría
  const productsByCategory = products?.reduce((acc: Record<number, any[]>, product) => {
    if (!acc[product.category_id]) {
      acc[product.category_id] = []
    }
    acc[product.category_id].push(product)
    return acc
  }, {})

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Gestión de Imágenes</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Imágenes de Productos</CardTitle>
          <CardDescription>
            Gestiona las imágenes de los productos por categoría. Puedes subir nuevas imágenes, reordenarlas y
            eliminarlas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Todos</TabsTrigger>
              {categories?.map((category) => (
                <TabsTrigger key={category.id} value={category.id.toString()}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <ProductImageManager products={products || []} />
            </TabsContent>

            {categories?.map((category) => (
              <TabsContent key={category.id} value={category.id.toString()}>
                <ProductImageManager products={productsByCategory?.[category.id] || []} categoryName={category.name} />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
