import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

type OrderRouteContext = {
  params: Promise<{
    id: string
  }>
}

export async function PATCH(request: Request, context: OrderRouteContext) {
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
    const { status } = await request.json()

    const { data: order, error } = await supabase.from("orders").update({ status }).eq("id", id).select()

    if (error) {
      console.error("Error updating order status:", error)
      return NextResponse.json({ error: "Error al actualizar el estado del pedido" }, { status: 500 })
    }

    return NextResponse.json({ success: true, order: order[0] })
  } catch (error) {
    console.error("Error updating order status:", error)
    return NextResponse.json({ error: "Error al actualizar el estado del pedido" }, { status: 500 })
  }
}

