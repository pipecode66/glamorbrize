"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductDisplay from "@/components/uniformes-g/product-display"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

export default function MicrofibraCollection({ colors = batasGlamorColors }: MicrofibraCollectionProps) {
  const [activeTab, setActiveTab] = useState("modelo1")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const quoteHref = "https://wa.me/573209951491?text=Hola,%20quiero%20cotizar%20la%20coleccion%20microfibra"

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const modelo1Product = {
    id: 1,
    name: "BATA - MICROFIBRA",
    basePrice: 85000,
    pricing: {
      "M dama": 85000,
      "L caballero": 85000,
    },
    bordadoPricing: {
      delantero: 85000,
      trasero: 90000,
    },
    description:
      "Bata de microfibra suave y cómoda, disponible en M dama y L caballero. Diseño elegante con acabados de alta calidad.",
    colorVariants: [
      {
        name: "BLANCO CON ORILLOS",
        color: "#e8e8e9",
        description: "Blanco con orillos disponibles en blanco, gris y dorado",
        images: ["/images/microfibra/1.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Algo más imponente y lujuso",
        images: ["/images/microfibra/5.png"],
      },
      {
        name: "PERLA",
        color: "#CFD1D3",
        description: "Tono suave y relajante",
        images: ["/images/microfibra/3.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Microfibra premium" },
      { name: "Referencia", value: "MICRO-001" },
      { name: "Tallas disponibles", value: "M dama y L caballero" },
      { name: "M dama", value: "Busto 100 cm / largo 100 cm" },
      { name: "L caballero", value: "Espalda 45 cm / largo 115 cm" },
      { name: "Colores", value: "Blanco con orillos, gris y perla" },
      { name: "Orillos blanco", value: "Blanco, gris y dorado" },
      { name: "Precio desde", value: "$85.000" },
      { name: "Bordado delantero", value: "$85.000" },
      { name: "Bordado trasero", value: "$90.000" },
    ],
    features: [
      "Microfibra suave al tacto",
      "Secado rápido",
      "Resistente al uso diario",
      "Fácil mantenimiento",
      "Diseño elegante",
      "Colores duraderos",
    ],
    colors: ["BLANCO CON ORILLOS", "GRIS", "PERLA"],
    sizes: ["M dama", "L caballero"],
  }

  const modelo2Product = {
    id: 2,
    name: "ESTRAPLERA - MICROFIBRA",
    basePrice: 55000,
    pricing: {},
    bordadoPricing: {
      delantero: 55000,
      balaca: 16000,
    },
    description:
      "Estraplera de microfibra talla única, moderna y funcional para tratamientos de spa, estética y bienestar.",
    colorVariants: [
      {
        name: "BLANCO CON ORILLOS",
        color: "#e8e8e9",
        description: "Blanco con orillos disponibles en blanco, gris y dorado",
        images: ["/images/microfibra/2.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris unicolor",
        images: ["/images/microfibra/6.png"],
      },
      {
        name: "PERLA",
        color: "#CFD1D3",
        description: "Tono sofisticado y relajado",
        images: ["/images/microfibra/4.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Microfibra premium" },
      { name: "Referencia", value: "MICRO-002" },
      { name: "Talla", value: "Única" },
      { name: "Medidas", value: "140 cm ancho x 70 cm largo" },
      { name: "Colores", value: "Blanco con orillos, gris y perla" },
      { name: "Orillos blanco", value: "Blanco, gris y dorado" },
      { name: "Precio desde", value: "$55.000" },
      { name: "Bordado delantero", value: "$55.000" },
    ],
    features: [
      "Diseño moderno y funcional",
      "Microfibra de alta calidad",
      "Transpirable y cómoda",
      "Fácil de lavar",
      "Acabados perfectos",
    ],
    colors: ["BLANCO CON ORILLOS", "GRIS", "PERLA"],
    sizes: [],
  }

  const modelo3Product = {
  id: 3,
  name: "BABERO - MICROFIBRA",
  basePrice: 25000,
  pricing: {},
  description:
    "Babero de microfibra premium con diseño práctico para servicios de estética y bienestar.",
  colorVariants: [
    {
      name: "BLANCO CON ORILLOS",
      color: "#e8e8e9",
      description: "Blanco con orillos disponibles en blanco, gris y dorado",
      images: ["/images/microfibra/7.png"],
    },
    {
      name: "GRIS",
      color: "#9d9aa1",
      description: "Tono gris unicolor",
      images: ["/images/microfibra/7.png"],
    },
    {
      name: "PERLA",
      color: "#CFD1D3",
      description: "Tono perla unicolor",
      images: ["/images/microfibra/7.png"],
    },
  ],
  specs: [
    { name: "Material", value: "Microfibra premium" },
    { name: "Referencia", value: "MICRO-003" },
    { name: "Medidas", value: "40 cm ancho x 52 cm largo" },
    { name: "Colores", value: "Blanco con orillos, gris y perla" },
    { name: "Orillos blanco", value: "Blanco, gris y dorado" },
  ],
  features: [
    "Diseño exclusivo",
    "Microfibra de alta densidad",
    "Confort máximo",
    "Acabados premium",
    "Durabilidad garantizada",
  ],
  colors: ["BLANCO CON ORILLOS", "GRIS", "PERLA"],
  sizes: [],
}

  const modelo4Product = {
    id: 4,
    name: "TURBANTE - MICROFIBRA",
    basePrice: 25000,
    pricing: {},
    description: "Turbante de microfibra versátil y práctica. Para los amantes del estilo contemporáneo.",
    colorVariants: [
      {
        name: "BLANCO CON ORILLOS",
        color: "#e8e8e9",
        description: "Blanco con orillos disponibles en blanco, gris y dorado",
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
      { name: "Colores", value: "Blanco con orillos, gris y perla" },
      { name: "Orillos blanco", value: "Blanco, gris y dorado" },
      { name: "Precio desde", value: "$25.000" },
    ],
    features: [
      "Diseño contemporáneo",
      "Microfibra absorbente",
      "Peso ligero",
      "Múltiples colores",
      "Ideal para regalo",
    ],
    colors: ["BLANCO CON ORILLOS", "GRIS", "PERLA"],
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
        name: "BLANCO CON ORILLOS",
        color: "#e8e8e9",
        description: "Blanco con orillos disponibles en blanco, gris y dorado",
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
      { name: "Colores", value: "Blanco con orillos, gris y perla" },
      { name: "Precio desde", value: "$16.000" },
    ],
    features: [
      "Complemento en microfibra",
      "Ajuste con velcro",
      "Ligera y cómoda",
      "Disponible en tonos de la colección",
    ],
    colors: ["BLANCO CON ORILLOS", "GRIS", "PERLA"],
    sizes: [],
  }

  const getBannerImages = () => ({
    title: "PRODUCTOS - MICROFIBRA",
    images: [
      {
        src: "/images/microfibra/1.png",
        alt: "Bata microfibra blanca",
        color: "#e8e8e9",
        name: "BATA - BLANCO CON ORILLOS",
      },
      {
        src: "/images/microfibra/3.png",
        alt: "Bata microfibra perla",
        color: "#CFD1D3",
        name: "BATA - PERLA",
      },
      {
        src: "/images/microfibra/5.png",
        alt: "Bata microfibra gris",
        color: "#9d9aa1",
        name: "BATA - GRIS",
      },
      {
        src: "/images/microfibra/2.png",
        alt: "Estraplera microfibra blanca",
        color: "#e8e8e9",
        name: "ESTRAPLERA",
      },
      {
        src: "/images/balaca-microfibra.png",
        alt: "Balaca microfibra",
        color: "#e8e8e9",
        name: "BALACA",
      },
      {
        src: "/images/microfibra/7.png",
        alt: "Babero microfibra",
        color: "#e8e8e9",
        name: "BABERO",
      },
      {
        src: "/images/microfibra/8.png",
        alt: "Turbante microfibra",
        color: "#e8e8e9",
        name: "TURBANTE",
      },
    ],
  })

  const bannerData = getBannerImages()

  // Funciones de navegación del carrusel
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= bannerData.images.length ? 0 : prev + itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, bannerData.images.length - itemsPerView) : Math.max(0, prev - itemsPerView),
    )
  }

  const visibleImages = bannerData.images.slice(currentIndex, currentIndex + itemsPerView)
  const totalPages = Math.ceil(bannerData.images.length / itemsPerView)
  const currentPage = Math.floor(currentIndex / itemsPerView)

  // Reiniciar el índice cuando cambia la pestaña
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

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

        {/* Banner dinámico con carrusel */}
        <div className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              {bannerData.title}
            </h2>

            {/* Controles de navegación del carrusel */}
            {bannerData.images.length > itemsPerView && (
              <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-transparent border-gray-300"
                  disabled={currentIndex === 0}
                  aria-label="Imágenes anteriores"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>

                {/* Indicadores de página */}
                <div className="flex gap-1.5 sm:gap-2 items-center">
                  {(() => {
                    const maxDotsToShow = 3
                    const halfWindow = Math.floor(maxDotsToShow / 2)

                    let startPage = Math.max(0, currentPage - halfWindow)
                    const endPage = Math.min(totalPages, startPage + maxDotsToShow)

                    // Adjust if we're near the end
                    if (endPage - startPage < maxDotsToShow) {
                      startPage = Math.max(0, endPage - maxDotsToShow)
                    }

                    const visiblePages = Array.from({ length: endPage - startPage }, (_, i) => startPage + i)

                    return (
                      <>
                        {startPage > 0 && <span className="text-gray-400 text-xs">...</span>}
                        {visiblePages.map((pageIndex) => (
                          <button
                            key={pageIndex}
                            onClick={() => setCurrentIndex(pageIndex * itemsPerView)}
                            aria-label={`Ir a página ${pageIndex + 1}`}
                            className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                              currentPage === pageIndex ? "bg-primary scale-110" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                          />
                        ))}
                        {endPage < totalPages && <span className="text-gray-400 text-xs">...</span>}
                      </>
                    )
                  })()}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-transparent border-gray-300"
                  disabled={currentIndex + itemsPerView >= bannerData.images.length}
                  aria-label="Imágenes siguientes"
                >
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            )}

            {/* Grid de imágenes del carrusel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
              {visibleImages.map((image, index) => (
                <div key={index} className="text-center">
                  <div className="relative aspect-[3/4] max-w-[200px] sm:max-w-[220px] md:max-w-[250px] mx-auto mb-3 sm:mb-4">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, 250px"
                    />
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-gray-200 ${
                        image.color === "#FFFFFF" || image.color === "#FFF" || image.color.toLowerCase() === "white"
                          ? "shadow-sm"
                          : ""
                      }`}
                      style={{ backgroundColor: image.color }}
                    ></div>
                    <span
                      className="text-sm sm:text-base font-semibold text-gray-700"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                    >
                      {image.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs para los diferentes modelos */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="grid h-auto w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-5">
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
                BABERO
              </TabsTrigger>
              <TabsTrigger
                value="modelo4"
                className="min-h-[44px] text-xs sm:text-sm font-semibold"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                TURBANTE
              </TabsTrigger>
              <TabsTrigger
                value="modelo5"
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

        {/* NUEVA SECCIÓN INDEPENDIENTE - 3 imágenes fijas cuadradas */}
        <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 mb-8 sm:mb-10 md:mb-12">
              {/* Imagen 1 */}
              <div className="text-center">
                <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                  <Image
                    src="/images/microfibra/6.png"
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
                  Diseño Exclusivo
                </span>
              </div>

              {/* Imagen 2 */}
              <div className="text-center">
                <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                  <Image
                    src="/images/microfibra/7.png"
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
                  Personalización Única
                </span>
              </div>

              {/* Imagen 3 */}
              <div className="text-center">
                <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                  <Image
                    src="/images/microfibra/8.png"
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
                  Creación Original
                </span>
              </div>
            </div>

            {/* Texto de personalización */}
            <div className="text-center">
              <p
                className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 italic max-w-2xl mx-auto px-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
              >
                "Así quedan tus diseños personalizados de nuestras batas, ¿Qué esperas a tener el tuyo?"
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
              ¿Te interesa nuestra Colección Microfibra?
            </h3>
            <p
              className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Solicita nuestro catálogo completo y descubre todas las opciones disponibles
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
