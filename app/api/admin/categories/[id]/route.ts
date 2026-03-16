import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const supabase = getServerSupabase()

  // Verificar si el usuario es administrador
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single()

  if (!profile || profile.role !== "admin") {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const categoryData = await request.json()

    // Actualizar categoría
    const { data: category, error: categoryError } = await supabase
      .from("categories")
      .update(categoryData)
      .eq("id", params.id)
      .select()

    if (categoryError) {
      console.error("Error updating category:", categoryError)
      return NextResponse.json({ error: "Error al actualizar la categoría" }, { status: 500 })
    }

    return NextResponse.json({ success: true, category: category[0] })
  } catch (error) {
    console.error("Error updating category:", error)
    return NextResponse.json({ error: "Error al actualizar la categoría" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const supabase = getServerSupabase()

  // Verificar si el usuario es administrador
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single()

  if (!profile || profile.role !== "admin") {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  // Verificar si hay productos asociados a esta categoría
  const { count } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true })
    .eq("category_id", params.id)

  if (count && count > 0) {
    return NextResponse.json({ error: "No se puede eliminar una categoría con productos asociados" }, { status: 400 })
  }

  // Eliminar la categoría
  const { error } = await supabase.from("categories").delete().eq("id", params.id)

  if (error) {
    console.error("Error deleting category:", error)
    return NextResponse.json({ error: "Error al eliminar la categoría" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
