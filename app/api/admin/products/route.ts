import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function POST(request: Request) {
  const supabase = getServerSupabase()

  // Verificar si el usuario es administrador
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single()

  if (!profile || profile.role !== "admin") {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const { images, variants, ...productData } = await request.json()

    // Crear producto
    const { data: product, error: productError } = await supabase.from("products").insert(productData).select()

    if (productError) {
      console.error("Error creating product:", productError)
      return NextResponse.json({ error: "Error al crear el producto" }, { status: 500 })
    }

    const productId = product[0].id

    // Crear imágenes
    if (images && images.length > 0) {
      const imagesData = images.map((image: any) => ({
        product_id: productId,
        url: image.url,
        alt_text: image.alt_text,
        position: image.position,
      }))

      const { error: imagesError } = await supabase.from("product_images").insert(imagesData)

      if (imagesError) {
        console.error("Error creating product images:", imagesError)
      }
    }

    // Crear variantes
    if (variants && variants.length > 0) {
      const variantsData = variants.map((variant: any) => ({
        ...variant,
        product_id: productId,
      }))

      const { error: variantsError } = await supabase.from("product_variants").insert(variantsData)

      if (variantsError) {
        console.error("Error creating product variants:", variantsError)
      }
    }

    return NextResponse.json({ success: true, product: product[0] })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Error al crear el producto" }, { status: 500 })
  }
}
