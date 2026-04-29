import ProductDisplay from "@/components/product-display"

export default function EmpresarialCategory() {
  const products = [
    {
      id: 1,
      name: "Bata Antifluidos Blanca",
      price: 95000,
      description:
        "Bata antifluidos ideal para uso profesional en clinicas, spas y centros de estetica. Disenada con materiales de alta calidad que ofrecen proteccion y durabilidad.",
      images: ["/images/bata-medica-antifluido.png"],
      specs: [
        { name: "Material", value: "Tela antifluidos" },
        { name: "Colores disponibles", value: "Blanco, Negro, Gris" },
        { name: "Bordado delantero", value: "$95.000" },
        { name: "Bordado espalda", value: "$100.000" },
      ],
      features: [
        "Resistente a liquidos y fluidos",
        "Facil de limpiar y desinfectar",
        "Diseno profesional y elegante",
        "Bolsillos frontales amplios",
        "Cierre con botones a presion",
      ],
      colors: ["Blanco", "Negro", "Gris"],
      sizes: ["M", "L"],
    },
    {
      id: 2,
      name: "Bata Medica Profesional",
      price: 105000,
      description:
        "Bata medica profesional disenada especificamente para personal de salud. Confeccionada con materiales de alta calidad que garantizan comodidad durante largas jornadas.",
      images: ["/images/uniformes-g-batas-medicas-banner.png"],
      specs: [
        { name: "Material", value: "Tela antifluidos premium" },
        { name: "Colores disponibles", value: "Blanco" },
        { name: "Bordado delantero", value: "$105.000" },
        { name: "Bordado espalda", value: "$110.000" },
      ],
      features: [
        "Diseno ergonomico para mayor comodidad",
        "Bolsillos estrategicamente ubicados",
        "Manga larga con puno ajustable",
        "Resistente a manchas y fluidos",
        "Facil mantenimiento y lavado",
      ],
      colors: ["Blanco"],
      sizes: ["M", "L"],
    },
  ]

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-eagers text-center mb-8">Batas para Uso Empresarial</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Nuestra linea empresarial esta disenada para profesionales que buscan proyectar una imagen impecable en su
          entorno laboral. Para kits completos, revisa la categoria Kits Empresariales.
        </p>
      </div>

      {products.map((product) => (
        <div key={product.id} className="mb-16 pb-16 border-b">
          <ProductDisplay {...product} />
        </div>
      ))}
    </div>
  )
}
