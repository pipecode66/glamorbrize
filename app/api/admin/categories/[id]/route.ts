import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

type CategoryRouteContext = {
  params: Promise<{
    id: string
  }>
}

export async function PUT(request: Request, context: CategoryRouteContext) {
  const supabase: any = await getServerSupabase()
  const { id } = await context.params

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

    const { data: category, error: categoryError } = await supabase
      .from("categories")
      .update(categoryData)
      .eq("id", id)
      .select()

    if (categoryError) {
      console.error("Error updating category:", categoryError)
      return NextResponse.json({ error: "Error al actualizar la categorÃ­a" }, { status: 500 })
    }

    return NextResponse.json({ success: true, category: category[0] })
  } catch (error) {
    console.error("Error updating category:", error)
    return NextResponse.json({ error: "Error al actualizar la categorÃ­a" }, { status: 500 })
  }
}

export async function DELETE(_request: Request, context: CategoryRouteContext) {
  const supabase: any = await getServerSupabase()
  const { id } = await context.params

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

  const { count } = await supabase.from("products").select("*", { count: "exact", head: true }).eq("category_id", id)

  if (count && count > 0) {
    return NextResponse.json({ error: "No se puede eliminar una categorÃ­a con productos asociados" }, { status: 400 })
  }

  const { error } = await supabase.from("categories").delete().eq("id", id)

  if (error) {
    console.error("Error deleting category:", error)
    return NextResponse.json({ error: "Error al eliminar la categorÃ­a" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

