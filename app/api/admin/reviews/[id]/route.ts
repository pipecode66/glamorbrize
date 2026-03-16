import { type NextRequest, NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const supabase = getServerSupabase()

  // Verificar si el usuario está autenticado
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { approved } = await request.json()

    // Verificar si el usuario es administrador
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", session.user.id)
      .single()

    if (profileError || !profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // Actualizar la reseña
    const { data, error } = await supabase.from("reviews").update({ approved }).eq("id", params.id).select()

    if (error) {
      console.error("Error updating review:", error)
      return NextResponse.json({ error: "Failed to update review" }, { status: 500 })
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const supabase = getServerSupabase()

  // Verificar si el usuario está autenticado
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Verificar si el usuario es el propietario de la reseña o un administrador
  const { data: review, error: reviewError } = await supabase
    .from("reviews")
    .select("user_id")
    .eq("id", params.id)
    .single()

  if (reviewError || !review) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 })
  }

  if (review.user_id !== session.user.id) {
    // Verificar si el usuario es administrador
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", session.user.id)
      .single()

    if (profileError || !profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }
  }

  // Eliminar la reseña
  const { error } = await supabase.from("reviews").delete().eq("id", params.id)

  if (error) {
    console.error("Error deleting review:", error)
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
