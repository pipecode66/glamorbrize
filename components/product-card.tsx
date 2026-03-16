import Image from "next/image"
import Link from "next/link"
import { HeartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-sm bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
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
        <Link href={`/product/${slug}`}>
          <h3 className="text-sm font-medium">{name}</h3>
        </Link>
        <p className="mt-1 text-sm text-dark-gray">${price.toLocaleString("es-CO")}</p>
        {description && <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{description}</p>}
        <Button className="mt-3 w-full bg-primary hover:bg-primary/90 text-white text-sm h-9">Añadir al Carrito</Button>
      </div>
    </div>
  )
}
