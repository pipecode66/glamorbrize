import { getServerSupabase } from "@/lib/server-supabase"
import { createClient } from "@supabase/supabase-js"

// Cliente de Supabase para el lado del cliente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Tipos
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

// Funciones para el cliente
export async function getProductReviews(productId: number): Promise<Review[]> {
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
  // Obtener la sesión actual
  const { data: sessionData } = await supabaseClient.auth.getSession()

  if (!sessionData.session) {
    return { success: false, error: "No estás autenticado" }
  }

  // Verificar si el usuario ya ha dejado una reseña para este producto
  const { data: existingReview } = await supabaseClient
    .from("reviews")
    .select("id")
    .eq("product_id", productId)
    .eq("user_id", sessionData.session.user.id)
    .maybeSingle()

  if (existingReview) {
    return { success: false, error: "Ya has dejado una reseña para este producto" }
  }

  // Crear la reseña
  const { error } = await supabaseClient.from("reviews").insert({
    product_id: productId,
    user_id: sessionData.session.user.id,
    rating,
    title,
    content,
    approved: false, // Las reseñas requieren aprobación
  })

  if (error) {
    console.error("Error creating review:", error)
    return { success: false, error: "Error al crear la reseña" }
  }

  return { success: true }
}

// Funciones para el administrador (solo se usarán en el lado del servidor)
export async function getAdminReviews(approved: boolean) {
  const supabase = getServerSupabase()

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
