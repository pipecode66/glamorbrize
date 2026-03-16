import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Crear un cliente de Supabase para el lado del cliente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const createBrowserClient = () => createClient<Database>(supabaseUrl, supabaseAnonKey)

// Singleton pattern para evitar múltiples instancias
let browserClient: ReturnType<typeof createBrowserClient> | null = null

export const getBrowserClient = () => {
  if (!browserClient) {
    browserClient = createBrowserClient()
  }
  return browserClient
}
