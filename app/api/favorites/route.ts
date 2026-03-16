import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function GET(request: Request) {
  const supabase = await getServerSupabase()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data, error } = await supabase
    .from("favorites")
    .select(`
      *,
      product:products(
        *,
        category:categories(*),
        images:product_images(*)
      )
    `)
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching favorites:", error)
    return NextResponse.json({ error: "Error fetching favorites" }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const supabase = await getServerSupabase()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { productId } = await request.json()

  if (!productId) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
  }

  const { error } = await supabase.from("favorites").insert({
    user_id: session.user.id,
    product_id: productId,
  })

  if (error) {
    console.error("Error adding favorite:", error)
    return NextResponse.json({ error: "Error adding favorite" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
