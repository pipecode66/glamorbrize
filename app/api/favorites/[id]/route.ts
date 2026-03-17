import { NextRequest, NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

type FavoriteRouteContext = {
  params: Promise<{
    id: string
  }>
}

async function getFavoriteContext() {
  const supabase: any = await getServerSupabase()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { session, supabase }
}

export async function GET(_request: NextRequest, context: FavoriteRouteContext) {
  const { session, supabase } = await getFavoriteContext()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await context.params
  const productId = Number(id)
  if (Number.isNaN(productId)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 })
  }

  const { data: favorite, error } = await supabase
    .from("favorites")
    .select("id")
    .eq("product_id", productId)
    .eq("user_id", session.user.id)
    .maybeSingle()

  if (error) {
    console.error("Error checking favorite:", error)
    return NextResponse.json({ error: "Error checking favorite" }, { status: 500 })
  }

  return NextResponse.json({ favoriteId: favorite?.id ?? null, isFavorite: Boolean(favorite) })
}

export async function POST(_request: NextRequest, context: FavoriteRouteContext) {
  const { session, supabase } = await getFavoriteContext()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await context.params
  const productId = Number(id)
  if (Number.isNaN(productId)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 })
  }

  const { data: existingFavorite, error: existingFavoriteError } = await supabase
    .from("favorites")
    .select("id")
    .eq("product_id", productId)
    .eq("user_id", session.user.id)
    .maybeSingle()

  if (existingFavoriteError) {
    console.error("Error toggling favorite:", existingFavoriteError)
    return NextResponse.json({ error: "Error toggling favorite" }, { status: 500 })
  }

  if (existingFavorite) {
    const { error } = await supabase.from("favorites").delete().eq("id", existingFavorite.id)

    if (error) {
      console.error("Error removing favorite:", error)
      return NextResponse.json({ error: "Error removing favorite" }, { status: 500 })
    }

    return NextResponse.json({ success: true, isFavorite: false })
  }

  const { error } = await supabase.from("favorites").insert({
    product_id: productId,
    user_id: session.user.id,
  })

  if (error) {
    console.error("Error adding favorite:", error)
    return NextResponse.json({ error: "Error adding favorite" }, { status: 500 })
  }

  return NextResponse.json({ success: true, isFavorite: true })
}

export async function DELETE(_request: Request, context: FavoriteRouteContext) {
  const { session, supabase } = await getFavoriteContext()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await context.params
  const productId = Number(id)
  if (Number.isNaN(productId)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 })
  }

  const { data: favorite, error: findError } = await supabase
    .from("favorites")
    .select("id")
    .eq("product_id", productId)
    .eq("user_id", session.user.id)
    .single()

  if (findError) {
    return NextResponse.json({ error: "Favorite not found" }, { status: 404 })
  }

  const { error } = await supabase.from("favorites").delete().eq("id", favorite.id)

  if (error) {
    console.error("Error removing favorite:", error)
    return NextResponse.json({ error: "Error removing favorite" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

