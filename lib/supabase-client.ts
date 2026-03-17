import { createBrowserClient } from "@supabase/ssr"
import { requirePublicSupabaseConfig } from "@/lib/supabase-config"
import type { Database } from "@/types/supabase"

// Singleton pattern para evitar múltiples instancias
let browserClient: ReturnType<typeof createBrowserClient<Database>> | null = null

export function getSupabaseClient() {
  if (browserClient) {
    return browserClient
  }

  const { anonKey, url } = requirePublicSupabaseConfig()

  browserClient = createBrowserClient<Database>(
    url,
    anonKey,
  )

  return browserClient
}
