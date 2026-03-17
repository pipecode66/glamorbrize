"use client"

import { useEffect, useState } from "react"
import type { Product } from "@/lib/db-utils"
import ProductCard from "@/components/product-card"
import { Skeleton } from "@/components/ui/skeleton"

interface ProductListProps {
  initialProducts?: Product[]
  categorySlug?: string
  featured?: boolean
  limit?: number
}

export default function ProductList({ initialProducts, categorySlug, featured, limit = 12 }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts || [])
  const [isLoading, setIsLoading] = useState(!initialProducts)

  useEffect(() => {
    if (initialProducts) {
      return
    }

    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `/api/products?${new URLSearchParams({
            ...(categorySlug ? { category: categorySlug } : {}),
            ...(featured !== undefined ? { featured: featured.toString() } : {}),
            limit: limit.toString(),
          })}`,
        )
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [initialProducts, categorySlug, featured, limit])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: limit }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return <p className="text-center py-12 text-muted-foreground">No se encontraron productos.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.images?.[0]?.url ?? "/placeholder.svg?height=600&width=500"}
          description={product.description ?? undefined}
          category={product.category?.slug || ""}
          slug={product.slug}
        />
      ))}
    </div>
  )
}
