"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Trash2 } from "lucide-react"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"

export const dynamic = "force-dynamic"

export default function FavoritesPage() {
  const { user, isLoading } = useAuth()
  const { addItem } = useCart()
  const router = useRouter()
  const [favorites, setFavorites] = useState<any[]>([])
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login?redirectUrl=/account/favorites")
    }
  }, [isLoading, router, user])

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) {
        setIsLoadingFavorites(false)
        return
      }

      setIsLoadingFavorites(true)
      try {
        const response = await fetch("/api/favorites")
        if (!response.ok) {
          throw new Error("No se pudieron cargar los favoritos")
        }

        const data = await response.json()
        setFavorites(data)
      } catch (error) {
        console.error("Error fetching favorites:", error)
      } finally {
        setIsLoadingFavorites(false)
      }
    }

    void fetchFavorites()
  }, [user])

  const handleRemoveFavorite = async (favoriteId: number, productId: number) => {
    try {
      const response = await fetch(`/api/favorites/${productId}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("No se pudo eliminar el favorito")
      }

      setFavorites((prev) => prev.filter((favorite) => favorite.id !== favoriteId))
      toast({
        title: "Producto eliminado de favoritos",
      })
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
      image: product.images?.[0]?.url || "/placeholder.svg",
      quantity: 1,
      category: product.category?.slug,
      slug: product.slug,
    })

    toast({
      title: "Producto agregado al carrito",
      description: `${product.name} fue agregado a tu carrito.`,
    })
  }

  if (isLoading || isLoadingFavorites) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 items-center justify-center">
          <p>Cargando...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 py-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold">Mis favoritos</h1>
          <Button asChild variant="outline">
            <Link href="/account/profile">Volver al perfil</Link>
          </Button>
        </div>

        {favorites.length === 0 ? (
          <div className="py-12 text-center">
            <p className="mb-6 text-muted-foreground">No tienes productos en tu lista de favoritos.</p>
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <Link href="/">Explorar productos</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((favorite) => (
              <div key={favorite.id} className="overflow-hidden rounded-md border">
                <div className="relative aspect-square">
                  <Image
                    src={favorite.product.images?.[0]?.url || "/placeholder.svg"}
                    alt={favorite.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <Link href={`/product/${favorite.product.slug}`}>
                    <h3 className="font-medium">{favorite.product.name}</h3>
                  </Link>
                  <p className="mt-1 font-medium text-primary">${Number(favorite.product.price).toLocaleString("es-CO")}</p>
                  <div className="mt-4 flex gap-2">
                    <Button
                      className="flex-1 bg-primary text-white hover:bg-primary/90"
                      onClick={() => handleAddToCart(favorite.product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Añadir al carrito
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveFavorite(favorite.id, favorite.product_id)}
                      className="text-red-500 hover:bg-red-50 hover:text-red-700"
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
