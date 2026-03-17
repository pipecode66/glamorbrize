"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Trash2 } from "lucide-react"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { openWhatsApp } from "@/lib/whatsapp"
import { getWishlist, removeWishlistItem, type WishlistItem } from "@/lib/local-wishlist"

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  useEffect(() => {
    setWishlist(getWishlist())
  }, [])

  const handleRemove = (id: string) => {
    setWishlist(removeWishlistItem(id))
  }

  const handleWhatsAppQuote = (item: WishlistItem) => {
    openWhatsApp({
      productName: item.name,
      productPrice: `$${item.price.toLocaleString("es-CO")}`,
    })
  }

  if (wishlist.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center">
          <Heart className="mb-4 h-16 w-16 text-gray-300" />
          <h1 className="mb-2 text-2xl font-bold">Tu lista de deseos esta vacia</h1>
          <p className="mb-6 text-muted-foreground">Agrega productos que te gusten para verlos aqui.</p>
          <Link href="/">
            <Button>Explorar productos</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <h1 className="mb-8 text-3xl font-bold">Mi lista de deseos</h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlist.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative aspect-square">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="mb-1 text-sm font-medium text-primary">{item.category}</p>
                  <h3 className="mb-2 text-lg font-bold">{item.name}</h3>
                  <p className="mb-4 text-xl font-bold text-primary">${item.price.toLocaleString("es-CO")}</p>

                  <div className="flex gap-2">
                    <Button onClick={() => handleWhatsAppQuote(item)} className="flex-1" size="sm">
                      Cotizar
                    </Button>
                    <Button
                      onClick={() => handleRemove(item.id)}
                      variant="outline"
                      size="icon"
                      className="text-red-500 hover:bg-red-50 hover:text-red-700"
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
      <Footer />
    </div>
  )
}
