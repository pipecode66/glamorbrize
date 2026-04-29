import ProductDisplay from "@/components/product-display"

export default function ToallasCobijasCategory() {
  const products = [
    {
      id: 1,
      name: "Toalla Blanca 40x60",
      price: 22000,
      description: "Toalla blanca para cabina, spa o uso profesional. Tamano 40x60 cm.",
      images: ["/images/toallas-blancas.png"],
      specs: [
        { name: "Color", value: "Blanco" },
        { name: "Tamano", value: "40x60 cm" },
        { name: "Precio", value: "$22.000" },
      ],
      features: ["Suave al tacto", "Alta absorcion", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 2,
      name: "Toalla Blanca 70x130",
      price: 48000,
      description: "Toalla blanca para tratamientos, spa o uso en cabina. Tamano 70x130 cm.",
      images: ["/images/toallas-blancas.png"],
      specs: [
        { name: "Color", value: "Blanco" },
        { name: "Tamano", value: "70x130 cm" },
        { name: "Precio", value: "$48.000" },
      ],
      features: ["Alta capacidad de absorcion", "Suave al tacto", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 3,
      name: "Toalla Blanca 90x180",
      price: 60000,
      description: "Toalla blanca grande para camilla o tratamientos corporales. Tamano 90x180 cm.",
      images: ["/images/toallas-blancas.png"],
      specs: [
        { name: "Color", value: "Blanco" },
        { name: "Tamano", value: "90x180 cm" },
        { name: "Precio", value: "$60.000" },
      ],
      features: ["Formato grande", "Alta absorcion", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 4,
      name: "Toalla Negra 40x60",
      price: 24000,
      description: "Toalla negra para uso profesional en cabina o spa. Tamano 40x60 cm.",
      images: ["/images/toallas.png"],
      specs: [
        { name: "Color", value: "Negro" },
        { name: "Tamano", value: "40x60 cm" },
        { name: "Precio", value: "$24.000" },
      ],
      features: ["Color profesional", "Alta absorcion", "Personalizable con bordado"],
      colors: ["Negro"],
      sizes: ["Única"],
    },
    {
      id: 5,
      name: "Toalla Negra 50x100",
      price: 37000,
      description: "Toalla negra mediana para tratamientos y cabina. Tamano 50x100 cm.",
      images: ["/images/toallas.png"],
      specs: [
        { name: "Color", value: "Negro" },
        { name: "Tamano", value: "50x100 cm" },
        { name: "Precio", value: "$37.000" },
      ],
      features: ["Formato mediano", "Alta absorcion", "Personalizable con bordado"],
      colors: ["Negro"],
      sizes: ["Única"],
    },
    {
      id: 6,
      name: "Toalla Cannon 460g 40x60",
      price: 28000,
      description: "Toalla Cannon de 460 g para uso profesional. Tamano 40x60 cm.",
      images: ["/images/toallas-cannon.png"],
      specs: [
        { name: "Gramaje", value: "460 g" },
        { name: "Tamano", value: "40x60 cm" },
        { name: "Precio", value: "$28.000" },
      ],
      features: ["Toalla Cannon", "Mayor gramaje", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 7,
      name: "Toalla Cannon 460g 70x130",
      price: 60000,
      description: "Toalla Cannon de 460 g para uso profesional. Tamano 70x130 cm.",
      images: ["/images/toallas-cannon.png"],
      specs: [
        { name: "Gramaje", value: "460 g" },
        { name: "Tamano", value: "70x130 cm" },
        { name: "Precio", value: "$60.000" },
      ],
      features: ["Toalla Cannon", "Mayor gramaje", "Personalizable con bordado"],
      colors: ["Blanco"],
      sizes: ["Única"],
    },
    {
      id: 8,
      name: "Kit Flannel 1 - Fundas",
      price: 70000,
      description: "Kit de tela flannel para camilla. Incluye 2 fundas de 45x65 cm.",
      images: ["/images/kit-cobijas-fundas-flannel.png"],
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
      id: 9,
      name: "Kit Flannel 2 - Cobija + Funda",
      price: 120000,
      description: "Kit de cobija para camilla en tela flannel con funda incluida.",
      images: ["/images/kit-cobijas-fundas-flannel.png"],
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
      id: 10,
      name: "Kit Flannel 3 - Cobija + 2 Fundas",
      price: 160000,
      description: "Kit completo de cobija para camilla en tela flannel con 2 fundas.",
      images: ["/images/kit-cobijas-fundas-flannel.png"],
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
        <h2 className="text-3xl font-eagers text-center mb-8">Toallas y Cobijas</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Toallas profesionales y kits de cobijas con fundas para cabina, camilla, spa y centros de bienestar.
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
