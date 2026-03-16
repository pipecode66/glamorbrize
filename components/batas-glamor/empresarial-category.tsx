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
