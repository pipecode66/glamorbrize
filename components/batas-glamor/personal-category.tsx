import { Button } from "@/components/ui/button"
import ProductDisplay from "@/components/product-display"

export default function PersonalCategory() {
  const products = [
    {
      id: 1,
      name: "Bata de baño microfibra blanca",
      price: 85000,
      description:
        "Bata de baño en microfibra de alta calidad, ideal para uso personal en spa, salón de belleza o en casa. Suave al tacto y altamente absorbente.",
      images: [
        "/images/bata-microfibra-blanca.webp",
        "/placeholder.svg?height=600&width=500&text=Bata+Microfibra+2",
        "/placeholder.svg?height=600&width=500&text=Bata+Microfibra+3",
      ],
      specs: [
        { name: "Material", value: "Microfibra de alta resistencia" },
        { name: "Peso", value: "202 g" },
        { name: "Detalle", value: "Sesgo satinado en los orillos" },
        { name: "Bordado delantero", value: "$85.000" },
        { name: "Bordado espalda", value: "$90.000" },
      ],
      features: [
        "Suave y confortable al tacto",
        "Alta capacidad de absorción",
        "Secado rápido",
        "Detalles satinados en los bordes",
        "Personalizable con bordado",
      ],
      colors: ["Blanca", "Perla", "Gris"],
      sizes: ["M", "L"],
    },
    {
      id: 2,
      name: "Estraplera microfibra blanca",
      price: 50000,
      description:
        "Estraplera en microfibra de alta calidad, perfecta para uso después del baño o durante tratamientos de spa y belleza. Diseño cómodo y funcional.",
      images: [
        "/images/estraplera-microfibra-blanca.webp",
        "/placeholder.svg?height=600&width=500&text=Estraplera+2",
        "/placeholder.svg?height=600&width=500&text=Estraplera+3",
      ],
      specs: [
        { name: "Material", value: "Microfibra de alta resistencia" },
        { name: "Detalle", value: "Sesgo satinado en los orillos" },
        { name: "Precio con bordado", value: "$50.000" },
      ],
      features: [
        "Diseño ajustable con velcro",
        "Suave y confortable",
        "Ideal para tratamientos faciales",
        "Personalizable con bordado",
      ],
      colors: ["Blanca", "Perla", "Gris"],
      sizes: ["Única"],
    },
    {
      id: 3,
      name: "Turbante microfibra blanco",
      price: 25000,
      description:
        "Turbante en microfibra de alta calidad, ideal para secar el cabello después del baño o durante tratamientos capilares. Práctico y cómodo.",
      images: [
        "/images/turbante-microfibra.webp",
        "/placeholder.svg?height=600&width=500&text=Turbante+2",
        "/placeholder.svg?height=600&width=500&text=Turbante+3",
      ],
      specs: [
        { name: "Material", value: "Microfibra de alta resistencia" },
        { name: "Color", value: "Blanco con sesgos" },
        { name: "Precio", value: "$25.000" },
      ],
      features: ["Diseño ajustable", "Alta capacidad de absorción", "Secado rápido", "Ligero y cómodo"],
      colors: ["Blanco con sesgos", "Gris", "Perla"],
      sizes: ["Única"],
    },
  ]

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-eagers text-center mb-8">Productos para uso personal</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Nuestra línea personal incluye batas y accesorios diseñados para brindar confort y elegancia en tu hogar o
          durante tratamientos de belleza y bienestar.
        </p>
      </div>

      {products.map((product) => (
        <div key={product.id} className="mb-16 pb-16 border-b">
          <ProductDisplay {...product} />
        </div>
      ))}

      <div className="bg-accent/10 p-8 rounded-md">
        <h3 className="text-xl font-medium mb-4 text-center">Sets personalizados</h3>
        <p className="text-center mb-6">
          Crea tu propio set personalizado combinando nuestros productos. Añade tu nombre o iniciales con nuestro
          servicio de bordado exclusivo.
        </p>
        <div className="flex justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-white">Crear set personalizado</Button>
        </div>
      </div>
    </div>
  )
}
