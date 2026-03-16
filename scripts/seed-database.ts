import { createClient } from "@supabase/supabase-js"

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

// Categorías
const categories = [
  {
    name: "Batas",
    slug: "batas",
    description: "Batas de alta calidad para profesionales de la estética, salud y bienestar",
    image_url: "/images/bata-microfibra-blanca.webp",
  },
  {
    name: "Estrapleras",
    slug: "estrapleras",
    description: "Estrapleras de alta calidad para profesionales",
    image_url: "/images/estraplera-microfibra-blanca.webp",
  },
  {
    name: "Accesorios",
    slug: "accesorios",
    description: "Accesorios para profesionales de la estética",
    image_url: "/images/balaca-microfibra.webp",
  },
  {
    name: "Toallas y Cobijas",
    slug: "toallas-cobijas",
    description: "Toallas y cobijas de alta calidad",
    image_url: "/images/toallas.webp",
  },
]

// Productos
const products = [
  {
    name: "Bata de Baño Microfibra Blanca",
    slug: "bata-microfibra-blanca",
    description:
      "Bata de baño en microfibra de alta calidad. Color blanca, peso (202 g), detalle sesgo satinado en los orillos.",
    price: 85000,
    inventory_quantity: 50,
    category_slug: "batas",
    featured: true,
    images: [
      {
        url: "/images/bata-microfibra-blanca.webp",
        alt_text: "Bata de Baño Microfibra Blanca",
        position: 0,
      },
    ],
    variants: [
      {
        name: "Blanca XS",
        color: "Blanco",
        size: "XS",
        inventory_quantity: 10,
      },
      {
        name: "Blanca S",
        color: "Blanco",
        size: "S",
        inventory_quantity: 10,
      },
      {
        name: "Blanca M",
        color: "Blanco",
        size: "M",
        inventory_quantity: 10,
      },
      {
        name: "Blanca L",
        color: "Blanco",
        size: "L",
        inventory_quantity: 10,
      },
      {
        name: "Blanca XL",
        color: "Blanco",
        size: "XL",
        inventory_quantity: 10,
      },
    ],
  },
  {
    name: "Bata de Baño Microfibra Gris",
    slug: "bata-microfibra-gris",
    description: "Bata de baño en microfibra de alta calidad. Color gris, peso (202 g), tela suave y adsorbente.",
    price: 88000,
    inventory_quantity: 50,
    category_slug: "batas",
    featured: true,
    images: [
      {
        url: "/images/bata-microfibra-gris.webp",
        alt_text: "Bata de Baño Microfibra Gris",
        position: 0,
      },
    ],
    variants: [
      {
        name: "Gris XS",
        color: "Gris",
        size: "XS",
        inventory_quantity: 10,
      },
      {
        name: "Gris S",
        color: "Gris",
        size: "S",
        inventory_quantity: 10,
      },
      {
        name: "Gris M",
        color: "Gris",
        size: "M",
        inventory_quantity: 10,
      },
      {
        name: "Gris L",
        color: "Gris",
        size: "L",
        inventory_quantity: 10,
      },
      {
        name: "Gris XL",
        color: "Gris",
        size: "XL",
        inventory_quantity: 10,
      },
    ],
  },
  {
    name: "Bata en Seda Blanca",
    slug: "bata-seda-blanca",
    description: "Bata en seda de alta calidad. Color blanco, tela suave y elegante.",
    price: 85000,
    inventory_quantity: 30,
    category_slug: "batas",
    featured: false,
    images: [
      {
        url: "/images/batas-seda.webp",
        alt_text: "Bata en Seda Blanca",
        position: 0,
      },
    ],
    variants: [
      {
        name: "Blanca XS",
        color: "Blanco",
        size: "XS",
        inventory_quantity: 6,
      },
      {
        name: "Blanca S",
        color: "Blanco",
        size: "S",
        inventory_quantity: 6,
      },
      {
        name: "Blanca M",
        color: "Blanco",
        size: "M",
        inventory_quantity: 6,
      },
      {
        name: "Blanca L",
        color: "Blanco",
        size: "L",
        inventory_quantity: 6,
      },
      {
        name: "Blanca XL",
        color: "Blanco",
        size: "XL",
        inventory_quantity: 6,
      },
    ],
  },
  {
    name: "Estraplera Microfibra Blanca",
    slug: "estraplera-microfibra-blanca",
    description: "Estraplera en microfibra de alta calidad. Color blanca, detalle sesgo satinado en los orillos.",
    price: 50000,
    inventory_quantity: 40,
    category_slug: "estrapleras",
    featured: true,
    images: [
      {
        url: "/images/estraplera-microfibra-blanca.webp",
        alt_text: "Estraplera Microfibra Blanca",
        position: 0,
      },
    ],
    variants: [
      {
        name: "Blanca Única",
        color: "Blanco",
        size: "Única",
        inventory_quantity: 40,
      },
    ],
  },
  {
    name: "Balaca Microfibra Blanca",
    slug: "balaca-microfibra-blanca",
    description: "Balaca en microfibra de alta calidad. Color blanco con sesgos.",
    price: 16000,
    inventory_quantity: 60,
    category_slug: "accesorios",
    featured: false,
    images: [
      {
        url: "/images/balaca-microfibra.webp",
        alt_text: "Balaca Microfibra Blanca",
        position: 0,
      },
    ],
    variants: [
      {
        name: "Blanca Única",
        color: "Blanco",
        size: "Única",
        inventory_quantity: 60,
      },
    ],
  },
  {
    name: "Toalla Blanca 70x130",
    slug: "toalla-blanca-70x130",
    description: "Toalla blanca, tamaño 70x130cm, alta absorción.",
    price: 48000,
    inventory_quantity: 35,
    category_slug: "toallas-cobijas",
    featured: false,
    images: [
      {
        url: "/images/toallas.webp",
        alt_text: "Toalla Blanca 70x130",
        position: 0,
      },
    ],
    variants: [
      {
        name: "Blanca 70x130",
        color: "Blanco",
        size: "70x130",
        inventory_quantity: 35,
      },
    ],
  },
]

// Función para sembrar la base de datos
async function seedDatabase() {
  try {
    console.log("Iniciando siembra de la base de datos...")

    // Insertar categorías
    console.log("Insertando categorías...")
    for (const category of categories) {
      const { data: existingCategory } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", category.slug)
        .single()

      if (!existingCategory) {
        const { data, error } = await supabase.from("categories").insert(category).select()

        if (error) {
          console.error(`Error al insertar categoría ${category.name}:`, error)
        } else {
          console.log(`Categoría insertada: ${category.name}`)
        }
      } else {
        console.log(`Categoría ya existe: ${category.name}`)
      }
    }

    // Obtener IDs de categorías
    const { data: categoryData } = await supabase.from("categories").select("id, slug")

    const categoryMap = new Map()
    categoryData?.forEach((cat) => {
      categoryMap.set(cat.slug, cat.id)
    })

    // Insertar productos
    console.log("Insertando productos...")
    for (const product of products) {
      const { data: existingProduct } = await supabase.from("products").select("id").eq("slug", product.slug).single()

      if (!existingProduct) {
        const categoryId = categoryMap.get(product.category_slug)

        if (!categoryId) {
          console.error(`Categoría no encontrada para el producto ${product.name}`)
          continue
        }

        // Insertar producto
        const { data: productData, error: productError } = await supabase
          .from("products")
          .insert({
            name: product.name,
            slug: product.slug,
            description: product.description,
            price: product.price,
            inventory_quantity: product.inventory_quantity,
            category_id: categoryId,
            featured: product.featured,
          })
          .select()

        if (productError) {
          console.error(`Error al insertar producto ${product.name}:`, productError)
          continue
        }

        const productId = productData[0].id
        console.log(`Producto insertado: ${product.name} (ID: ${productId})`)

        // Insertar imágenes
        for (const image of product.images) {
          const { error: imageError } = await supabase.from("product_images").insert({
            product_id: productId,
            url: image.url,
            alt_text: image.alt_text,
            position: image.position,
          })

          if (imageError) {
            console.error(`Error al insertar imagen para ${product.name}:`, imageError)
          }
        }

        // Insertar variantes
        for (const variant of product.variants) {
          const { error: variantError } = await supabase.from("product_variants").insert({
            product_id: productId,
            name: variant.name,
            color: variant.color,
            size: variant.size,
            price: product.price,
            inventory_quantity: variant.inventory_quantity,
          })

          if (variantError) {
            console.error(`Error al insertar variante ${variant.name} para ${product.name}:`, variantError)
          }
        }
      } else {
        console.log(`Producto ya existe: ${product.name}`)
      }
    }

    console.log("Siembra de la base de datos completada con éxito!")
  } catch (error) {
    console.error("Error durante la siembra de la base de datos:", error)
  }
}

// Ejecutar la función de siembra
seedDatabase()
