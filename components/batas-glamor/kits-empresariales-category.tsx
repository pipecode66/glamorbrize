import ProductDisplay from "@/components/product-display"

export default function KitsEmpresarialesCategory() {
  const products = [
    {
      id: 1,
      name: "Kit Empresarial #1 - Microfibra",
      price: 230000,
      description: "Kit empresarial en microfibra para cabina o spa. Ideal para dotacion con logo corporativo.",
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
      id: 2,
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
      id: 3,
      name: "Kit Empresarial #3 - Microfibra",
      price: 265000,
      description: "Kit completo en microfibra para equipos de estetica y bienestar.",
      images: ["/images/microfibra/1.png"],
      specs: [
        { name: "Incluye", value: "1 bata, 1 estraplera, 2 balacas y 2 baberos" },
        { name: "Material", value: "Microfibra" },
        { name: "Precio kit", value: "$265.000" },
      ],
      features: ["Kit mixto de dotacion", "Productos combinables por color", "Personalizable con bordado"],
      colors: ["Blanco con orillos", "Gris", "Perla"],
      sizes: [],
    },
    {
      id: 4,
      name: "Kit Empresarial #4 - Antifluido",
      price: 280000,
      description: "Kit empresarial antifluido para equipos profesionales de cabina.",
      images: ["/images/antifluido/17.png"],
      specs: [
        { name: "Incluye", value: "3 estrapleras y 3 balacas" },
        { name: "Material", value: "Antifluido" },
        { name: "Precio kit", value: "$280.000" },
      ],
      features: ["Tela antifluido", "Disponible para pedidos empresariales", "Personalizable con bordado"],
      colors: ["Blanco", "Negro", "Gris"],
      sizes: [],
    },
    {
      id: 5,
      name: "Kit Empresarial #5 - Antifluido",
      price: 390000,
      description: "Kit empresarial antifluido con batas, estrapleras y balacas.",
      images: ["/images/antifluido/21.png"],
      specs: [
        { name: "Incluye", value: "2 batas, 2 estrapleras y 2 balacas" },
        { name: "Material", value: "Antifluido" },
        { name: "Precio kit", value: "$390.000" },
      ],
      features: ["Kit mixto de dotacion", "Tela antifluido", "Personalizable con bordado"],
      colors: ["Blanco", "Negro", "Gris"],
      sizes: [],
    },
    {
      id: 6,
      name: "Kit Empresarial #6 - Antifluido",
      price: 385000,
      description: "Kit empresarial antifluido con batas y balacas para equipos profesionales.",
      images: ["/images/antifluido/16.png"],
      specs: [
        { name: "Incluye", value: "3 batas y 3 balacas" },
        { name: "Material", value: "Antifluido" },
        { name: "Precio kit", value: "$385.000" },
      ],
      features: ["Kit de dotacion antifluido", "Disponible para pedidos empresariales", "Personalizable con bordado"],
      colors: ["Blanco", "Negro", "Gris"],
      sizes: [],
    },
  ]

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-eagers text-center mb-8">Kits Empresariales</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Kits listos para dotacion empresarial en microfibra y antifluido, pensados para equipos de spa, estetica y
          bienestar que necesitan una presentacion uniforme y profesional.
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
