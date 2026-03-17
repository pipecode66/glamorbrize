import { NextRequest, NextResponse } from "next/server"
import { getProducts } from "@/lib/db-utils"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const categorySlug = searchParams.get("categorySlug") ?? searchParams.get("category") ?? undefined
  const featuredParam = searchParams.get("featured")
  const search = searchParams.get("search") ?? undefined
  const minPriceParam = searchParams.get("minPrice")
  const maxPriceParam = searchParams.get("maxPrice")
  const inStockParam = searchParams.get("inStock")
  const limitParam = searchParams.get("limit")
  const offsetParam = searchParams.get("offset")

  const products = await getProducts({
    categorySlug,
    featured: featuredParam === null ? undefined : featuredParam === "true",
    inStock: inStockParam === null ? undefined : inStockParam === "true",
    limit: limitParam ? Number(limitParam) : undefined,
    maxPrice: maxPriceParam ? Number(maxPriceParam) : undefined,
    minPrice: minPriceParam ? Number(minPriceParam) : undefined,
    offset: offsetParam ? Number(offsetParam) : undefined,
    search,
  })

  return NextResponse.json(products)
}
