import { type NextRequest, NextResponse } from "next/server"
import { getAdminReviews } from "@/lib/review-service"
import { getServerSupabase } from "@/lib/server-supabase"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const approved = searchParams.get("approved") === "true"

  try {
    const supabase = getServerSupabase()

    // Verificar si el usuario está autenticado y es administrador
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Verificar si el usuario es administrador
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", session.user.id)
      .single()

    if (profileError || !profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const reviews = await getAdminReviews(approved)
    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error fetching admin reviews:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
