import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function GET(request: Request) {
  const supabase: any = await getServerSupabase()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return NextResponse.json({
    user: session?.user || null,
  })
}

