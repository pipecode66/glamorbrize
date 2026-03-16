// Este archivo contiene funciones para llamar a las APIs desde el cliente
// No debe importar nada que dependa de "next/headers"

// Función para obtener productos
export async function fetchProducts(
  options: {
    categorySlug?: string
    featured?: boolean
    search?: string
    minPrice?: number
    maxPrice?: number
    inStock?: boolean
    limit?: number
    offset?: number
  } = {},
) {
  let url = "/api/products?"

  if (options.categorySlug) {
    url += `categorySlug=${encodeURIComponent(options.categorySlug)}&`
  }

  if (options.featured !== undefined) {
    url += `featured=${options.featured}&`
  }

  if (options.search) {
    url += `search=${encodeURIComponent(options.search)}&`
  }

  if (options.minPrice !== undefined) {
    url += `minPrice=${options.minPrice}&`
  }

  if (options.maxPrice !== undefined) {
    url += `maxPrice=${options.maxPrice}&`
  }

  if (options.inStock !== undefined) {
    url += `inStock=${options.inStock}&`
  }

  if (options.limit) {
    url += `limit=${options.limit}&`
  }

  if (options.offset) {
    url += `offset=${options.offset}&`
  }

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Error fetching products")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

// Función para obtener un producto por su slug
export async function fetchProductBySlug(slug: string) {
  try {
    const response = await fetch(`/api/products/${slug}`)
    if (!response.ok) {
      throw new Error("Error fetching product")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

// Función para obtener categorías
export async function fetchCategories() {
  try {
    const response = await fetch("/api/categories")
    if (!response.ok) {
      throw new Error("Error fetching categories")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

// Función para obtener reseñas de un producto
export async function fetchProductReviews(productId: number) {
  try {
    const response = await fetch(`/api/reviews?productId=${productId}`)
    if (!response.ok) {
      throw new Error("Error fetching reviews")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return []
  }
}

// Función para crear una reseña
export async function createReview(productId: number, rating: number, title: string | null, content: string | null) {
  try {
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        rating,
        title,
        content,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Error creating review")
    }

    return { success: true }
  } catch (error) {
    console.error("Error creating review:", error)
    return { success: false, error: error instanceof Error ? error.message : "Error creating review" }
  }
}

// Función para obtener favoritos
export async function fetchFavorites() {
  try {
    const response = await fetch("/api/favorites")
    if (!response.ok) {
      throw new Error("Error fetching favorites")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching favorites:", error)
    return []
  }
}

// Función para verificar si un producto está en favoritos
export async function checkFavorite(productId: number) {
  try {
    const response = await fetch(`/api/favorites/${productId}`)
    if (!response.ok) {
      throw new Error("Error checking favorite")
    }
    const data = await response.json()
    return data.isFavorite
  } catch (error) {
    console.error("Error checking favorite:", error)
    return false
  }
}

// Función para añadir/quitar un producto de favoritos
export async function toggleFavorite(productId: number) {
  try {
    const response = await fetch(`/api/favorites/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Error toggling favorite")
    }

    return await response.json()
  } catch (error) {
    console.error("Error toggling favorite:", error)
    return { success: false, isFavorite: false }
  }
}

// Función para aplicar un cupón
export async function applyCoupon(code: string, subtotal: number) {
  try {
    const response = await fetch("/api/coupons/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        subtotal,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Error applying coupon")
    }

    return await response.json()
  } catch (error) {
    console.error("Error applying coupon:", error)
    return { success: false, message: error instanceof Error ? error.message : "Error applying coupon" }
  }
}
