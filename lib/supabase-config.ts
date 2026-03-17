export type PublicSupabaseConfig = {
  anonKey: string
  url: string
}

export function getPublicSupabaseConfig(): PublicSupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    return null
  }

  return { anonKey, url }
}

export function hasPublicSupabaseConfig(): boolean {
  return getPublicSupabaseConfig() !== null
}

export function requirePublicSupabaseConfig(): PublicSupabaseConfig {
  const config = getPublicSupabaseConfig()

  if (!config) {
    throw new Error("Supabase public environment variables are missing.")
  }

  return config
}

export function getServiceRoleKey(): string | null {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || null
}

export function hasServiceRoleConfig(): boolean {
  return hasPublicSupabaseConfig() && Boolean(getServiceRoleKey())
}

export function requireServiceRoleKey(): string {
  const serviceRoleKey = getServiceRoleKey()

  if (!serviceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing.")
  }

  return serviceRoleKey
}
