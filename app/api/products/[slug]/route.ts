import { NextRequest, NextResponse } from "next/server"
import { getProductBySlug } from "@/lib/db-utils"

type ProductRouteContext = {
  params: Promise<{
    slug: string
  }>
}

export async function GET(_request: NextRequest, context: ProductRouteContext) {
  const { slug } = await context.params
  const product = await getProductBySlug(slug)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
