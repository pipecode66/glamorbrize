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

const kitOptions = ["KIT 1", "KIT 2", "KIT 3", "KIT 4", "KIT 5", "KIT 6"]

const kitProduct = {
  id: 1,
  name: "KITS EMPRESARIALES",
  basePrice: 230000,
  pricing: {
    "KIT 1": 230000,
    "KIT 2": 252000,
    "KIT 3": 265000,
    "KIT 4": 280000,
    "KIT 5": 390000,
    "KIT 6": 385000,
  },
  description:
    "Kits empresariales listos para dotacion profesional. Elige el kit para actualizar la imagen, el precio y la cotizacion.",
  colorVariants: [],
  sizeVariants: {
    "KIT 1": {
      images: ["/images/kits-empresariales/kit-6.jpeg"],
      description: "Kit empresarial #1 en microfibra: 2 estrapleras, 2 baberos y 2 balacas.",
    },
    "KIT 2": {
      images: ["/images/kits-empresariales/kit-5.jpeg"],
      description: "Kit empresarial #2 en microfibra: 3 estrapleras y 3 balacas.",
    },
    "KIT 3": {
      images: ["/images/kits-empresariales/kit-4.jpeg"],
      description: "Kit empresarial #3 en microfibra: 1 bata, 1 estraplera, 2 balacas y 2 baberos.",
    },
    "KIT 4": {
      images: ["/images/kits-empresariales/kit-3.jpeg"],
      description: "Kit empresarial #4 antifluido: 3 estrapleras y 3 balacas.",
    },
    "KIT 5": {
      images: ["/images/kits-empresariales/kit-2.jpeg"],
      description: "Kit empresarial #5 antifluido: 2 batas, 2 estrapleras y 2 balacas.",
    },
    "KIT 6": {
      images: ["/images/kits-empresariales/kit-1.jpeg"],
      description: "Kit empresarial #6 antifluido: 3 batas y 3 balacas.",
    },
  },
  specs: [
    { name: "Kit 1", value: "Microfibra: 2 estrapleras, 2 baberos y 2 balacas - $230.000" },
    { name: "Kit 2", value: "Microfibra: 3 estrapleras y 3 balacas - $252.000" },
    { name: "Kit 3", value: "Microfibra: 1 bata, 1 estraplera, 2 balacas y 2 baberos - $265.000" },
    { name: "Kit 4", value: "Antifluido: 3 estrapleras y 3 balacas - $280.000" },
    { name: "Kit 5", value: "Antifluido: 2 batas, 2 estrapleras y 2 balacas - $390.000" },
    { name: "Kit 6", value: "Antifluido: 3 batas y 3 balacas - $385.000" },
  ],
  features: [
    "Pedidos empresariales desde 12 unidades",
    "Productos combinables segun el kit seleccionado",
    "Personalizable con bordado",
    "Ideal para spas, esteticas y equipos profesionales",
  ],
  colors: [],
  sizes: kitOptions,
  sizeLabel: "Kit",
  badgeLabel: "Kits Empresariales",
}

export default function KitsEmpresarialesCategory() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2
            className="px-2 text-center text-xl font-bold sm:text-2xl md:text-3xl"
            style={{ color: batasGlamorColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Kits Empresariales - Batas Glamor
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl px-4 text-center text-sm text-muted-foreground sm:text-base md:text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Kits listos para dotacion empresarial en microfibra y antifluido, pensados para equipos de spa, estetica y
            bienestar.
          </p>
        </div>

        <Tabs defaultValue="kit" className="w-full">
          <div className="mb-6 flex justify-center sm:mb-8">
            <TabsList className="grid h-auto w-full max-w-xs grid-cols-1 gap-2">
              <TabsTrigger
                value="kit"
                className="min-h-[44px] text-xs font-semibold sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                KIT
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="kit" className="space-y-6 sm:space-y-8">
            <div className="mb-6 pb-6 sm:mb-8 sm:pb-8">
              <ProductDisplay {...kitProduct} uniformesGColors={batasGlamorColors} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
