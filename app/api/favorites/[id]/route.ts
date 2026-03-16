import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const supabase = await getServerSupabase()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const productId = params.id

  // Verificar si el producto está en favoritos
  const { data: favorite, error: findError } = await supabase
    .from("favorites")
    .select("id")
    .eq("product_id", productId)
    .eq("user_id", session.user.id)
    .single()

  if (findError) {
    return NextResponse.json({ error: "Favorite not found" }, { status: 404 })
  }

  // Eliminar de favoritos
  const { error } = await supabase.from("favorites").delete().eq("id", favorite.id)

  if (error) {
    console.error("Error removing favorite:", error)
    return NextResponse.json({ error: "Error removing favorite" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
