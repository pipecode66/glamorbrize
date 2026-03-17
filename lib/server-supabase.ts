import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { requirePublicSupabaseConfig } from "@/lib/supabase-config"
import type { Database } from "@/types/supabase"

export async function getServerSupabase() {
  const cookieStore = await cookies()
  const { anonKey, url } = requirePublicSupabaseConfig()

  const serverClient = createServerClient<Database>(
    url,
    anonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  )

  return serverClient
}
