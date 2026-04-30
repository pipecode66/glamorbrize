import { createClient } from "@supabase/supabase-js"
import { getPublicSupabaseConfig, hasPublicSupabaseConfig } from "@/lib/supabase-config"
import { getServerSupabase } from "@/lib/server-supabase"
import type { Database } from "@/types/supabase"

let reviewClient: ReturnType<typeof createClient<Database>> | null = null

function getReviewClient() {
  if (reviewClient) {
    return reviewClient
  }

  const config = getPublicSupabaseConfig()
  if (!config) {
    return null
  }

  reviewClient = createClient<Database>(config.url, config.anonKey)
  return reviewClient
}

export interface Review {
  id: number
  product_id: number
  user_id: string
  rating: number
  title: string | null
  content: string | null
  approved: boolean
  created_at: string
  user?: {
    first_name: string | null
    last_name: string | null
  }
}

export async function getProductReviews(productId: number): Promise<Review[]> {
  const supabaseClient: any = getReviewClient()
  if (!supabaseClient) {
    return []
  }

  const { data, error } = await supabaseClient
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

export async function createReview(
  productId: number,
  rating: number,
  title: string | null,
  content: string | null,
): Promise<{ success: boolean; error?: string }> {
  const supabaseClient: any = getReviewClient()
  if (!supabaseClient) {
    return { success: false, error: "La configuración de Supabase no está disponible" }
  }

  const { data: sessionData } = await supabaseClient.auth.getSession()

  if (!sessionData.session) {
    return { success: false, error: "No estás autenticado" }
  }

  const { data: existingReview } = await supabaseClient
    .from("reviews")
    .select("id")
    .eq("product_id", productId)
    .eq("user_id", sessionData.session.user.id)
    .maybeSingle()

  if (existingReview) {
    return { success: false, error: "Ya has dejado una reseña para este producto" }
  }

  const { error } = await supabaseClient.from("reviews").insert({
    approved: false,
    content,
    product_id: productId,
    rating,
    title,
    user_id: sessionData.session.user.id,
  })

  if (error) {
    console.error("Error creating review:", error)
    return { success: false, error: "Error al crear la reseña" }
  }

  return { success: true }
}

export async function getAdminReviews(approved: boolean) {
  if (!hasPublicSupabaseConfig()) {
    return []
  }

  const supabase: any = await getServerSupabase()

  const { data, error } = await supabase
    .from("reviews")
    .select(`
      *,
      product:products(name, slug),
      user:profiles(first_name, last_name, email)
    `)
    .eq("approved", approved)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching admin reviews:", error)
    throw new Error("Failed to fetch reviews")
  }

  return data || []
}

