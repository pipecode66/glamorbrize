import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    // Verificar autenticación
    const cookieStore = await cookies() // Added await to cookies() for Next.js 16 compatibility
    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: "", ...options })
        },
      },
    })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Verificar si el usuario es administrador
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single()

    if (!profile || profile.role !== "admin") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    // Procesar la solicitud multipart/form-data
    const formData = await request.formData()
    const file = formData.get("file") as File
    const category = (formData.get("category") as string) || "general"

    if (!file) {
      return NextResponse.json({ error: "No se proporcionó ningún archivo" }, { status: 400 })
    }

    // Validar tipo de archivo
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Solo se permiten archivos de imagen" }, { status: 400 })
    }

    // Validar tamaño de archivo (5MB máximo)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "El tamaño máximo permitido es 5MB" }, { status: 400 })
    }

    // Generar un nombre único para el archivo
    const timestamp = Date.now()
    const fileExtension = file.name.split(".").pop()
    const fileName = `${category}/${timestamp}-${Math.random().toString(36).substring(2, 15)}.${fileExtension}`

    // Convertir el archivo a un ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    // Subir el archivo a Supabase Storage
    const { data, error } = await supabase.storage.from("product-images").upload(fileName, buffer, {
      contentType: file.type,
      cacheControl: "3600",
      upsert: false,
    })

    if (error) {
      console.error("Error uploading to Supabase Storage:", error)
      return NextResponse.json({ error: "Error al subir la imagen" }, { status: 500 })
    }

    // Obtener la URL pública del archivo
    const { data: publicURL } = supabase.storage.from("product-images").getPublicUrl(data.path)

    return NextResponse.json({
      success: true,
      url: publicURL.publicUrl,
      path: data.path,
    })
  } catch (error) {
    console.error("Error in upload API:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
