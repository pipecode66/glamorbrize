import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function POST(request: Request) {
  const supabase: any = await getServerSupabase()

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

    const { data: product, error: productError } = await supabase.from("products").insert(productData).select()

    if (productError) {
      console.error("Error creating product:", productError)
      return NextResponse.json({ error: "Error al crear el producto" }, { status: 500 })
    }

    const productId = product[0].id

    if (images && images.length > 0) {
      const imagesData = images.map((image: any) => ({
        alt_text: image.alt_text,
        position: image.position,
        product_id: productId,
        url: image.url,
      }))

      const { error: imagesError } = await supabase.from("product_images").insert(imagesData)

      if (imagesError) {
        console.error("Error creating product images:", imagesError)
      }
    }

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

