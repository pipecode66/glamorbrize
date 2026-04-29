"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductDisplay from "@/components/uniformes-g/product-display"

const batasGlamorColors = {
  primary: "#74A4AB",
  secondary: "#3E5860",
  accent: "#B5DEDA",
  accent2: "#C9D4D6",
  accent3: "#DBEDCB",
  darkGray: "#414444",
  lightGray: "#949A9C",
  white: "#FFFFFF",
  black: "#000000",
}

const toallaProduct = {
  id: 1,
  name: "TOALLA",
  basePrice: 22000,
  pricing: {
    "40x60": 22000,
    "70x1,30": 48000,
    "90x1,80": 60000,
  },
  variantPricing: {
    BLANCA: {
      "40x60": 22000,
      "70x1,30": 48000,
      "90x1,80": 60000,
    },
    NEGRA: {
      "40x60": 24000,
      "50x100": 37000,
    },
  },
  description:
    "Toalla profesional para cabina, spa o centro de bienestar. Elige el color y la presentación para actualizar el precio de cotización.",
  colorVariants: [
    {
      name: "BLANCA",
      color: "#F7F4EF",
      description: "Toalla blanca profesional",
      images: ["/images/toallas-blancas.png"],
      sizes: ["40x60", "70x1,30", "90x1,80"],
    },
    {
      name: "NEGRA",
      color: "#1F1F1F",
      description: "Toalla negra profesional",
      images: ["/images/toallas-blancas.png"],
      sizes: ["40x60", "50x100"],
    },
  ],
  specs: [
    { name: "Producto", value: "Toalla profesional" },
    { name: "Colores", value: "Blanca y negra" },
    { name: "Blanca", value: "40x60, 70x1,30 y 90x1,80" },
    { name: "Negra", value: "40x60 y 50x100" },
    { name: "Precio desde", value: "$22.000" },
  ],
  features: ["Suave al tacto", "Alta absorción", "Uso profesional", "Personalizable con bordado"],
  colors: ["BLANCA", "NEGRA"],
  sizes: ["40x60", "70x1,30", "90x1,80"],
  sizeLabel: "Presentación",
  badgeLabel: "Toallas y Cobijas",
}

const cannonProduct = {
  id: 2,
  name: "TOALLA CANNON 460g",
  basePrice: 28000,
  pricing: {
    "40x60": 28000,
    "70x1,30": 60000,
  },
  description: "Toalla Cannon de 460 g para uso profesional, con mayor gramaje y acabado suave.",
  colorVariants: [
    {
      name: "BLANCA",
      color: "#F7F4EF",
      description: "Toalla Cannon blanca",
      images: ["/images/toallas-cannon.png"],
    },
  ],
  specs: [
    { name: "Producto", value: "Toalla Cannon" },
    { name: "Gramaje", value: "460 g" },
    { name: "Presentaciones", value: "40x60 y 70x1,30" },
    { name: "Precio desde", value: "$28.000" },
  ],
  features: ["Mayor gramaje", "Textura suave", "Uso profesional", "Personalizable con bordado"],
  colors: ["BLANCA"],
  sizes: ["40x60", "70x1,30"],
  sizeLabel: "Presentación",
  badgeLabel: "Toallas y Cobijas",
}

const flannelProduct = {
  id: 3,
  name: "KIT COBIJAS Y FUNDAS - TELA FLANNEL",
  basePrice: 70000,
  pricing: {
    "Kit 1: 2 fundas": 70000,
    "Kit 2: cobija + funda": 120000,
    "Kit 3: cobija + 2 fundas": 160000,
  },
  description:
    "Kits de cobijas y fundas en tela flannel de 250 g para camilla. Selecciona el color y la presentación del kit.",
  colorVariants: [
    {
      name: "GRIS OSCURO",
      color: "#4A4744",
      description: "Tela flannel gris oscuro",
      images: ["/images/kit-cobijas-fundas-flannel.png"],
    },
    {
      name: "BEIGE",
      color: "#D8CDBA",
      description: "Tela flannel beige",
      images: ["/images/kit-cobijas-fundas-flannel.png"],
    },
  ],
  specs: [
    { name: "Material", value: "Tela flannel 250 g" },
    { name: "Colores", value: "Gris oscuro y beige" },
    { name: "Kit 1", value: "2 fundas de 45x65 cm" },
    { name: "Kit 2", value: "Cobija 1,80x1,35 m + 1 funda de 45x65 cm" },
    { name: "Kit 3", value: "Cobija 1,60x1,80 m + 2 fundas de 45x65 cm" },
    { name: "Precio desde", value: "$70.000" },
  ],
  features: ["Tela suave", "Set para camilla", "Disponible en dos tonos", "Ideal para cabina y spa"],
  colors: ["GRIS OSCURO", "BEIGE"],
  sizes: ["Kit 1: 2 fundas", "Kit 2: cobija + funda", "Kit 3: cobija + 2 fundas"],
  sizeLabel: "Presentación",
  badgeLabel: "Toallas y Cobijas",
}

export default function ToallasCobijasCategory() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2
            className="px-2 text-center text-xl font-bold sm:text-2xl md:text-3xl"
            style={{ color: batasGlamorColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Toallas y Kits - Batas Glamor
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl px-4 text-center text-sm text-muted-foreground sm:text-base md:text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Toallas profesionales y kits de cobijas con fundas para cabina, camilla, spa y centros de bienestar.
          </p>
        </div>

        <Tabs defaultValue="toallas" className="w-full">
          <div className="mb-6 flex justify-center sm:mb-8">
            <TabsList className="grid h-auto w-full max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3">
              <TabsTrigger
                value="toallas"
                className="min-h-[44px] text-xs font-semibold sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                TOALLAS
              </TabsTrigger>
              <TabsTrigger
                value="cannon"
                className="min-h-[44px] text-xs font-semibold sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                CANNON
              </TabsTrigger>
              <TabsTrigger
                value="flannel"
                className="min-h-[44px] text-xs font-semibold sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                FLANNEL
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="toallas" className="space-y-6 sm:space-y-8">
            <div className="mb-6 pb-6 sm:mb-8 sm:pb-8">
              <ProductDisplay {...toallaProduct} uniformesGColors={batasGlamorColors} />
            </div>
          </TabsContent>

          <TabsContent value="cannon" className="space-y-6 sm:space-y-8">
            <div className="mb-6 pb-6 sm:mb-8 sm:pb-8">
              <ProductDisplay {...cannonProduct} uniformesGColors={batasGlamorColors} />
            </div>
          </TabsContent>

          <TabsContent value="flannel" className="space-y-6 sm:space-y-8">
            <div className="mb-6 pb-6 sm:mb-8 sm:pb-8">
              <ProductDisplay {...flannelProduct} uniformesGColors={batasGlamorColors} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
