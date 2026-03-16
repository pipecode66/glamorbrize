"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Trash2 } from "lucide-react"

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  useEffect(() => {
    // Load wishlist from localStorage
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id)
    setWishlist(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
  }

  const handleWhatsAppQuote = (item: WishlistItem) => {
    const phoneNumber = "573209951491"
    const message = encodeURIComponent(
      `Hola, me gustaría cotizar:\n\n📦 Producto: ${item.name}\n💰 Precio: $${item.price.toLocaleString("es-CO")}\n\n¡Gracias!`,
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
        <Heart className="h-16 w-16 text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Tu lista de deseos está vacía</h1>
        <p className="text-muted-foreground mb-6">Agrega productos que te gusten para verlos aquí</p>
        <Link href="/">
          <Button>Explorar Productos</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">Mi Lista de Deseos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative aspect-square">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm text-primary font-medium mb-1">{item.category}</p>
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-xl font-bold text-primary mb-4">${item.price.toLocaleString("es-CO")}</p>

                <div className="flex gap-2">
                  <Button onClick={() => handleWhatsAppQuote(item)} className="flex-1" size="sm">
                    Cotizar
                  </Button>
                  <Button
                    onClick={() => removeFromWishlist(item.id)}
                    variant="outline"
                    size="icon"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
