import { createBrowserClient } from "@supabase/ssr"
import { requirePublicSupabaseConfig } from "@/lib/supabase-config"
import type { Database } from "@/types/supabase"

export function createClient() {
  const { anonKey, url } = requirePublicSupabaseConfig()

  return createBrowserClient<Database>(url, anonKey)
}

// Alias for backward compatibility
export const getBrowserClient = createClient
