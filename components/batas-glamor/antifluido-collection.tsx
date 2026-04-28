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

interface AntifluidoCollectionProps {
  colors?: typeof batasGlamorColors
}

export default function AntifluidoCollection({ colors = batasGlamorColors }: AntifluidoCollectionProps) {
  const [activeTab, setActiveTab] = useState("modelo1")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const quoteHref = "https://wa.me/573209951491?text=Hola,%20quiero%20cotizar%20la%20coleccion%20antifluido"

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
    name: "BATA - ANTIFLUIDO",
    basePrice: 95000,
    pricing: {
      "Talla única": 95000,
    },
    bordadoPricing: {
      delantero: 95000,
      trasero: 100000,
    },
    description:
      "Bata antifluido profesional con tecnología de protección avanzada. Diseño funcional con acabados de alta calidad que garantizan durabilidad y confort.",
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
        description: "Color principal elegante y versátil",
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
      { name: "Talla", value: "Única" },
      { name: "Medidas", value: "Busto 124 cm / largo 92 cm / manga 33 cm" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Precio desde", value: "$95.000" },
      { name: "Bordado delantero", value: "$95.000" },
      { name: "Bordado trasero", value: "$100.000" },
    ],
    features: [
      "Protección antifluido certificada",
      "Resistente a líquidos",
      "Fácil limpieza",
      "Fácil mantenimiento",
      "Diseño profesional",
      "Durabilidad garantizada",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
    sizes: ["Talla única"],
  }

  const modelo2Product = {
    id: 2,
    name: "ESTRAPLERA - ANTIFLUIDO",
    basePrice: 60000,
    pricing: {},
    description:
      "Estraplera antifluido premium con diseño exclusivo. Ideal para quienes buscan protección y máxima calidad.",
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
        description: "Tono clásico y profesional",
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
      { name: "Talla", value: "Única" },
      { name: "Medidas", value: "140 cm ancho x 70 cm largo" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Bordado delantero", value: "$60.000" },
    ],
    features: [
      "Diseño exclusivo",
      "Antifluido de alta densidad",
      "Confort máximo",
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
    description: "Balaca antifluido versátil y práctica. Para los amantes del estilo contemporáneo.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/balaca-microfibra.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono clásico y profesional",
        images: ["/images/turbamicro.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/balaca-microfibra.png"],
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
      "Diseño contemporáneo",
      "Antifluido absorbente",
      "Peso ligero",
      "Múltiples colores",
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
    description: "Babero antifluido para servicios de estética, spa y bienestar. Disponible en los colores de la línea.",
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
        description: "Tono negro profesional",
        images: ["/images/antifluido/21.png"],
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
      { name: "Referencia", value: "ANTI-005" },
      { name: "Colores", value: "Blanco, negro y gris" },
      { name: "Precio", value: "$38.000" },
    ],
    features: [
      "Protección para tratamientos",
      "Tela suave antifluido",
      "Fácil limpieza",
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
    description: "Capa-babero antifluido de mayor cobertura para procedimientos de estética y cuidado personal.",
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
        description: "Tono negro profesional",
        images: ["/images/antifluido/21.png"],
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
    description: "Set de fundas antifluido para camilla, ideal para centros de estética y bienestar.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/antifluido/20.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono negro profesional",
        images: ["/images/antifluido/20.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/antifluido/20.png"],
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
      "Fácil mantenimiento",
    ],
    colors: ["BLANCO", "NEGRO", "GRIS"],
    sizes: [],
  }

  const modelo7Product = {
    id: 7,
    name: "SÁBANA + FUNDA - ANTIFLUIDO",
    basePrice: 145000,
    pricing: {},
    description: "Kit de sábana antifluido para camilla con funda incluida, pensado para uso profesional.",
    colorVariants: [
      {
        name: "BLANCO",
        color: "#f2f2f2",
        description: "Tono blanco profesional",
        images: ["/images/antifluido/20.png"],
      },
      {
        name: "NEGRO",
        color: "#19161e",
        description: "Tono negro profesional",
        images: ["/images/antifluido/20.png"],
      },
      {
        name: "GRIS",
        color: "#9d9aa1",
        description: "Tono gris profesional",
        images: ["/images/antifluido/20.png"],
      },
    ],
    specs: [
      { name: "Material", value: "Antifluido premium" },
      { name: "Referencia", value: "ANTI-008" },
      { name: "Sábana", value: "1,35 x 1,80 m" },
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

  const getBannerImages = () => {
    const defaultImages = [
      {
        src: "/images/bata-medica-antifluido.png",
        alt: "Bata antifluido blanca",
        color: "#f2f2f2",
        name: "BATA - BLANCO",
      },
      {
        src: "/images/antifluido/16.png",
        alt: "Producto Antifluido 1",
        color: "#19161e",
        name: "BATA - NEGRO",
      },
      {
        src: "/images/antifluido/17.png",
        alt: "Producto Antifluido 2",
        color: "#e9e5f3",
        name: "ESTRAPLERA",
      },
      {
        src: "/images/antifluido/18.png",
        alt: "Producto Antifluido 3",
        color: "#CFD1D3",
        name: "ESTRAPLERA",
      },
      {
        src: "/images/turbamicro.png",
        alt: "Producto Antifluido 4",
        color: "#CFD1D3",
        name: "BALACA",
      },
      {
        src: "/images/antifluido/21.png",
        alt: "Babero antifluido",
        color: "#19161e",
        name: "BABERO",
      },
      {
        src: "/images/antifluido/21.png",
        alt: "Capa-babero antifluido",
        color: "#19161e",
        name: "CAPA-BABERO",
      },
      {
        src: "/images/antifluido/20.png",
        alt: "Fundas antifluido",
        color: "#f2f2f2",
        name: "FUNDAS",
      },
      {
        src: "/images/antifluido/20.png",
        alt: "Sábana y funda antifluido",
        color: "#f2f2f2",
        name: "SÁBANA + FUNDA",
      },
    ]

    return {
      title: "PRODUCTOS - ANTIFLUIDO",
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
            Colección Antifluido - Batas Glamor
          </h2>
          <p
            className="text-center max-w-3xl mx-auto text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Descubre nuestra colección de batas antifluido, diseñadas para ofrecer máxima protección y comodidad.
            Perfectas para profesionales de la salud y estética.
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
                SÁBANAS
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

        {/* NUEVA SECCIÓN INDEPENDIENTE - 3 imágenes fijas cuadradas */}
        <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 mb-8 sm:mb-10 md:mb-12">
              {/* Imagen 1 */}
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
                  Diseño Exclusivo
                </span>
              </div>

              {/* Imagen 2 */}
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
                  Personalización Única
                </span>
              </div>

              {/* Imagen 3 */}
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
              ¿Te interesa nuestra Colección Antifluido?
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
