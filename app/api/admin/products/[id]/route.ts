import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/server-supabase"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
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

    // Actualizar producto
    const { data: product, error: productError } = await supabase
      .from("products")
      .update(productData)
      .eq("id", params.id)
      .select()

    if (productError) {
      console.error("Error updating product:", productError)
      return NextResponse.json({ error: "Error al actualizar el producto" }, { status: 500 })
    }

    // Eliminar imágenes existentes
    const { error: deleteImagesError } = await supabase.from("product_images").delete().eq("product_id", params.id)

    if (deleteImagesError) {
      console.error("Error deleting product images:", deleteImagesError)
    }

    // Crear nuevas imágenes
    if (images && images.length > 0) {
      const imagesData = images.map((image: any) => ({
        product_id: params.id,
        url: image.url,
        alt_text: image.alt_text,
        position: image.position,
      }))

      const { error: imagesError } = await supabase.from("product_images").insert(imagesData)

      if (imagesError) {
        console.error("Error creating product images:", imagesError)
      }
    }

    // Eliminar variantes existentes
    const { error: deleteVariantsError } = await supabase.from("product_variants").delete().eq("product_id", params.id)

    if (deleteVariantsError) {
      console.error("Error deleting product variants:", deleteVariantsError)
    }

    // Crear nuevas variantes
    if (variants && variants.length > 0) {
      const variantsData = variants.map((variant: any) => ({
        ...variant,
        product_id: params.id,
      }))

      const { error: variantsError } = await supabase.from("product_variants").insert(variantsData)

      if (variantsError) {
        console.error("Error creating product variants:", variantsError)
      }
    }

    return NextResponse.json({ success: true, product: product[0] })
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ error: "Error al actualizar el producto" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
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

  // Eliminar el producto
  const { error } = await supabase.from("products").delete().eq("id", params.id)

  if (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ error: "Error al eliminar el producto" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
