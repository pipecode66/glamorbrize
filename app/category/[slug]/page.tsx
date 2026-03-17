import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCategories, getProducts } from "@/lib/db-utils"
import Footer from "@/components/footer"
import ProductList from "@/components/product-list"
import { Separator } from "@/components/ui/separator"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categories = await getCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    return {
      title: "Categoría no encontrada",
      description: "La categoría que buscas no existe",
    }
  }

  return {
    title: `${category.name} | Batas Glamor`,
    description: category.description || `Explora nuestra colección de ${category.name}`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categories = await getCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const products = await getProducts({ categorySlug: params.slug })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Bar */}
      <div className="bg-secondary text-white py-2 text-center text-sm">
        Envíos GRATIS en pedidos superiores a $200.000 *Aplica solo en Colombia
      </div>

      <div className="container py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl font-semibold mb-4">{category.name}</h1>
          {category.description && <p className="text-muted-foreground max-w-2xl">{category.description}</p>}
        </div>

        <Separator className="mb-8" />

        <ProductList initialProducts={products} categorySlug={params.slug} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
