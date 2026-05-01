"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import ProductDisplay from "@/components/uniformes-g/product-display"
import ProductTabSlider from "./product-tab-slider"

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

interface MicrofibraCollectionProps {
  colors?: typeof batasGlamorColors
}

const microfibraTabs = [
  { value: "modelo1", label: "BATAS" },
  { value: "modelo2", label: "ESTRAPLERA" },
  { value: "modelo3", label: "BABERO" },
  { value: "modelo4", label: "TURBANTE" },
  { value: "modelo5", label: "BALACA" },
]

export default function MicrofibraCollection({ colors = batasGlamorColors }: MicrofibraCollectionProps) {
  const [activeTab, setActiveTab] = useState("modelo1")
  const quoteHref = "https://wa.me/573156614208?text=Hola,%20quiero%20cotizar%20la%20colecci%C3%B3n%20microfibra"

  const modelo1Product = {
    id: 1,
    name: "BATA DE BAÑO - MICROFIBRA",
    basePrice: 85000,
    pricing: {
      M: 85000,
      L: 85000,
    },
    variantPricing: {
      BLANCA: { M: 85000, L: 85000 },
      PERLA: { M: 90000, L: 90000 },
      GRIS: { M: 90000, L: 90000 },
    },
    bordadoPricing: {
      delantero: 85000,
      trasero: 90000,
    },
    description:
      "Bata de baño en microfibra suave y cómoda, disponible en M y L. Diseño elegante con acabados de alta calidad.",
    colorVariants: [
      {
        name: "BLANCA",
        color: "#e8e8e9",
        description: "Blanca con sesgos satinados en los orillos",
        images: ["/images/microfibra/1.png"],
      },
      {
        name: "PERLA",
        color: "#CFD1D3",
        description: "Tono perla suave y elegante",
        images: ["/images/microfibra/1.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris unicolor",
        images: ["/images/microfibra/1.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Microfibra premium" },
      { name: "Referencia", value: "MICRO-001" },
      { name: "Tallas disponibles", value: "M y L" },
      { name: "M", value: "Busto 100 cm / largo 100 cm" },
      { name: "L", value: "Espalda 45 cm / largo 115 cm" },
      { name: "Colores", value: "Blanca, Perla y Gris" },
      { name: "Blanca bordado delantero", value: "$85.000" },
      { name: "Blanca bordado espalda", value: "$90.000" },
      { name: "Perla o gris bordado delantero", value: "$90.000" },
      { name: "Perla o gris bordado espalda", value: "$95.000" },
    ],
    features: [
      "Microfibra suave al tacto",
      "Secado rápido",
      "Resistente al uso diario",
      "Fácil mantenimiento",
      "Diseño elegante",
      "Colores duraderos",
    ],
    colors: ["BLANCA", "PERLA", "GRIS"],
    sizes: ["M", "L"],
  }

  const modelo2Product = {
    id: 2,
    name: "ESTRAPLERA - MICROFIBRA",
    basePrice: 50000,
    pricing: {},
    variantPricing: {
      BLANCA: { "": 50000 },
      PERLA: { "": 55000 },
      GRIS: { "": 55000 },
    },
    bordadoPricing: {
      delantero: 50000,
      balaca: 16000,
    },
    description:
      "Estraplera de microfibra talla única, moderna y funcional para tratamientos de spa, estética y bienestar.",
    colorVariants: [
      {
        name: "BLANCA",
        color: "#e8e8e9",
        description: "Blanca con sesgos satinados en los orillos",
        images: ["/images/microfibra/4.png"],
      },
      {
        name: "PERLA",
        color: "#CFD1D3",
        description: "Tono perla unicolor",
        images: ["/images/microfibra/4.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris unicolor",
        images: ["/images/microfibra/4.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Microfibra premium" },
      { name: "Referencia", value: "MICRO-002" },
      { name: "Talla", value: "Única" },
      { name: "Medidas", value: "140 cm ancho x 70 cm largo" },
      { name: "Colores", value: "Blanca, Perla y Gris" },
      { name: "Blanca con bordado", value: "$50.000" },
      { name: "Perla o gris con bordado", value: "$55.000" },
    ],
    features: [
      "Diseño moderno y funcional",
      "Microfibra de alta calidad",
      "Transpirable y cómoda",
      "Fácil de lavar",
      "Acabados perfectos",
    ],
    colors: ["BLANCA", "PERLA", "GRIS"],
    sizes: [],
  }

  const modelo3Product = {
    id: 3,
    name: "BABERO - MICROFIBRA",
    basePrice: 25000,
    pricing: {},
    description: "Babero de microfibra premium con diseño práctico para servicios de estética y bienestar.",
    colorVariants: [
      {
        name: "BLANCO CON SESGOS",
        color: "#e8e8e9",
        description: "Blanco con sesgos satinados",
        images: ["/images/babero-microfibra.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris unicolor",
        images: ["/images/babero-microfibra.png"],
      },
      {
        name: "PERLA",
        color: "#CFD1D3",
        description: "Tono perla unicolor",
        images: ["/images/babero-microfibra.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Microfibra premium" },
      { name: "Referencia", value: "MICRO-003" },
      { name: "Medidas", value: "40 cm ancho x 52 cm largo" },
      { name: "Colores", value: "Blanco con sesgos, Gris y Perla" },
      { name: "Precio", value: "$25.000" },
    ],
    features: [
      "Diseño práctico",
      "Microfibra de alta densidad",
      "Confort máximo",
      "Acabados premium",
      "Durabilidad garantizada",
    ],
    colors: ["BLANCO CON SESGOS", "GRIS", "PERLA"],
    sizes: [],
  }

  const modelo4Product = {
    id: 4,
    name: "TURBANTE - MICROFIBRA",
    basePrice: 25000,
    pricing: {},
    description: "Turbante de microfibra versátil y práctico para complementar la línea de microfibra.",
    colorVariants: [
      {
        name: "BLANCO CON SESGOS",
        color: "#e8e8e9",
        description: "Blanco con sesgos satinados",
        images: ["/images/microfibra/8.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris unicolor",
        images: ["/images/microfibra/8.png"],
      },
      {
        name: "PERLA",
        color: "#CFD1D3",
        description: "Tono perla unicolor",
        images: ["/images/microfibra/8.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Microfibra premium" },
      { name: "Referencia", value: "MICRO-004" },
      { name: "Medidas", value: "52 cm ancho x 75 cm largo" },
      { name: "Colores", value: "Blanco con sesgos, Gris y Perla" },
      { name: "Precio", value: "$25.000" },
    ],
    features: [
      "Diseño contemporáneo",
      "Microfibra absorbente",
      "Peso ligero",
      "Múltiples colores",
      "Ideal para cabina",
    ],
    colors: ["BLANCO CON SESGOS", "GRIS", "PERLA"],
    sizes: [],
  }

  const modelo5Product = {
    id: 5,
    name: "BALACA - MICROFIBRA",
    basePrice: 16000,
    pricing: {},
    description: "Balaca de microfibra con velcro, pensada como complemento para la línea de microfibra.",
    colorVariants: [
      {
        name: "BLANCO CON SESGOS",
        color: "#e8e8e9",
        description: "Blanco con sesgos satinados",
        images: ["/images/balaca-microfibra.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris unicolor",
        images: ["/images/balaca-microfibra.png"],
      },
      {
        name: "PERLA",
        color: "#CFD1D3",
        description: "Tono perla unicolor",
        images: ["/images/balaca-microfibra.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Microfibra premium" },
      { name: "Referencia", value: "MICRO-005" },
      { name: "Medidas", value: "68 cm largo x 8 cm ancho" },
      { name: "Cierre", value: "Velcro" },
      { name: "Colores", value: "Blanco con sesgos, Gris y Perla" },
      { name: "Precio", value: "$16.000" },
    ],
    features: [
      "Complemento en microfibra",
      "Ajuste con velcro",
      "Ligera y cómoda",
      "Disponible en tonos de la colección",
    ],
    colors: ["BLANCO CON SESGOS", "GRIS", "PERLA"],
    sizes: [],
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 px-2"
            style={{ color: colors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Colección Microfibra - Batas Glamor
          </h2>
          <p
            className="text-center max-w-3xl mx-auto text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Descubre nuestra colección de batas en microfibra, diseñadas para ofrecer máxima comodidad y elegancia.
            Perfectas para profesionales de la estética y el bienestar.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <ProductTabSlider
            tabs={microfibraTabs}
            activeValue={activeTab}
            onValueChange={setActiveTab}
            desktopListClassName="grid h-auto w-full max-w-3xl grid-cols-5 gap-2"
            triggerStyle={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          />

          <TabsContent value="modelo1" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...modelo1Product} uniformesGColors={colors} />
            </div>
          </TabsContent>

          <TabsContent value="modelo2" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...modelo2Product} uniformesGColors={colors} />
            </div>
          </TabsContent>

          <TabsContent value="modelo3" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...modelo3Product} uniformesGColors={colors} />
            </div>
          </TabsContent>

          <TabsContent value="modelo4" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...modelo4Product} uniformesGColors={colors} />
            </div>
          </TabsContent>

          <TabsContent value="modelo5" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...modelo5Product} uniformesGColors={colors} />
            </div>
          </TabsContent>
        </Tabs>

        <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 mb-8 sm:mb-10 md:mb-12">
              <div className="text-center">
                <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                  <Image
                    src="/images/antifluido/20.png"
                    alt="Diseño personalizado de bata 1"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, 320px"
                  />
                </div>
                <span
                  className="text-sm sm:text-base font-semibold text-gray-700"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                >
                  Diseño exclusivo
                </span>
              </div>

              <div className="text-center">
                <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                  <Image
                    src="/images/antifluido/21.png"
                    alt="Diseño personalizado de bata 2"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, 320px"
                  />
                </div>
                <span
                  className="text-sm sm:text-base font-semibold text-gray-700"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                >
                  Personalización única
                </span>
              </div>

              <div className="text-center">
                <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                  <Image
                    src="/images/antifluido/22.png"
                    alt="Diseño personalizado de bata 3"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, 320px"
                  />
                </div>
                <span
                  className="text-sm sm:text-base font-semibold text-gray-700"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                >
                  Creación original
                </span>
              </div>
            </div>

            <div className="text-center">
              <p
                className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 italic max-w-2xl mx-auto px-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
              >
                "Así quedan tus diseños personalizados de nuestras batas, ¿qué esperas para tener el tuyo?"
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 text-center sm:py-12">
          <div className="max-w-2xl mx-auto px-4">
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4"
              style={{ color: colors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              ¿Te interesa nuestra Colección Microfibra?
            </h3>
            <p
              className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Solicita nuestro catálogo completo y descubre todas las opciones disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold"
                style={{ backgroundColor: colors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                asChild
              >
                <Link href={quoteHref} target="_blank" rel="noopener noreferrer">
                  Cotizar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
