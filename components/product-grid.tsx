"use client"

import Image from "next/image"
import Link from "next/link"
import { HeartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

// Datos actualizados según el catálogo real
const batasProducts = [
  {
    id: 1,
    name: "Bata de Baño Microfibra Blanca",
    price: 85000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Microfibra+Blanca",
    description: "Color blanca, peso (202 g), detalle sesgo satinado en los orillos",
    bordadoEspalda: 90000,
  },
  {
    id: 2,
    name: "Bata de Baño Microfibra Gris",
    price: 88000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Microfibra+Gris",
    description: "Color gris, peso (202 g), tela suave y adsorbente",
    bordadoEspalda: 93000,
  },
  {
    id: 3,
    name: "Bata en Seda Blanca",
    price: 85000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Seda+Blanca",
    description: "Color blanco, tela suave",
    bordadoEspalda: 90000,
  },
  {
    id: 4,
    name: "Bata en Seda Negra",
    price: 85000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Seda+Negra",
    description: "Color negro, tela suave",
    bordadoEspalda: 90000,
  },
  {
    id: 5,
    name: "Bata en Seda Azul",
    price: 85000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Seda+Azul",
    description: "Color azul, tela suave",
    bordadoEspalda: 90000,
  },
  {
    id: 6,
    name: "Bata en Seda Beige",
    price: 85000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Seda+Beige",
    description: "Color beige, tela suave",
    bordadoEspalda: 90000,
  },
  {
    id: 7,
    name: "Bata en Seda Rosada",
    price: 85000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Seda+Rosada",
    description: "Color rosado, tela suave",
    bordadoEspalda: 90000,
  },
  {
    id: 8,
    name: "Bata Antifluidos Blanca",
    price: 95000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Antifluidos+Blanca",
    description: "Color blanco, tela suave",
    bordadoEspalda: 100000,
  },
  {
    id: 9,
    name: "Bata Antifluidos Negra",
    price: 95000,
    image: "/placeholder.svg?height=600&width=500&text=Bata+Antifluidos+Negra",
    description: "Color negro, tela suave",
    bordadoEspalda: 100000,
  },
]

// Datos actualizados para estrapleras y accesorios
const estraplerasProducts = [
  {
    id: 1,
    name: "Estraplera Microfibra Blanca",
    price: 50000,
    image: "/placeholder.svg?height=600&width=500&text=Estraplera+Microfibra+Blanca",
    description: "Color blanca, detalle sesgo satinado en los orillos",
  },
  {
    id: 2,
    name: "Estraplera Microfibra Gris",
    price: 55000,
    image: "/placeholder.svg?height=600&width=500&text=Estraplera+Microfibra+Gris",
    description: "Color gris",
  },
  {
    id: 3,
    name: "Estraplera en Seda Blanca",
    price: 55000,
    image: "/placeholder.svg?height=600&width=500&text=Estraplera+Seda+Blanca",
    description: "Color blanco",
  },
  {
    id: 4,
    name: "Estraplera en Seda Negra",
    price: 55000,
    image: "/placeholder.svg?height=600&width=500&text=Estraplera+Seda+Negra",
    description: "Color negro",
  },
  {
    id: 5,
    name: "Estraplera Antifluidos Blanca",
    price: 60000,
    image: "/placeholder.svg?height=600&width=500&text=Estraplera+Antifluidos+Blanca",
    description: "Color blanco",
  },
  {
    id: 6,
    name: "Estraplera Antifluidos Negra",
    price: 60000,
    image: "/placeholder.svg?height=600&width=500&text=Estraplera+Antifluidos+Negra",
    description: "Color negro",
  },
]

// Datos para accesorios
const accesoriosProducts = [
  {
    id: 1,
    name: "Balaca Microfibra Blanca",
    price: 16000,
    image: "/placeholder.svg?height=600&width=500&text=Balaca+Microfibra+Blanca",
    description: "Color blanco con sesgos",
  },
  {
    id: 2,
    name: "Balaca Microfibra Gris",
    price: 16000,
    image: "/placeholder.svg?height=600&width=500&text=Balaca+Microfibra+Gris",
    description: "Color gris",
  },
  {
    id: 3,
    name: "Balaca en Seda",
    price: 20000,
    image: "/placeholder.svg?height=600&width=500&text=Balaca+Seda",
    description: "Disponible en blanco, negro, azul, beige y rosado",
  },
  {
    id: 4,
    name: "Balaca Antifluidos",
    price: 20000,
    image: "/placeholder.svg?height=600&width=500&text=Balaca+Antifluidos",
    description: "Disponible en blanco, negro y gris",
  },
  {
    id: 5,
    name: "Turbante Microfibra Blanco",
    price: 24000,
    image: "/placeholder.svg?height=600&width=500&text=Turbante+Microfibra+Blanco",
    description: "Color blanco con sesgos",
  },
  {
    id: 6,
    name: "Turbante Microfibra Gris",
    price: 24000,
    image: "/placeholder.svg?height=600&width=500&text=Turbante+Microfibra+Gris",
    description: "Color gris",
  },
]

// Datos para toallas y cobijas
const toallasProducts = [
  {
    id: 1,
    name: "Toalla Blanca 40x60",
    price: 22000,
    image: "/placeholder.svg?height=600&width=500&text=Toalla+Blanca+40x60",
    description: "Toalla blanca, tamaño 40x60cm",
  },
  {
    id: 2,
    name: "Toalla Blanca 70x130",
    price: 48000,
    image: "/placeholder.svg?height=600&width=500&text=Toalla+Blanca+70x130",
    description: "Toalla blanca, tamaño 70x130cm",
  },
  {
    id: 3,
    name: "Toalla Blanca 90x180",
    price: 60000,
    image: "/placeholder.svg?height=600&width=500&text=Toalla+Blanca+90x180",
    description: "Toalla blanca, tamaño 90x180cm",
  },
  {
    id: 4,
    name: "Toalla Cannon 40x60",
    price: 24000,
    image: "/placeholder.svg?height=600&width=500&text=Toalla+Cannon+40x60",
    description: "Toalla Cannon 460g, tamaño 40x60cm",
  },
  {
    id: 5,
    name: "Toalla Cannon 70x130",
    price: 53000,
    image: "/placeholder.svg?height=600&width=500&text=Toalla+Cannon+70x130",
    description: "Toalla Cannon 460g, tamaño 70x130cm",
  },
  {
    id: 6,
    name: "Cobija Piel de Conejo",
    price: 60000,
    image: "/placeholder.svg?height=600&width=500&text=Cobija+Piel+de+Conejo",
    description: "Disponible en blanco, negro y gris. Tamaño para camilla 180x130cm",
  },
]

interface ProductGridProps {
  category: "batas" | "estrapleras" | "accesorios" | "toallas" | "bordados"
}

type GridProduct = {
  id: number
  name: string
  price: number
  image: string
  description: string
  bordadoEspalda?: number
}

export default function ProductGrid({ category }: ProductGridProps) {
  let products: GridProduct[] = batasProducts

  switch (category) {
    case "batas":
      products = batasProducts
      break
    case "estrapleras":
      products = estraplerasProducts
      break
    case "accesorios":
      products = accesoriosProducts
      break
    case "toallas":
      products = toallasProducts
      break
    case "bordados":
      // Para la sección de bordados, mostramos una selección de productos
      products = [...batasProducts.slice(0, 3), ...estraplerasProducts.slice(0, 3)]
      break
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-square overflow-hidden rounded-sm bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={600}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <Button size="icon" variant="ghost" className="rounded-full bg-white/80 hover:bg-white">
                <HeartIcon className="h-5 w-5" />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>
          </div>
          <div className="mt-3">
            <Link href={`/product/${product.id}?category=${category}`}>
              <h3 className="text-sm font-medium">{product.name}</h3>
            </Link>
            <p className="mt-1 text-sm text-dark-gray">${product.price.toLocaleString("es-CO")}</p>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{product.description}</p>
            <Button className="mt-3 w-full bg-primary hover:bg-primary/90 text-white text-sm h-9">
              Añadir al Carrito
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
