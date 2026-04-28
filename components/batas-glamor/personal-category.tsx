import { Button } from "@/components/ui/button"
import ProductDisplay from "@/components/product-display"

export default function PersonalCategory() {
  // Productos para la categoría Personal
  const products = [
    {
      id: 1,
      name: "Bata de Baño Microfibra Blanca",
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
      colors: ["Blanco", "Gris"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Estraplera Microfibra Blanca",
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
      colors: ["Blanco", "Gris"],
      sizes: ["Única"],
    },
    {
      id: 3,
      name: "Toalla Blanca 70x130",
      price: 48000,
      description:
        "Toalla de alta calidad, suave y absorbente, ideal para uso en spa, salón de belleza o en casa. Perfecta para complementar tu experiencia de bienestar.",
      images: [
        "/images/toallas.webp",
        "/placeholder.svg?height=600&width=500&text=Toalla+2",
        "/placeholder.svg?height=600&width=500&text=Toalla+3",
      ],
      specs: [
        { name: "Material", value: "Algodón 100%" },
        { name: "Tamaño", value: "70x130 cm" },
        { name: "Gramaje", value: "450 g/m²" },
      ],
      features: [
        "Alta capacidad de absorción",
        "Suave al tacto",
        "Durable y resistente",
        "Fácil de lavar",
        "Personalizable con bordado",
      ],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 4,
      name: "Turbante Microfibra Blanco",
      price: 24000,
      description:
        "Turbante en microfibra de alta calidad, ideal para secar el cabello después del baño o durante tratamientos capilares. Práctico y cómodo.",
      images: [
        "/images/turbante-microfibra.webp",
        "/placeholder.svg?height=600&width=500&text=Turbante+2",
        "/placeholder.svg?height=600&width=500&text=Turbante+3",
      ],
      specs: [
        { name: "Material", value: "Microfibra de alta resistencia" },
        { name: "Color", value: "Blanco (Con sesgos)" },
        { name: "Precio", value: "$24.000" },
      ],
      features: ["Diseño ajustable", "Alta capacidad de absorción", "Secado rápido", "Ligero y cómodo"],
      colors: ["Blanco", "Gris"],
      sizes: ["Única"],
    },
    {
      id: 5,
      name: "Toalla Blanca 40x60",
      price: 22000,
      description: "Toalla blanca para cabina, spa o uso profesional. Tamaño 40x60 cm.",
      images: ["/images/toallas.png"],
      specs: [
        { name: "Color", value: "Blanco" },
        { name: "Tamaño", value: "40x60 cm" },
        { name: "Precio", value: "$22.000" },
      ],
      features: ["Suave al tacto", "Alta absorción", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 6,
      name: "Toalla Blanca 90x180",
      price: 60000,
      description: "Toalla blanca grande para camilla o tratamientos corporales. Tamaño 90x180 cm.",
      images: ["/images/toallas.png"],
      specs: [
        { name: "Color", value: "Blanco" },
        { name: "Tamaño", value: "90x180 cm" },
        { name: "Precio", value: "$60.000" },
      ],
      features: ["Formato grande", "Alta absorción", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 7,
      name: "Toalla Negra 40x60",
      price: 24000,
      description: "Toalla negra para uso profesional en cabina o spa. Tamaño 40x60 cm.",
      images: ["/images/toallas.png"],
      specs: [
        { name: "Color", value: "Negro" },
        { name: "Tamaño", value: "40x60 cm" },
        { name: "Precio", value: "$24.000" },
      ],
      features: ["Color profesional", "Alta absorción", "Personalizable con bordado"],
      colors: ["Negro"],
      sizes: ["Única"],
    },
    {
      id: 8,
      name: "Toalla Negra 50x100",
      price: 37000,
      description: "Toalla negra mediana para tratamientos y cabina. Tamaño 50x100 cm.",
      images: ["/images/toallas.png"],
      specs: [
        { name: "Color", value: "Negro" },
        { name: "Tamaño", value: "50x100 cm" },
        { name: "Precio", value: "$37.000" },
      ],
      features: ["Formato mediano", "Alta absorción", "Personalizable con bordado"],
      colors: ["Negro"],
      sizes: ["Única"],
    },
    {
      id: 9,
      name: "Toalla Cannon 460g 40x60",
      price: 28000,
      description: "Toalla Cannon de 460 g para uso profesional. Tamaño 40x60 cm.",
      images: ["/images/toallas.png"],
      specs: [
        { name: "Gramaje", value: "460 g" },
        { name: "Tamaño", value: "40x60 cm" },
        { name: "Precio", value: "$28.000" },
      ],
      features: ["Toalla Cannon", "Mayor gramaje", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 10,
      name: "Toalla Cannon 460g 70x130",
      price: 60000,
      description: "Toalla Cannon de 460 g para uso profesional. Tamaño 70x130 cm.",
      images: ["/images/toallas.png"],
      specs: [
        { name: "Gramaje", value: "460 g" },
        { name: "Tamaño", value: "70x130 cm" },
        { name: "Precio", value: "$60.000" },
      ],
      features: ["Toalla Cannon", "Mayor gramaje", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 11,
      name: "Kit Flannel 1 - Fundas",
      price: 70000,
      description: "Kit de tela flannel para camilla. Incluye 2 fundas de 45x65 cm.",
      images: ["/images/cobijas-piel-conejo.png"],
      specs: [
        { name: "Material", value: "Tela flannel 250g" },
        { name: "Incluye", value: "2 fundas de 45x65 cm" },
        { name: "Colores", value: "Gris oscuro y beige" },
        { name: "Precio", value: "$70.000" },
      ],
      features: ["Tela suave", "Set para camilla", "Disponible en gris oscuro y beige"],
      colors: ["Gris oscuro", "Beige"],
      sizes: ["Única"],
    },
    {
      id: 12,
      name: "Kit Flannel 2 - Cobija + Funda",
      price: 120000,
      description: "Kit de cobija para camilla en tela flannel con funda incluida.",
      images: ["/images/cobijas-piel-conejo.png"],
      specs: [
        { name: "Material", value: "Tela flannel 250g" },
        { name: "Incluye", value: "Cobija 1,80x1,35 m + 1 funda 45x65 cm" },
        { name: "Colores", value: "Gris oscuro y beige" },
        { name: "Precio", value: "$120.000" },
      ],
      features: ["Kit para camilla", "Tela suave", "Disponible en gris oscuro y beige"],
      colors: ["Gris oscuro", "Beige"],
      sizes: ["Única"],
    },
    {
      id: 13,
      name: "Kit Flannel 3 - Cobija + 2 Fundas",
      price: 160000,
      description: "Kit completo de cobija para camilla en tela flannel con 2 fundas.",
      images: ["/images/cobijas-piel-conejo.png"],
      specs: [
        { name: "Material", value: "Tela flannel 250g" },
        { name: "Incluye", value: "Cobija 1,60x1,80 m + 2 fundas 45x65 cm" },
        { name: "Colores", value: "Gris oscuro y beige" },
        { name: "Precio", value: "$160.000" },
      ],
      features: ["Kit completo para camilla", "Tela suave", "Disponible en gris oscuro y beige"],
      colors: ["Gris oscuro", "Beige"],
      sizes: ["Única"],
    },
  ]

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-eagers text-center mb-8">Productos para Uso Personal</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Nuestra línea personal incluye batas, estrapleras, toallas y accesorios diseñados para brindar confort y
          elegancia en tu hogar o durante tus tratamientos de belleza y bienestar.
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
        <h3 className="text-xl font-medium mb-4 text-center">Sets Personalizados</h3>
        <p className="text-center mb-6">
          Crea tu propio set personalizado combinando nuestros productos. Añade tu nombre o iniciales con nuestro
          servicio de bordado exclusivo.
        </p>
        <div className="flex justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-white">Crear Set Personalizado</Button>
        </div>
      </div>
    </div>
  )
}
