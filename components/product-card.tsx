"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HeartIcon, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { checkFavorite, toggleFavorite } from "@/lib/api-client"
import { isWishlistItem, toggleWishlistItem } from "@/lib/local-wishlist"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  description?: string
  category: string
  slug: string
}

export default function ProductCard({ id, name, price, image, description, category, slug }: ProductCardProps) {
  const { user } = useAuth()
  const { addItem } = useCart()
  const { toast } = useToast()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const syncFavoriteState = async () => {
      if (user) {
        const favorite = await checkFavorite(id)
        setIsFavorite(favorite)
        return
      }

      setIsFavorite(isWishlistItem(String(id)))
    }

    void syncFavoriteState()
  }, [id, user])

  const handleToggleFavorite = async () => {
    if (user) {
      const result = await toggleFavorite(id)

      if (result.success) {
        setIsFavorite(result.isFavorite)
        toast({
          title: result.isFavorite ? "Agregado a favoritos" : "Eliminado de favoritos",
          description: name,
        })
      }

      return
    }

    const result = toggleWishlistItem({
      id: String(id),
      name,
      price,
      image,
      category,
      slug,
    })

    setIsFavorite(result.isFavorite)
    toast({
      title: result.isFavorite ? "Agregado a tu lista" : "Eliminado de tu lista",
      description: result.isFavorite ? "Disponible en Wishlist." : name,
    })
  }

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
      slug,
      category,
      quantity: 1,
    })

    toast({
      title: "Producto agregado al carrito",
      description: name,
    })
  }

  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-sm bg-gray-100">
        <Link href={`/product/${slug}`} className="block h-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={500}
            height={600}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute right-4 top-4">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="rounded-full bg-white/80 hover:bg-white"
            onClick={handleToggleFavorite}
          >
            <HeartIcon className={`h-5 w-5 ${isFavorite ? "fill-current text-red-500" : ""}`} />
            <span className="sr-only">Agregar a favoritos</span>
          </Button>
        </div>
      </div>

      <div className="mt-3">
        <Link href={`/product/${slug}`}>
          <h3 className="text-sm font-medium">{name}</h3>
        </Link>
        <p className="mt-1 text-sm text-dark-gray">${price.toLocaleString("es-CO")}</p>
        {description && <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{description}</p>}
        <Button className="mt-3 h-9 w-full bg-primary text-sm text-white hover:bg-primary/90" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir al carrito
        </Button>
      </div>
    </div>
  )
}
