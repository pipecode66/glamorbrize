import { type NextRequest, NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get("productId")

  if (!productId) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
  }

  const supabase: any = await getServerSupabase()

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
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const supabase: any = await getServerSupabase()

  // Verificar si el usuario estÃ¡ autenticado
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { productId, rating, title, content } = await request.json()

    // Validar los datos
    if (!productId || !rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 })
    }

    // Verificar si el producto existe
    const { data: product, error: productError } = await supabase
      .from("products")
      .select("id")
      .eq("id", productId)
      .single()

    if (productError || !product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Verificar si el usuario ya ha dejado una reseÃ±a para este producto
    const { data: existingReview, error: existingReviewError } = await supabase
      .from("reviews")
      .select("id")
      .eq("product_id", productId)
      .eq("user_id", session.user.id)
      .maybeSingle()

    if (existingReview) {
      return NextResponse.json({ error: "You have already reviewed this product" }, { status: 400 })
    }

    // Crear la reseÃ±a
    const { data, error } = await supabase
      .from("reviews")
      .insert({
        product_id: productId,
        user_id: session.user.id,
        rating,
        title,
        content,
        approved: false, // Las reseÃ±as requieren aprobaciÃ³n
      })
      .select()

    if (error) {
      console.error("Error creating review:", error)
      return NextResponse.json({ error: "Failed to create review" }, { status: 500 })
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

