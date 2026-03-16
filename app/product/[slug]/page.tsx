import type { Metadata } from "next"
import { getProductBySlug } from "@/lib/db-utils"
import ProductPageClient from "./ProductPageClient"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "El producto que buscas no existe",
    }
  }

  return {
    title: `${product.name} | Batas Glamor`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductPageClient params={params} />
}
