"use client"

import Image from "next/image"
import Link from "next/link"
import { HeartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const batasProducts = [
  {
    id: 1,
    name: "Bata de baño microfibra blanca",
    price: 85000,
    image: "/images/bata-microfibra-blanca.png",
    description: "Blanca con sesgos satinados en los orillos. Bordado espalda: $90.000.",
    bordadoEspalda: 90000,
  },
  {
    id: 2,
    name: "Bata de baño microfibra perla",
    price: 90000,
    image: "/images/microfibra/3.png",
    description: "Color perla. Bordado espalda: $95.000.",
    bordadoEspalda: 95000,
  },
  {
    id: 3,
    name: "Bata de baño microfibra gris",
    price: 90000,
    image: "/images/bata-microfibra-gris.png",
    description: "Color gris. Bordado espalda: $95.000.",
    bordadoEspalda: 95000,
  },
  {
    id: 4,
    name: "Bata en seda blanca",
    price: 85000,
    image: "/images/seda/12.png",
    description: "Bata en seda con bordado delantero. Bordado espalda: $90.000.",
    bordadoEspalda: 90000,
  },
  {
    id: 5,
    name: "Bata en seda negra",
    price: 85000,
    image: "/images/seda/15.png",
    description: "Bata en seda con bordado delantero. Bordado espalda: $90.000.",
    bordadoEspalda: 90000,
  },
  {
    id: 6,
    name: "Bata en seda azul",
    price: 85000,
    image: "/images/batas-seda.png",
    description: "Bata en seda con bordado delantero. Bordado espalda: $90.000.",
    bordadoEspalda: 90000,
  },
  {
    id: 7,
    name: "Bata en seda beige",
    price: 85000,
    image: "/images/seda/13.png",
    description: "Bata en seda con bordado delantero. Bordado espalda: $90.000.",
    bordadoEspalda: 90000,
  },
  {
    id: 8,
    name: "Bata en seda rosada",
    price: 85000,
    image: "/images/seda/14.png",
    description: "Bata en seda con bordado delantero. Bordado espalda: $90.000.",
    bordadoEspalda: 90000,
  },
  {
    id: 9,
    name: "Bata antifluidos blanca",
    price: 95000,
    image: "/images/antifluido/16.png",
    description: "Bordado delantero: $95.000. Bordado espalda: $100.000.",
    bordadoEspalda: 100000,
  },
  {
    id: 10,
    name: "Bata antifluidos negra",
    price: 95000,
    image: "/images/antifluido/16.png",
    description: "Bordado delantero: $95.000. Bordado espalda: $100.000.",
    bordadoEspalda: 100000,
  },
]

const estraplerasProducts = [
  {
    id: 1,
    name: "Estraplera microfibra blanca",
    price: 50000,
    image: "/images/estraplera-microfibra-blanca.png",
    description: "Blanca con bordado.",
  },
  {
    id: 2,
    name: "Estraplera microfibra perla",
    price: 55000,
    image: "/images/microfibra/4.png",
    description: "Color perla con bordado.",
  },
  {
    id: 3,
    name: "Estraplera microfibra gris",
    price: 55000,
    image: "/images/estraplera-microfibra-gris.png",
    description: "Color gris con bordado.",
  },
  {
    id: 4,
    name: "Estraplera en seda",
    price: 55000,
    image: "/images/seda/15.png",
    description: "Disponible en blanco, negro, azul, beige y rosado.",
  },
  {
    id: 5,
    name: "Estraplera antifluidos",
    price: 60000,
    image: "/images/antifluido/17.png",
    description: "Disponible en blanco, negro y gris.",
  },
]

const accesoriosProducts = [
  {
    id: 1,
    name: "Balaca microfibra",
    price: 16000,
    image: "/images/balaca-microfibra.png",
    description: "Disponible en blanco con sesgos, gris y perla.",
  },
  {
    id: 2,
    name: "Babero microfibra",
    price: 25000,
    image: "/images/babero-microfibra.png",
    description: "Disponible en blanco con sesgos, gris y perla.",
  },
  {
    id: 3,
    name: "Turbante microfibra",
    price: 25000,
    image: "/images/turbante-microfibra.png",
    description: "Disponible en blanco con sesgos, gris y perla.",
  },
  {
    id: 4,
    name: "Balaca en seda",
    price: 20000,
    image: "/images/balaca-seda.png",
    description: "Disponible en blanco, negro, azul, beige y rosado.",
  },
  {
    id: 5,
    name: "Balaca antifluidos",
    price: 20000,
    image: "/images/balaca-antifluido.png",
    description: "Disponible en blanco, negro y gris.",
  },
  {
    id: 6,
    name: "Babero antifluidos",
    price: 38000,
    image: "/images/babero-antifluido.png",
    description: "Disponible en blanco, negro y gris.",
  },
]

const toallasProducts = [
  {
    id: 1,
    name: "Toalla blanca 40x60",
    price: 22000,
    image: "/images/toallas-blancas.png",
    description: "Toalla blanca, presentación 40x60.",
  },
  {
    id: 2,
    name: "Toalla blanca 70x1,30",
    price: 48000,
    image: "/images/toallas-blancas.png",
    description: "Toalla blanca, presentación 70x1,30.",
  },
  {
    id: 3,
    name: "Toalla blanca 90x1,80",
    price: 60000,
    image: "/images/toallas-blancas.png",
    description: "Toalla blanca, presentación 90x1,80.",
  },
  {
    id: 4,
    name: "Toalla negra 40x60",
    price: 24000,
    image: "/images/toallas-blancas.png",
    description: "Toalla negra, presentación 40x60.",
  },
  {
    id: 5,
    name: "Toalla negra 50x100",
    price: 37000,
    image: "/images/toallas-blancas.png",
    description: "Toalla negra, presentación 50x100.",
  },
  {
    id: 6,
    name: "Toalla Cannon 460 g 40x60",
    price: 28000,
    image: "/images/toallas-cannon.png",
    description: "Toalla Cannon 460 g, presentación 40x60.",
  },
  {
    id: 7,
    name: "Toalla Cannon 460 g 70x1,30",
    price: 60000,
    image: "/images/toallas-cannon.png",
    description: "Toalla Cannon 460 g, presentación 70x1,30.",
  },
  {
    id: 8,
    name: "Kit 1 tela flannel",
    price: 70000,
    image: "/images/kit-cobijas-fundas-flannel.png",
    description: "2 fundas de 45x65.",
  },
  {
    id: 9,
    name: "Kit 2 tela flannel",
    price: 120000,
    image: "/images/kit-cobijas-fundas-flannel.png",
    description: "Cobija para camilla de 1,80 x 1,35 + 1 funda de 45x65.",
  },
  {
    id: 10,
    name: "Kit 3 tela flannel",
    price: 160000,
    image: "/images/kit-cobijas-fundas-flannel.png",
    description: "Cobija para camilla de 1,60 x 1,80 + 2 fundas de 45x65.",
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
                <span className="sr-only">Agregar a favoritos</span>
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
              Añadir al carrito
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
