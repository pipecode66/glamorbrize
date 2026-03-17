import { type NextRequest, NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

type ReviewRouteContext = {
  params: Promise<{
    id: string
  }>
}

export async function GET(_request: NextRequest, context: ReviewRouteContext) {
  const supabase: any = await getServerSupabase()
  const { id } = await context.params

  const { data, error } = await supabase
    .from("reviews")
    .select(`
      *,
      user:profiles(first_name, last_name)
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching review:", error)
    return NextResponse.json({ error: "Failed to fetch review" }, { status: 500 })
  }

  if (!data) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 })
  }

  return NextResponse.json(data)
}

export async function PATCH(request: NextRequest, context: ReviewRouteContext) {
  const supabase: any = await getServerSupabase()
  const { id } = await context.params

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { approved } = await request.json()

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", session.user.id)
      .single()

    if (profileError || !profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const { data, error } = await supabase.from("reviews").update({ approved }).eq("id", id).select()

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

export async function DELETE(_request: NextRequest, context: ReviewRouteContext) {
  const supabase: any = await getServerSupabase()
  const { id } = await context.params

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: review, error: reviewError } = await supabase
    .from("reviews")
    .select("user_id")
    .eq("id", id)
    .single()

  if (reviewError || !review) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 })
  }

  if (review.user_id !== session.user.id) {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", session.user.id)
      .single()

    if (profileError || !profile || profile.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }
  }

  const { error } = await supabase.from("reviews").delete().eq("id", id)

  if (error) {
    console.error("Error deleting review:", error)
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

