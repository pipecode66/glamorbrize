import { Button } from "@/components/ui/button"
import ProductDisplay from "@/components/product-display"

export default function PreNupcialCategory() {
  // Productos para la categoría Prenupcial
  const products = [
    {
      id: 1,
      name: "Bata en Seda Blanca Prenupcial",
      price: 95000,
      description:
        "Bata en seda de alta calidad, diseñada especialmente para la novia y sus damas de honor. El complemento perfecto para los preparativos de tu día especial.",
      images: [
        "/images/batas-seda.webp",
        "/placeholder.svg?height=600&width=500&text=Bata+Seda+Prenupcial+2",
        "/placeholder.svg?height=600&width=500&text=Bata+Seda+Prenupcial+3",
      ],
      specs: [
        { name: "Material", value: "Seda premium" },
        { name: "Colores disponibles", value: "Blanco, Rosado, Beige, Azul" },
        { name: "Bordado delantero", value: "$95.000" },
        { name: "Bordado espalda", value: "$100.000" },
      ],
      features: [
        "Diseño elegante y sofisticado",
        "Suave y delicada al tacto",
        "Personalizable con nombres o iniciales",
        "Ideal para sesiones fotográficas",
        "Empaque especial para regalo",
      ],
      colors: ["Blanco", "Rosado", "Beige", "Azul"],
      sizes: ["M", "L"],
    },
    {
      id: 2,
      name: "Set Prenupcial Completo",
      price: 180000,
      description:
        "Set completo que incluye bata en seda, estraplera y turbante a juego. El conjunto perfecto para prepararte en tu día especial con elegancia y comodidad.",
      images: [
        "/placeholder.svg?height=600&width=500&text=Set+Prenupcial+1",
        "/placeholder.svg?height=600&width=500&text=Set+Prenupcial+2",
        "/placeholder.svg?height=600&width=500&text=Set+Prenupcial+3",
      ],
      specs: [
        { name: "Incluye", value: "Bata en seda, estraplera y turbante" },
        { name: "Material", value: "Seda premium" },
        { name: "Colores disponibles", value: "Blanco, Rosado, Beige, Azul" },
        { name: "Bordado personalizado", value: "Incluido en el precio" },
      ],
      features: [
        "Diseño coordinado para un look completo",
        "Personalizable con nombres, iniciales o fecha",
        "Presentación en caja de regalo",
        "Ideal para sesiones fotográficas",
        "Descuentos disponibles para pedidos múltiples",
      ],
      colors: ["Blanco", "Rosado", "Beige", "Azul"],
      sizes: ["M", "L"],
    },
    {
      id: 3,
      name: "Set Damas de Honor (4 Batas)",
      price: 340000,
      description:
        "Conjunto de 4 batas en seda para las damas de honor, personalizables con nombres o iniciales. Un detalle perfecto para agradecer a tus amigas más cercanas.",
      images: [
        "/placeholder.svg?height=600&width=500&text=Set+Damas+1",
        "/placeholder.svg?height=600&width=500&text=Set+Damas+2",
        "/placeholder.svg?height=600&width=500&text=Set+Damas+3",
      ],
      specs: [
        { name: "Incluye", value: "4 batas en seda" },
        { name: "Material", value: "Seda premium" },
        { name: "Colores disponibles", value: "Blanco, Rosado, Beige, Azul" },
        { name: "Bordado personalizado", value: "Incluido en el precio" },
      ],
      features: [
        "Personalización con nombres o iniciales",
        "Mismo color o colores variados a elección",
        "Presentación en cajas de regalo individuales",
        "Ideal para sesiones fotográficas grupales",
        "Descuento especial por compra del set",
      ],
      colors: ["Blanco", "Rosado", "Beige", "Azul"],
      sizes: ["M", "L"],
    },
  ]

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-eagers text-center mb-8">Colección Prenupcial</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Nuestra colección prenupcial está diseñada para hacer de tu día especial un momento inolvidable. Batas y
          accesorios elegantes para la novia y sus damas de honor, perfectos para los preparativos y sesiones
          fotográficas.
        </p>
      </div>

      {/* Mostrar productos */}
      {products.map((product) => (
        <div key={product.id} className="mb-16 pb-16 border-b">
          <ProductDisplay {...product} />
        </div>
      ))}

      {/* Información adicional */}
      <div className="bg-accent/10 p-8 rounded-md">
        <h3 className="text-xl font-medium mb-4 text-center">Personalización Prenupcial</h3>
        <p className="text-center mb-6">
          Hacemos de tu día especial un momento único con nuestras batas personalizadas. Podemos bordar nombres,
          iniciales, fechas o frases especiales. Consulta por nuestros paquetes para novias y damas de honor.
        </p>
        <div className="flex justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-white">Solicitar Información</Button>
        </div>
      </div>
    </div>
  )
}
