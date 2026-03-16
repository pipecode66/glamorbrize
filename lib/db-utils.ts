import { getServerSupabase } from "@/lib/server-supabase"
import type { Database } from "@/types/supabase"

// Tipos exportados
export type Product = Database["public"]["Tables"]["products"]["Row"] & {
  category?: Category
  images?: ProductImage[]
}

export type Category = Database["public"]["Tables"]["categories"]["Row"]

export type ProductImage = Database["public"]["Tables"]["product_images"]["Row"]

export type Review = Database["public"]["Tables"]["reviews"]["Row"] & {
  user?: {
    first_name: string | null
    last_name: string | null
  }
}

// Obtener un producto por su slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const supabase = await getServerSupabase()

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      category:categories(*),
      images:product_images(*)
    `)
    .eq("slug", slug)
    .maybeSingle()

  if (error) {
    console.error("Error fetching product:", error)
    return null
  }

  return data
}

// Obtener productos con filtros opcionales
export async function getProducts(
  options: {
    categorySlug?: string
    featured?: boolean
    search?: string
    minPrice?: number
    maxPrice?: number
    inStock?: boolean
    limit?: number
    offset?: number
  } = {},
): Promise<Product[]> {
  const supabase = await getServerSupabase()

  let query = supabase.from("products").select(`
      *,
      category:categories(*),
      images:product_images(*)
    `)

  if (options.categorySlug) {
    query = query.eq("category.slug", options.categorySlug)
  }

  if (options.featured !== undefined) {
    query = query.eq("featured", options.featured)
  }

  if (options.search) {
    query = query.or(`name.ilike.%${options.search}%,description.ilike.%${options.search}%`)
  }

  if (options.minPrice !== undefined) {
    query = query.gte("price", options.minPrice)
  }

  if (options.maxPrice !== undefined) {
    query = query.lte("price", options.maxPrice)
  }

  if (options.inStock !== undefined) {
    query = query.eq("in_stock", options.inStock)
  }

  if (options.limit) {
    query = query.limit(options.limit)
  }

  if (options.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1)
  }

  const { data, error } = await query.order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data || []
}

// Obtener todas las categorías
export async function getCategories(): Promise<Category[]> {
  const supabase = await getServerSupabase()

  const { data, error } = await supabase.from("categories").select("*").order("name")

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }

  return data || []
}

// Obtener favoritos de un usuario
export async function getUserFavorites(userId: string): Promise<Product[]> {
  const supabase = await getServerSupabase()

  const { data, error } = await supabase
    .from("favorites")
    .select(`
      product:products(
        *,
        category:categories(*),
        images:product_images(*)
      )
    `)
    .eq("user_id", userId)

  if (error) {
    console.error("Error fetching favorites:", error)
    return []
  }

  return data?.map((item) => item.product).filter(Boolean) as Product[]
}

// Obtener reseñas de un producto
export async function getProductReviews(productId: number): Promise<Review[]> {
  const supabase = await getServerSupabase()

  const { data, error } = await supabase
    .from("reviews")
    .select(`
      *,
      user:profiles(first_name, last_name)
    `)
    .eq("product_id", productId)
    .eq("approved", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching reviews:", error)
    return []
  }

  return data || []
}
