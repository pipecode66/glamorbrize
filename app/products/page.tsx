import { Suspense } from "react"
import { getCategories, getProducts } from "@/lib/db-utils"
import ProductSearch from "@/components/product-search"
import ProductList from "@/components/product-list"
import { Skeleton } from "@/components/ui/skeleton"

interface ProductsPageProps {
  searchParams: {
    search?: string
    categories?: string
    minPrice?: string
    maxPrice?: string
    inStock?: string
    featured?: string
  }
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const categories = await getCategories()

  // Obtener precios mínimo y máximo para el slider
  const allProducts = await getProducts({ limit: 1000 })
  const prices = allProducts.map((product) => product.price)
  const minPrice = Math.min(...prices, 0)
  const maxPrice = Math.max(...prices, 100000)

  // Filtrar productos según los parámetros de búsqueda
  const search = searchParams.search || null
  const categoryIds = searchParams.categories ? searchParams.categories.split(",").map(Number) : null
  const minPriceFilter = searchParams.minPrice ? Number.parseInt(searchParams.minPrice) : null
  const maxPriceFilter = searchParams.maxPrice ? Number.parseInt(searchParams.maxPrice) : null
  const inStock = searchParams.inStock === "true"
  const featured = searchParams.featured === "true"

  // Filtrar productos en el cliente para evitar múltiples llamadas a la API
  const filteredProducts = allProducts.filter((product) => {
    // Filtrar por búsqueda
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }

    // Filtrar por categoría
    if (categoryIds && !categoryIds.includes(product.category_id)) {
      return false
    }

    // Filtrar por precio
    if (minPriceFilter && product.price < minPriceFilter) {
      return false
    }
    if (maxPriceFilter && product.price > maxPriceFilter) {
      return false
    }

    // Filtrar por stock
    if (inStock && product.inventory_quantity <= 0) {
      return false
    }

    // Filtrar por destacados
    if (featured && !product.featured) {
      return false
    }

    return true
  })

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>

      <ProductSearch categories={categories} minPrice={minPrice} maxPrice={maxPrice} />

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList products={filteredProducts} />
      </Suspense>
    </div>
  )
}

function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </div>
  )
}
