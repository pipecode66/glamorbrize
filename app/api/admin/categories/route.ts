import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function POST(request: Request) {
  const supabase: any = await getServerSupabase()

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

    const { data: category, error: categoryError } = await supabase.from("categories").insert(categoryData).select()

    if (categoryError) {
      console.error("Error creating category:", categoryError)
      return NextResponse.json({ error: "Error al crear la categoría" }, { status: 500 })
    }

    return NextResponse.json({ success: true, category: category[0] })
  } catch (error) {
    console.error("Error creating category:", error)
    return NextResponse.json({ error: "Error al crear la categoría" }, { status: 500 })
  }
}

