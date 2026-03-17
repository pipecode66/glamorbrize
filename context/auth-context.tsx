"use client"

import type React from "react"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { getBrowserClient } from "@/lib/supabase-browser"
import type { User, Session } from "@supabase/supabase-js"

type Profile = {
  id: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  address: string | null
  city: string | null
  state: string | null
  postal_code: string | null
}

type AuthContextType = {
  user: User | null
  session: Session | null
  profile: Profile | null
  isLoading: boolean
  signUp: (
    email: string,
    password: string,
    metadata?: { [key: string]: any },
  ) => Promise<{
    success?: boolean
    error: any
  }>
  signIn: (
    email: string,
    password: string,
  ) => Promise<{
    success?: boolean
    error: any
  }>
  signOut: () => Promise<void>
  updateProfile: (data: Partial<Profile>) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = useMemo(() => {
    if (typeof window === "undefined") {
      return null
    }

    try {
      return getBrowserClient()
    } catch {
      return null
    }
  }, [])

  const fetchProfile = async (userId: string) => {
    if (!supabase) {
      return
    }

    try {
      const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

      if (!error && data) {
        setProfile(data as Profile)
      }
    } catch (error) {
      console.error("Error fetching profile:", error)
    }
  }

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false)
      return
    }

    const setData = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)

        if (session?.user) {
          await fetchProfile(session.user.id)
        }
      } catch (error) {
        console.error("Error getting session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        await fetchProfile(session.user.id)
      } else {
        setProfile(null)
      }
    })

    setData()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const signUp = async (
    email: string,
    password: string,
    metadata?: { [key: string]: any },
  ): Promise<{ success?: boolean; error: any }> => {
    if (!supabase) {
      return { success: false, error: { message: "La autenticación no está disponible en este entorno." } }
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
        },
      })

      if (error) {
        return { success: false, error }
      }

      return { success: true, error: null }
    } catch (error) {
      console.error("Error signing up:", error)
      return { success: false, error }
    }
  }

  const signIn = async (email: string, password: string): Promise<{ success?: boolean; error: any }> => {
    if (!supabase) {
      return { success: false, error: { message: "La autenticación no está disponible en este entorno." } }
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { success: false, error }
      }

      router.refresh()
      return { success: true, error: null }
    } catch (error) {
      console.error("Error signing in:", error)
      return { success: false, error }
    }
  }

  const signOut = async () => {
    if (!supabase) {
      router.push("/")
      return
    }

    await supabase.auth.signOut()
    setProfile(null)
    router.refresh()
    router.push("/")
  }

  const updateProfile = async (data: Partial<Profile>): Promise<{ error: any }> => {
    if (!user) {
      return { error: { message: "No user logged in" } }
    }

    if (!supabase) {
      return { error: { message: "La autenticación no está disponible en este entorno." } }
    }

    try {
      const { error } = await supabase.from("profiles").update(data).eq("id", user.id)

      if (error) {
        return { error }
      }

      // Refresh profile data
      await fetchProfile(user.id)
      return { error: null }
    } catch (error) {
      console.error("Error updating profile:", error)
      return { error }
    }
  }

  const value = {
    user,
    session,
    profile,
    isLoading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
