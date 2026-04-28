import { Button } from "@/components/ui/button"
import ProductDisplay from "@/components/product-display"

export default function EmpresarialCategory() {
  // Productos para la categoría Empresarial
  const products = [
    {
      id: 1,
      name: "Bata Antifluidos Blanca",
      price: 95000,
      description:
        "Bata antifluidos ideal para uso profesional en clínicas, spas y centros de estética. Diseñada con materiales de alta calidad que ofrecen protección y durabilidad.",
      images: [
      ],
      specs: [
        { name: "Material", value: "Tela antifluidos" },
        { name: "Colores disponibles", value: "Blanco, Negro, Gris" },
        { name: "Bordado delantero", value: "$95.000" },
        { name: "Bordado espalda", value: "$100.000" },
      ],
      features: [
        "Resistente a líquidos y fluidos",
        "Fácil de limpiar y desinfectar",
        "Diseño profesional y elegante",
        "Bolsillos frontales amplios",
        "Cierre con botones a presión",
      ],
      colors: ["Blanco", "Negro", "Gris"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Bata Médica Profesional",
      price: 105000,
      description:
        "Bata médica profesional diseñada específicamente para personal de salud. Confeccionada con materiales de alta calidad que garantizan comodidad durante largas jornadas.",
      images: [
      ],
      specs: [
        { name: "Material", value: "Tela antifluidos premium" },
        { name: "Colores disponibles", value: "Blanco" },
        { name: "Bordado delantero", value: "$105.000" },
        { name: "Bordado espalda", value: "$110.000" },
      ],
      features: [
        "Diseño ergonómico para mayor comodidad",
        "Bolsillos estratégicamente ubicados",
        "Manga larga con puño ajustable",
        "Resistente a manchas y fluidos",
        "Fácil mantenimiento y lavado",
      ],
      colors: ["Blanco"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: 3,
      name: "Kit Empresarial #1 - Microfibra",
      price: 230000,
      description: "Kit empresarial en microfibra para cabina o spa. Ideal para dotación con logo corporativo.",
      images: ["/images/microfibra/7.png"],
      specs: [
        { name: "Incluye", value: "2 estrapleras, 2 baberos y 2 balacas" },
        { name: "Material", value: "Microfibra" },
        { name: "Precio kit", value: "$230.000" },
      ],
      features: [
        "Disponible para pedidos empresariales",
        "Productos combinables por color",
        "Personalizable con bordado",
      ],
      colors: ["Blanco con orillos", "Gris", "Perla"],
      sizes: [],
    },
    {
      id: 4,
      name: "Kit Empresarial #2 - Microfibra",
      price: 252000,
      description: "Kit empresarial en microfibra con estrapleras y balacas para equipos de trabajo.",
      images: ["/images/microfibra/2.png"],
      specs: [
        { name: "Incluye", value: "3 estrapleras y 3 balacas" },
        { name: "Material", value: "Microfibra" },
        { name: "Precio kit", value: "$252.000" },
      ],
      features: [
        "Disponible para pedidos empresariales",
        "Productos combinables por color",
        "Personalizable con bordado",
      ],
      colors: ["Blanco con orillos", "Gris", "Perla"],
      sizes: [],
    },
    {
      id: 5,
      name: "Kit Empresarial #3 - Microfibra",
      price: 265000,
      description: "Kit completo en microfibra para equipos de estética y bienestar.",
      images: ["/images/microfibra/1.png"],
      specs: [
        { name: "Incluye", value: "1 bata, 1 estraplera, 2 balacas y 2 baberos" },
        { name: "Material", value: "Microfibra" },
        { name: "Precio kit", value: "$265.000" },
      ],
      features: [
        "Kit mixto de dotación",
        "Productos combinables por color",
        "Personalizable con bordado",
      ],
      colors: ["Blanco con orillos", "Gris", "Perla"],
      sizes: [],
    },
    {
      id: 6,
      name: "Kit Empresarial #4 - Antifluido",
      price: 280000,
      description: "Kit empresarial antifluido para equipos profesionales de cabina.",
      images: ["/images/antifluido/17.png"],
      specs: [
        { name: "Incluye", value: "3 estrapleras y 3 balacas" },
        { name: "Material", value: "Antifluido" },
        { name: "Precio kit", value: "$280.000" },
      ],
      features: [
        "Tela antifluido",
        "Disponible para pedidos empresariales",
        "Personalizable con bordado",
      ],
      colors: ["Blanco", "Negro", "Gris"],
      sizes: [],
    },
    {
      id: 7,
      name: "Kit Empresarial #5 - Antifluido",
      price: 390000,
      description: "Kit empresarial antifluido con batas, estrapleras y balacas.",
      images: ["/images/antifluido/21.png"],
      specs: [
        { name: "Incluye", value: "2 batas, 2 estrapleras y 2 balacas" },
        { name: "Material", value: "Antifluido" },
        { name: "Precio kit", value: "$390.000" },
      ],
      features: [
        "Kit mixto de dotación",
        "Tela antifluido",
        "Personalizable con bordado",
      ],
      colors: ["Blanco", "Negro", "Gris"],
      sizes: [],
    },
    {
      id: 8,
      name: "Kit Empresarial #6 - Antifluido",
      price: 385000,
      description: "Kit empresarial antifluido con batas y balacas para equipos profesionales.",
      images: ["/images/antifluido/16.png"],
      specs: [
        { name: "Incluye", value: "3 batas y 3 balacas" },
        { name: "Material", value: "Antifluido" },
        { name: "Precio kit", value: "$385.000" },
      ],
      features: [
        "Kit de dotación antifluido",
        "Disponible para pedidos empresariales",
        "Personalizable con bordado",
      ],
      colors: ["Blanco", "Negro", "Gris"],
      sizes: [],
    },
  ]

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-eagers text-center mb-8">Batas para Uso Empresarial</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Nuestra línea empresarial está diseñada para profesionales que buscan proyectar una imagen impecable en su
          entorno laboral. Confeccionadas con materiales de alta calidad y diseños funcionales que combinan elegancia y
          practicidad.
        </p>
      </div>

      {/* Mostrar productos */}
      {products.map((product) => (
        <div key={product.id} className="mb-16 pb-16 border-b">
          <ProductDisplay {...product} />
        </div>
      ))}

      {/* Información adicional */}
      
    </div>
  )
}
