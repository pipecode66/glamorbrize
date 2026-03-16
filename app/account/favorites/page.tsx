"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Trash2, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"

export const dynamic = "force-dynamic"

export default function FavoritesPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [favorites, setFavorites] = useState<any[]>([])
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true)
  const { addItem } = useCart()

  // Redirigir si no hay usuario autenticado
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login?redirectUrl=/account/favorites")
    }
  }, [user, isLoading, router])

  // Cargar favoritos del usuario
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return

      setIsLoadingFavorites(true)
      try {
        const response = await fetch("/api/favorites")
        if (response.ok) {
          const data = await response.json()
          setFavorites(data)
        }
      } catch (error) {
        console.error("Error fetching favorites:", error)
      } finally {
        setIsLoadingFavorites(false)
      }
    }

    if (user) {
      fetchFavorites()
    }
  }, [user])

  const handleRemoveFavorite = async (favoriteId: number) => {
    try {
      const response = await fetch(`/api/favorites/${favoriteId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setFavorites((prev) => prev.filter((fav) => fav.id !== favoriteId))
        toast({
          title: "Producto eliminado de favoritos",
        })
      }
    } catch (error) {
      console.error("Error removing favorite:", error)
      toast({
        title: "Error al eliminar de favoritos",
        variant: "destructive",
      })
    }
  }

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]?.url || "/placeholder.svg",
      quantity: 1,
      category: product.category?.slug,
    })

    toast({
      title: "Producto añadido al carrito",
      description: `${product.name} ha sido añadido a tu carrito.`,
    })
  }

  if (isLoading || isLoadingFavorites) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p>Cargando...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null // La redirección se maneja en el useEffect
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Mis Favoritos</h1>
          <Button asChild variant="outline">
            <Link href="/account/profile">Volver al Perfil</Link>
          </Button>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">No tienes productos en tu lista de favoritos.</p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/">Explorar Productos</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((favorite) => (
              <div key={favorite.id} className="border rounded-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={favorite.product.images[0]?.url || "/placeholder.svg"}
                    alt={favorite.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <Link href={`/product/${favorite.product.slug}`}>
                    <h3 className="font-medium">{favorite.product.name}</h3>
                  </Link>
                  <p className="text-primary font-medium mt-1">
                    ${Number(favorite.product.price).toLocaleString("es-CO")}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90 text-white"
                      onClick={() => handleAddToCart(favorite.product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al carrito
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveFavorite(favorite.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
