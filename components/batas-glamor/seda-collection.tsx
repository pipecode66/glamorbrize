"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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

interface SedaCollectionProps {
  colors?: typeof batasGlamorColors
}

export default function SedaCollection({ colors = batasGlamorColors }: SedaCollectionProps) {
  const [activeTab, setActiveTab] = useState("modelo1")
  const quoteHref = "https://wa.me/573156614208?text=Hola,%20quiero%20cotizar%20la%20coleccion%20seda"

  const modelo1Product = {
    id: 1,
    name: "BATA - SEDA",
    basePrice: 85000,
    pricing: {
      "Única": 85000,
    },
    bordadoPricing: {
      delantero: 85000,
      trasero: 90000,
    },
    description:
      "Bata de seda suave y elegante, perfecta para ocasiones especiales. DiseÃ±o sofisticado con acabados de alta calidad que garantizan durabilidad y confort.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#e8eff3",
        description: "Color principal elegante y versÃ¡til",
        images: ["/images/seda/12.png"],
      },
      {
        name: "NEGRO",
        color: "#211d1f",
        description: "Tono clÃ¡sico y elegante",
        images: ["/images/seda/15.png"],
      },
      {
        name: "BEIGE",
        color: "#e6dfd1",
        description: "Algo mÃ¡s imponente y lujoso",
        images: ["/images/seda/13.png"],
      },
      {
        name: "ROSADO",
        color: "#efb3af",
        description: "Tono suave y relajante",
        images: ["/images/seda/14.png"],
      },
    ].filter((variant) => variant.name !== "NEGRO"),
    specs: [
      { name: "Material", value: "Seda premium" },
      { name: "Referencia", value: "SEDA-001" },
      { name: "Talla", value: "Ãnica" },
      { name: "Medidas", value: "Busto 124 cm / largo 92 cm / manga 33 cm" },
      { name: "Colores", value: "Blanco, beige y rosado" },
      { name: "Precio desde", value: "$85.000" },
      { name: "Bordado delantero", value: "$85.000" },
      { name: "Bordado trasero", value: "$90.000" },
    ],
    features: [
      "Seda suave al tacto",
      "Secado rÃ¡pido",
      "Resistente al uso diario",
      "FÃ¡cil mantenimiento",
      "DiseÃ±o elegante",
      "Colores duraderos",
    ],
    colors: ["BLANCO", "BEIGE", "ROSADO"],
    sizes: ["Única"],
  }

  const modelo2Product = {
    id: 2,
    name: "ESTRAPLERA - SEDA",
    basePrice: 55000,
    pricing: {},
    bordadoPricing: {
      delantero: 55000,
      balaca: 20000,
    },
    description:
      "Estraplera de seda con diseÃ±o moderno y funcional. Perfecta para profesionales que buscan comodidad y estilo en su dÃ­a a dÃ­a.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#e8eff3",
        description: "Tono blanco elegante",
        images: ["/images/estraplera-seda.png"],
      },
      {
        name: "NEGRO",
        color: "#211d1f",
        description: "Tono clÃ¡sico y profesional",
        images: ["/images/seda/15.png"],
      },
      {
        name: "BEIGE",
        color: "#e6dfd1",
        description: "Tono beige elegante",
        images: ["/images/seda/13.png"],
      },
      {
        name: "ROSADO",
        color: "#efb3af",
        description: "Tono rosado suave",
        images: ["/images/seda/14.png"],
      },
    ].map((variant) => ({ ...variant, images: ["/images/seda/15.png"] })),
    specs: [
      { name: "Material", value: "Seda premium" },
      { name: "Referencia", value: "SEDA-002" },
      { name: "Talla", value: "Ãnica" },
      { name: "Medidas", value: "140 cm ancho x 70 cm largo" },
      { name: "Colores", value: "Blanco, negro, beige y rosado" },
      { name: "Precio desde", value: "$55.000" },
      { name: "Bordado delantero", value: "$55.000" },
    ],
    features: [
      "DiseÃ±o moderno y funcional",
      "Seda de alta calidad",
      "Transpirable y cÃ³moda",
      "FÃ¡cil de lavar",
      "Acabados perfectos",
    ],
    colors: ["BLANCO", "NEGRO", "BEIGE", "ROSADO"],
    sizes: [],
  }

  const modelo3Product = {
    id: 3,
    name: "BALACA - SEDA",
    basePrice: 20000,
    pricing: {},
    description: "Balaca de seda con caucho, disponible en los mismos colores de las batas de seda.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#e8eff3",
        description: "Tono blanco elegante",
        images: ["/images/balaca-seda.png"],
      },
      {
        name: "NEGRO",
        color: "#211d1f",
        description: "Tono negro elegante",
        images: ["/images/balaca-seda.png"],
      },
      {
        name: "BEIGE",
        color: "#e6dfd1",
        description: "Tono beige elegante",
        images: ["/images/balaca-seda.png"],
      },
      {
        name: "ROSADO",
        color: "#efb3af",
        description: "Tono rosado suave",
        images: ["/images/balaca-seda.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Seda premium" },
      { name: "Referencia", value: "SEDA-003" },
      { name: "Medidas", value: "Circular 54 cm x 8 cm ancho" },
      { name: "Ajuste", value: "Caucho" },
      { name: "Colores", value: "Blanco, negro, beige y rosado" },
      { name: "Precio desde", value: "$20.000" },
    ],
    features: [
      "Balaca con caucho",
      "Complemento en seda",
      "Disponible en tonos de la colecciÃ³n",
      "Ligera y cÃ³moda",
    ],
    colors: ["BLANCO", "NEGRO", "BEIGE", "ROSADO"],
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
            ColecciÃ³n Seda - Batas Glamor
          </h2>
          <p
            className="text-center max-w-3xl mx-auto text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Descubre nuestra colecciÃ³n de batas en seda, diseÃ±adas para ofrecer mÃ¡xima comodidad y elegancia. Perfectas
            para profesionales de la estÃ©tica y el bienestar.
          </p>
        </div>

        {/* Tabs para los diferentes modelos */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="grid h-auto w-full max-w-xl grid-cols-3 gap-2">
              <TabsTrigger
                value="modelo1"
                className="min-h-[44px] text-xs sm:text-sm font-semibold"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                BATAS
              </TabsTrigger>
              <TabsTrigger
                value="modelo2"
                className="min-h-[44px] text-xs sm:text-sm font-semibold"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                ESTRAPLERA
              </TabsTrigger>
              <TabsTrigger
                value="modelo3"
                className="min-h-[44px] text-xs sm:text-sm font-semibold"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                BALACA
              </TabsTrigger>
            </TabsList>
          </div>

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
        </Tabs>

      {/* NUEVA SECCIÃN INDEPENDIENTE - 3 imÃ¡genes fijas cuadradas */}
      <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 mb-8 sm:mb-10 md:mb-12">
            {/* Imagen 1 */}
            <div className="text-center">
              <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                <Image
                  src="/images/seda/12.png"
                  alt="DiseÃ±o personalizado de bata 1"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, 320px"
                />
              </div>
              <span
                className="text-sm sm:text-base font-semibold text-gray-700"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                DiseÃ±o Exclusivo
              </span>
            </div>

            {/* Imagen 2 */}
            <div className="text-center">
              <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                <Image
                  src="/images/seda/14.png"
                  alt="DiseÃ±o personalizado de bata 2"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, 320px"
                />
              </div>
              <span
                className="text-sm sm:text-base font-semibold text-gray-700"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                PersonalizaciÃ³n Ãnica
              </span>
            </div>

            {/* Imagen 3 */}
            <div className="text-center">
              <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                <Image
                  src="/images/seda/15.png"
                  alt="DiseÃ±o personalizado de bata 3"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, 320px"
                />
              </div>
              <span
                className="text-sm sm:text-base font-semibold text-gray-700"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                CreaciÃ³n Original
              </span>
            </div>
          </div>

          {/* Texto de personalizaciÃ³n */}
          <div className="text-center">
            <p 
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 italic max-w-2xl mx-auto px-4"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
            >
              "AsÃ­ quedan tus diseÃ±os personalizados de nuestras batas, Â¿QuÃ© esperas a tener el tuyo?"
            </p>
          </div>
        </div>
      </div>

          {/* CTA Section */}
          <div className="py-10 text-center sm:py-12">
            <div className="max-w-2xl mx-auto px-4">
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4"
                style={{ color: colors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Â¿Te interesa nuestra ColecciÃ³n Seda?
              </h3>
              <p
                className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Solicita nuestro catÃ¡logo completo y descubre todas las opciones disponibles
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
