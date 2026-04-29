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

interface AntifluidoCollectionProps {
  colors?: typeof batasGlamorColors
}

export default function AntifluidoCollection({ colors = batasGlamorColors }: AntifluidoCollectionProps) {
  const [activeTab, setActiveTab] = useState("modelo1")
  const quoteHref = "https://wa.me/573156614208?text=Hola,%20quiero%20cotizar%20la%20coleccion%20antifluido"

  const modelo1Product = {
    id: 1,
    name: "BATA - ANTIFLUIDO",
    basePrice: 95000,
    pricing: {
      "Única": 95000,
    },
    bordadoPricing: {
      delantero: 95000,
      trasero: 100000,
    },
    description:
      "Bata antifluido profesional con tecnologÃ­a de protecciÃ³n avanzada. DiseÃ±o funcional con acabados de alta calidad que garantizan durabilidad y confort.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/bata-medica-antifluido.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Color principal elegante y versÃ¡til",
        images: ["/images/antifluido/16.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/antifluido/19.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Antifluido premium" },
      { name: "Referencia", value: "ANTI-001" },
      { name: "Talla", value: "Ãnica" },
      { name: "Medidas", value: "Busto 124 cm / largo 92 cm / manga 33 cm" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Precio desde", value: "$95.000" },
      { name: "Bordado delantero", value: "$95.000" },
      { name: "Bordado trasero", value: "$100.000" },
    ],
    features: [
      "ProtecciÃ³n antifluido certificada",
      "Resistente a lÃ­quidos",
      "FÃ¡cil limpieza",
      "FÃ¡cil mantenimiento",
      "DiseÃ±o profesional",
      "Durabilidad garantizada",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
    sizes: ["Única"],
  }

  const modelo2Product = {
    id: 2,
    name: "ESTRAPLERA - ANTIFLUIDO",
    basePrice: 60000,
    pricing: {},
    description:
      "Estraplera antifluido premium con diseÃ±o exclusivo. Ideal para quienes buscan protecciÃ³n y mÃ¡xima calidad.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/estraplera-antifluidos.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono clÃ¡sico y profesional",
        images: ["/images/antifluido/18.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/antifluido/17.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Antifluido premium" },
      { name: "Referencia", value: "ANTI-003" },
      { name: "Talla", value: "Ãnica" },
      { name: "Medidas", value: "140 cm ancho x 70 cm largo" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Bordado delantero", value: "$60.000" },
    ],
    features: [
      "DiseÃ±o exclusivo",
      "Antifluido de alta densidad",
      "Confort mÃ¡ximo",
      "Acabados premium",
      "Durabilidad garantizada",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
    sizes: [],
  }

  const modelo3Product = {
    id: 3,
    name: "BALACA - ANTIFLUIDO",
    basePrice: 20000,
    pricing: {},
    description: "Balaca antifluido versÃ¡til y prÃ¡ctica. Para los amantes del estilo contemporÃ¡neo.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/balaca-antifluido.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono clÃ¡sico y profesional",
        images: ["/images/balaca-antifluido.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/balaca-antifluido.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Antifluido premium" },
      { name: "Referencia", value: "ANTI-004" },
      { name: "Medidas", value: "Circular 54 cm x 8 cm ancho" },
      { name: "Ajuste", value: "Caucho" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Precio desde", value: "$20.000" },
    ],
    features: [
      "DiseÃ±o contemporÃ¡neo",
      "Antifluido absorbente",
      "Peso ligero",
      "MÃºltiples colores",
      "Ideal para regalo",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
    sizes: [],
  }

  const modelo4Product = {
    id: 4,
    name: "BABERO - ANTIFLUIDO",
    basePrice: 38000,
    pricing: {},
    description: "Babero antifluido para servicios de estÃ©tica, spa y bienestar. Disponible en los colores de la lÃ­nea.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/babero-antifluido.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono negro profesional",
        images: ["/images/babero-antifluido.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/babero-antifluido.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Antifluido premium" },
      { name: "Referencia", value: "ANTI-005" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Precio", value: "$38.000" },
    ],
    features: [
      "ProtecciÃ³n para tratamientos",
      "Tela suave antifluido",
      "FÃ¡cil limpieza",
      "Personalizable con bordado",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
    sizes: [],
  }

  const modelo5Product = {
    id: 5,
    name: "CAPA-BABERO - ANTIFLUIDO",
    basePrice: 60000,
    pricing: {},
    description: "Capa-babero antifluido de mayor cobertura para procedimientos de estÃ©tica y cuidado personal.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/capa-antifluido.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono negro profesional",
        images: ["/images/capa-antifluido.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/capa-antifluido.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Antifluido premium" },
      { name: "Referencia", value: "ANTI-006" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Precio", value: "$60.000" },
    ],
    features: [
      "Mayor cobertura",
      "Tela antifluido suave",
      "Ideal para cabina",
      "Personalizable con bordado",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
    sizes: [],
  }

  const modelo6Product = {
    id: 6,
    name: "FUNDAS - ANTIFLUIDO",
    basePrice: 90000,
    pricing: {},
    description: "Set de fundas antifluido para camilla, ideal para centros de estÃ©tica y bienestar.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/kit-cobija-funda-antifluido.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono negro profesional",
        images: ["/images/kit-cobija-funda-antifluido.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/kit-cobija-funda-antifluido.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Antifluido premium" },
      { name: "Referencia", value: "ANTI-007" },
      { name: "Incluye", value: "2 fundas de 45x65 cm" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Precio", value: "$90.000" },
    ],
    features: [
      "Set para camilla",
      "Resistente a fluidos",
      "Personalizable con logo",
      "FÃ¡cil mantenimiento",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
    sizes: [],
  }

  const modelo7Product = {
    id: 7,
    name: "SÃBANA + FUNDA - ANTIFLUIDO",
    basePrice: 145000,
    pricing: {},
    description: "Kit de sÃ¡bana antifluido para camilla con funda incluida, pensado para uso profesional.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/kit-cobija-funda-antifluido.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono negro profesional",
        images: ["/images/kit-cobija-funda-antifluido.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/kit-cobija-funda-antifluido.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Antifluido premium" },
      { name: "Referencia", value: "ANTI-008" },
      { name: "SÃ¡bana", value: "1,35 x 1,80 m" },
      { name: "Funda", value: "1 funda de 45x65 cm" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Precio", value: "$145.000" },
    ],
    features: [
      "Kit completo para camilla",
      "Tela antifluido",
      "Personalizable con logo",
      "Disponible en tres colores",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
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
            ColecciÃ³n Antifluido - Batas Glamor
          </h2>
          <p
            className="text-center max-w-3xl mx-auto text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Descubre nuestra colecciÃ³n de batas antifluido, diseÃ±adas para ofrecer mÃ¡xima protecciÃ³n y comodidad.
            Perfectas para profesionales de la salud y estÃ©tica.
          </p>
        </div>

        {/* Tabs para los diferentes modelos */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="grid h-auto w-full max-w-5xl grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
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
              <TabsTrigger
                value="modelo4"
                className="min-h-[44px] text-xs sm:text-sm font-semibold"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                BABERO
              </TabsTrigger>
              <TabsTrigger
                value="modelo5"
                className="min-h-[44px] text-xs sm:text-sm font-semibold"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                CAPA
              </TabsTrigger>
              <TabsTrigger
                value="modelo6"
                className="min-h-[44px] text-xs sm:text-sm font-semibold"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                FUNDAS
              </TabsTrigger>
              <TabsTrigger
                value="modelo7"
                className="min-h-[44px] text-xs sm:text-sm font-semibold"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                SÃBANAS
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

          <TabsContent value="modelo6" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...modelo6Product} uniformesGColors={colors} />
            </div>
          </TabsContent>

          <TabsContent value="modelo7" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...modelo7Product} uniformesGColors={colors} />
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
                    src="/images/antifluido/20.png"
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
                    src="/images/antifluido/21.png"
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
                    src="/images/antifluido/22.png"
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
              Â¿Te interesa nuestra ColecciÃ³n Antifluido?
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
