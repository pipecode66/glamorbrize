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

interface SedaCollectionProps {
  colors?: typeof batasGlamorColors
}

export default function SedaCollection({ colors = batasGlamorColors }: SedaCollectionProps) {
  const [activeTab, setActiveTab] = useState("modelo1")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const quoteHref = "https://wa.me/573209951491?text=Hola,%20quiero%20cotizar%20la%20coleccion%20seda"

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
    name: "BATA - SEDA",
    basePrice: 85000,
    pricing: {
      S: 85000,
      M: 85000,
      L: 85000,
      XL: 85000,
      XXL: 85000,
    },
    bordadoPricing: {
      delantero: 85000,
      trasero: 90000,
    },
    description:
      "Bata de seda suave y elegante, perfecta para ocasiones especiales. Diseño sofisticado con acabados de alta calidad que garantizan durabilidad y confort.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#e8eff3",
        description: "Color principal elegante y versátil",
        images: ["/images/seda/12.png"],
      },
      {
        name: "BEIGE",
        color: "#e6dfd1",
        description: "Algo más imponente y lujoso",
        images: ["/images/seda/13.png"],
      },
      {
        name: "ROSADO",
        color: "#efb3af",
        description: "Tono suave y relajante",
        images: ["/images/seda/14.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Seda premium" },
      { name: "Referencia", value: "SEDA-001" },
      { name: "Tallas disponibles", value: "S, M, L, XL, XXL" },
      { name: "Precio desde", value: "$85.000" },
      { name: "Bordado delantero", value: "$85.000" },
      { name: "Bordado trasero", value: "$90.000" },
    ],
    features: [
      "Seda suave al tacto",
      "Secado rápido",
      "Resistente al uso diario",
      "Fácil mantenimiento",
      "Diseño elegante",
      "Colores duraderos",
    ],
    colors: ["BLANCO", "BEIGE", "ROSADO"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  }

  const modelo2Product = {
    id: 2,
    name: "ESTRAPLERA - SEDA",
    basePrice: 55000,
    pricing: {
      S: 55000,
      M: 55000,
      L: 55000,
      XL: 55000,
      XXL: 55000,
    },
    bordadoPricing: {
      delantero: 55000,
      balaca: 20000,
    },
    description:
      "Estraplera de seda con diseño moderno y funcional. Perfecta para profesionales que buscan comodidad y estilo en su día a día.",
    colorVariants: [
      {
        name: "NEGRO",
        color: "#211d1f",
        description: "Tono clásico y profesional",
        images: ["/images/seda/15.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Seda premium" },
      { name: "Referencia", value: "SEDA-002" },
      { name: "Tallas disponibles", value: "S, M, L, XL, XXL" },
      { name: "Precio desde", value: "$55.000" },
      { name: "Bordado delantero", value: "$55.000" },
      { name: "Balaca", value: "$20.000" },
    ],
    features: [
      "Diseño moderno y funcional",
      "Seda de alta calidad",
      "Transpirable y cómoda",
      "Fácil de lavar",
      "Acabados perfectos",
    ],
    colors: ["NEGRO"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  }

  const getBannerImages = () => {
    const defaultImages = [
      {
        src: "/images/seda/12.png",
        alt: "Producto Seda 1",
        color: "#e8eff3",
        name: "BATA - SEDA",
      },
      {
        src: "/images/seda/13.png",
        alt: "Producto Seda 2",
        color: "#e6dfd1",
        name: "BATA - SEDA",
      },
      {
        src: "/images/seda/14.png",
        alt: "Producto Seda 3",
        color: "#efb3af",
        name: "BATA - SEDA",
      },
      {
        src: "/images/seda/15.png",
        alt: "Producto Seda 4",
        color: "#211d1f",
        name: "ESTRAPLERA - SEDA",
      },
    ]

    return {
      title: "PRODUCTOS - SEDA",
      images: defaultImages,
    }
  }

  const bannerData = getBannerImages()

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
            Colección Seda - Batas Glamor
          </h2>
          <p
            className="text-center max-w-3xl mx-auto text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Descubre nuestra colección de batas en seda, diseñadas para ofrecer máxima comodidad y elegancia. Perfectas
            para profesionales de la estética y el bienestar.
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
            <TabsList className="grid h-auto w-full max-w-xl grid-cols-2 gap-2">
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
        </Tabs>

      {/* NUEVA SECCIÓN INDEPENDIENTE - 3 imágenes fijas cuadradas */}
      <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 mb-8 sm:mb-10 md:mb-12">
            {/* Imagen 1 */}
            <div className="text-center">
              <div className="relative aspect-square max-w-[250px] sm:max-w-[280px] md:max-w-[320px] mx-auto mb-3 sm:mb-4">
                <Image
                  src="/images/seda/12.png"
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
                  src="/images/seda/14.png"
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
                  src="/images/seda/15.png"
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
                ¿Te interesa nuestra Colección Seda?
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
