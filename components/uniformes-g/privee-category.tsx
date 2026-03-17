"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductDisplay from "./product-display"

// Definimos los colores de Uniformes G basados en la paleta oficial del manual de marca
const uniformesGColors = {
  primary: "#354358", // Azul marino
  secondary: "#697C87", // Gris azulado
  accent: "#A78786", // Rosa
  accent2: "#7E6863", // Marrón
  accent3: "#98837A", // Beige oscuro
  light: "#CFC2B6", // Beige claro
  white: "#FFFFFF",
  black: "#000000",
}

interface PriveeCategoryProps {
  colors?: typeof uniformesGColors
}

export default function PriveeCategory({ colors = uniformesGColors }: PriveeCategoryProps) {
  const [activeTab, setActiveTab] = useState("amatista")
  const quoteHref =
    "https://wa.me/573209951491?text=Hola,%20quiero%20cotizar%20la%20Linea%20Privee%20de%20Uniformes%20G"

  // Producto AMATISTA con precios actualizados según PDF
  const amatistaProduct = {
    id: 1,
    name: "AMATISTA - Línea Priveé",
    basePrice: 225000,
    pricing: {
      S: 225000,
      M: 225000,
      L: 225000,
      XL: 232000,
      XXL: 242000,
    },
    description:
      "Estilo y comodidad en equilibrio perfecto. Camisa semi ajustada con cuello alto en V y bolsillo con ribete para un toque elegante. Pantalón cargo de bota ancha que garantiza libertad de movimiento sin perder sofisticación. ¡Versatilidad para cualquier ocasión!",
    colorVariants: [
      {
        name: "Coral",
        color: "#FF6B6B",
        description: "Vibrante y moderno, perfecto para profesionales que buscan destacar con personalidad.",
        images: [
          "/images/amatista-1.jpg",
          "/images/amatista-2.jpg",
          "/images/amatista-3.jpg",
          "/images/amatista-4.jpg",
        ],
      },
      {
        name: "Cielo",
        color: "#4A90E2",
        description: "Clásico y versátil, transmite confianza y profesionalismo en cualquier entorno.",
        images: [
          "/images/amatista-cielo-1.jpg",
          "/images/amatista-cielo-2.jpg",
          "/images/amatista-cielo-3.jpg",
          "/images/amatista-cielo-4.jpg",
        ],
      },
      {
        name: "Gris",
        color: "#6b7280",
        description: "Elegante y versátil para cualquier ocasión",
        images: [
          "/images/amatista-negro-1.jpg",
          "/images/amatista-negro-2.jpg",
          "/images/amatista-negro-3.jpg",
          "/images/amatista-negro-4.jpg",
        ],
      },
    ],
    specs: [
      { name: "Material", value: "Tela antifluido premium" },
      { name: "Incluye", value: "Camisa semi ajustada y pantalón cargo" },
      { name: "Referencia", value: "AMATISTA" },
      { name: "Tallas disponibles", value: "S, M, L, XL, XXL" },
      { name: "Precio desde", value: "$225.000" },
    ],
    features: [
      "Diseño exclusivo línea Priveé",
      "Tela antifluido de alta calidad",
      "Costuras reforzadas para durabilidad",
      "Bolsillos funcionales estratégicos",
      "Ajuste perfecto y cómodo",
      "Fácil mantenimiento y cuidado",
    ],
    colors: ["Coral", "Cielo", "Gris"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  }

  // Producto ÁGATA con precios actualizados según PDF
  const agataProduct = {
    id: 2,
    name: "ÁGATA - Línea Priveé",
    basePrice: 225000,
    pricing: {
      S: 225000,
      M: 225000,
      L: 225000,
      XL: 232000,
      XXL: 242000,
    },
    description:
      "Diseño cómodo y deportivo para profesionales en movimiento. Camisa oversize con cuello deportivo y pantalón de corte recto con elástico en la cintura, bolsillos laterales y traseros. ¡Libertad y estilo en cada jornada!",
    colorVariants: [
      {
        name: "Turquesa",
        color: "#20B2AA",
        description: "Color vibrante y fresco que transmite confianza y profesionalismo en el entorno médico.",
        images: [
          "/images/agata-turquesa-1.jpg",
          "/images/agata-turquesa-2.jpg",
          "/images/agata-turquesa-3.jpg",
          "/images/agata-turquesa-4.jpg",
        ],
      },
      {
        name: "Arena",
        color: "#D2B48C",
        description: "Tono neutro y sofisticado, perfecto para un look elegante y discreto.",
        images: ["/images/agata-beige-1.jpg", "/images/agata-arena-1.jpg"],
      },
      {
        name: "Rosa",
        color: "#E6A8B8",
        description: "Delicado y profesional, ideal para quienes buscan un toque femenino y elegante.",
        images: ["/images/agata-rosa-1.jpg", "/images/agata-rosa-2.jpg", "/images/agata-rosa-3.jpg"],
      },
    ],
    specs: [
      { name: "Material", value: "Tela antifluido premium" },
      { name: "Incluye", value: "Camisa oversize y pantalón de corte recto" },
      { name: "Referencia", value: "ÁGATA" },
      { name: "Tallas disponibles", value: "S, M, L, XL, XXL" },
      { name: "Precio desde", value: "$225.000" },
    ],
    features: [
      "Confección superior con acabados",
      "Resistente al uso diario intensivo",
      "Transpirable para mayor confort",
      "Bolsillos amplios y funcionales",
      "Diseño ergonómico y moderno",
      "Colores que no se destiñen",
    ],
    colors: ["Turquesa", "Arena", "Rosa"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  }

  // Producto PERLA con 3 colores - agregando el tercer color
  const perlaProduct = {
    id: 3,
    name: "PERLA - Línea Priveé",
    basePrice: 225000,
    pricing: {
      S: 225000,
      M: 225000,
      L: 225000,
      XL: 232000,
      XXL: 242000,
    },
    description:
      "Comodidad y estilo urbano en una sola prenda. Camisa de silueta amplia con bolsillo en el pecho y pantalón de corte recto con doble bolsillo delantero. Perfecto para días activos con un toque moderno.",
    colorVariants: [
      {
        name: "Azul Marino",
        color: "#1E3A8A",
        description: "Clásico y profesional, transmite autoridad y confianza en cualquier entorno médico.",
        images: ["/images/perla-azul-1.jpg", "/images/perla-azul-2.jpg", "/images/perla-azul-3.jpg"],
      },
      {
        name: "Gris Salvia",
        color: "#9CA3AF",
        description: "Moderno y versátil, perfecto para un look contemporáneo y sofisticado.",
        images: [
          "/images/perla-gris-1.jpg",
          "/images/perla-gris-2.jpg",
          "/images/perla-gris-3.jpg",
          "/images/perla-gris-4.jpg",
        ],
      },
      {
        name: "Verde Menta",
        color: "#98D8C8",
        description: "Fresco y relajante, ideal para profesionales que buscan un toque de color sutil y elegante.",
        images: ["/images/perla-gris-5.jpg"],
      },
    ],
    specs: [
      { name: "Material", value: "Tela antifluido premium" },
      { name: "Incluye", value: "Camisa amplia y pantalón de corte recto" },
      { name: "Referencia", value: "PERLA" },
      { name: "Tallas disponibles", value: "S, M, L, XL, XXL" },
      { name: "Precio desde", value: "$225.000" },
    ],
    features: [
      "Acabados de lujo y refinamiento",
      "Máxima durabilidad y resistencia",
      "Comodidad superior todo el día",
      "Diseño anatómico perfecto",
      "Tecnología antiarrugas avanzada",
      "Colores de larga duración",
    ],
    colors: ["Azul Marino", "Gris Salvia", "Verde Menta"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  }

  // Producto ESMERALDA - Intercambio específico de las primeras 2 imágenes de cada color
  const esmeraldaProduct = {
    id: 4,
    name: "ESMERALDA - Línea Priveé",
    basePrice: 245000,
    pricing: {
      S: 245000,
      M: 245000,
      L: 245000,
      XL: 252000,
      XXL: 262000,
    },
    description:
      "La joya de la corona en nuestra Línea Priveé. Diseño vanguardista con cuello alto tipo tortuga y pantalón palazzo de corte amplio. Representa la máxima expresión de elegancia y sofisticación para profesionales de élite.",
    colorVariants: [
      {
        name: "Azul Turquesa",
        color: "#40E0D0",
        description: "Azul turquesa vibrante que combina serenidad y dinamismo, ideal para profesionales modernos.",
        images: [
          "/images/esmeralda-turquesa-1.jpg",
          "/images/esmeralda-turquesa-3.jpg",
          "/images/esmeralda-turquesa-9.jpg",
          "/images/esmeralda-turquesa-10.jpg",
        ],
      },
      {
        name: "Verde Esmeralda",
        color: "#50C878",
        description:
          "Verde esmeralda distintivo que evoca frescura y vitalidad, perfecto para destacar con elegancia única.",
        images: [
          "/images/esmeralda-turquesa-8.jpg",
          "/images/esmeralda-turquesa-2.jpg",
          "/images/esmeralda-turquesa-4.jpg",
          "/images/esmeralda-turquesa-5.jpg",
        ],
      },
      {
        name: "Gris Élite",
        color: "#708090",
        description: "Sofisticación absoluta en gris profundo, ideal para profesionales que buscan distinción máxima.",
        images: [
          "/images/esmeralda-negro-1.jpg",
          "/images/esmeralda-negro-2.jpg",
          "/images/esmeralda-negro-3.jpg",
          "/images/esmeralda-negro-4.jpg",
        ],
      },
    ],
    specs: [
      { name: "Material", value: "Tela antifluido premium plus" },
      { name: "Incluye", value: "Camisa cuello tortuga y pantalón palazzo" },
      { name: "Referencia", value: "ESMERALDA" },
      { name: "Tallas disponibles", value: "S, M, L, XL, XXL" },
      { name: "Precio desde", value: "$245.000" },
    ],
    features: [
      "Tecnología antifluido avanzada",
      "Fibras de alta resistencia",
      "Sistema de ventilación integrado",
      "Bolsillos con cierre de seguridad",
      "Ajuste ergonómico profesional",
      "Tratamiento antimicrobiano",
    ],
    colors: ["Azul Turquesa", "Verde Esmeralda", "Gris Élite"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  }

  // Nuevo Producto JADE
  const jadeProduct = {
    id: 5,
    name: "JADE - Línea Priveé",
    basePrice: 225000,
    pricing: {
      S: 225000,
      M: 225000,
      L: 225000,
      XL: 232000,
      XXL: 242000,
    },
    description:
      "Elegancia minimalista y funcionalidad moderna. Camisa con cuello en V profundo y mangas cortas, combinada con pantalón palazzo de cintura alta con cordón ajustable. Diseño contemporáneo que fusiona comodidad y sofisticación para el profesional de hoy.",
    colorVariants: [
      {
        name: "Rosa Jade",
        color: "#F8BBD9",
        description:
          "Delicado rosa jade que transmite calma y profesionalismo, perfecto para crear un ambiente sereno y confiable.",
        images: ["/images/jade-1.jpg", "/images/jade-2.jpg", "/images/jade-3.jpg", "/images/jade-4.jpg"],
      },
    ],
    specs: [
      { name: "Material", value: "Tela antifluido premium" },
      { name: "Incluye", value: "Camisa cuello V y pantalón palazzo" },
      { name: "Referencia", value: "JADE" },
      { name: "Tallas disponibles", value: "S, M, L, XL, XXL" },
      { name: "Precio desde", value: "$225.000" },
    ],
    features: [
      "Diseño minimalista y elegante",
      "Cuello en V profundo moderno",
      "Pantalón palazzo de corte amplio",
      "Cintura alta con cordón ajustable",
      "Tela antifluido de alta calidad",
      "Comodidad superior todo el día",
    ],
    colors: ["Rosa Jade"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  }

  // Función para obtener las imágenes del banner según la colección activa
  const getBannerImages = () => {
    switch (activeTab) {
      case "amatista":
        return {
          title: "Colección AMATISTA",
          images: [
            { src: "/images/amatista-1.jpg", alt: "AMATISTA Coral", color: "#FF6B6B", name: "Coral" },
            { src: "/images/amatista-cielo-4.jpg", alt: "AMATISTA Cielo", color: "#4A90E2", name: "Cielo" },
            { src: "/images/amatista-negro-3.jpg", alt: "AMATISTA Gris", color: "#6b7280", name: "Gris" },
          ],
        }
      case "agata":
        return {
          title: "Colección ÁGATA",
          images: [
            { src: "/images/agata-turquesa-10.jpg", alt: "ÁGATA Turquesa", color: "#20B2AA", name: "Turquesa" },
            { src: "/images/agata-arena-1.jpg", alt: "ÁGATA Arena", color: "#D2B48C", name: "Arena" },
            { src: "/images/agata-rosa-1.jpg", alt: "ÁGATA Rosa", color: "#E6A8B8", name: "Rosa" },
          ],
        }
      case "perla":
        return {
          title: "Colección PERLA",
          images: [
            { src: "/images/perla-azul-2.jpg", alt: "PERLA Azul Marino", color: "#1E3A8A", name: "Azul Marino" },
            { src: "/images/perla-gris-1.jpg", alt: "PERLA Gris Salvia", color: "#9CA3AF", name: "Gris Salvia" },
            { src: "/images/perla-gris-5.jpg", alt: "PERLA Verde Menta", color: "#98D8C8", name: "Verde Menta" },
          ],
        }
      case "esmeralda":
        return {
          title: "Colección ESMERALDA",
          images: [
            {
              src: "/images/esmeralda-turquesa-1.jpg",
              alt: "ESMERALDA Azul Turquesa",
              color: "#40E0D0",
              name: "Azul Turquesa",
            },
            {
              src: "/images/esmeralda-turquesa-8.jpg",
              alt: "ESMERALDA Verde Esmeralda",
              color: "#50C878",
              name: "Verde Esmeralda",
            },
            { src: "/images/esmeralda-negro-1.jpg", alt: "ESMERALDA Gris Élite", color: "#708090", name: "Gris Élite" },
          ],
        }
      case "jade":
        return {
          title: "Colección JADE",
          images: [{ src: "/images/jade-1.jpg", alt: "JADE Rosa Jade", color: "#F8BBD9", name: "Rosa Jade" }],
        }
      default:
        return {
          title: "Colección AMATISTA",
          images: [
            { src: "/images/amatista-1.jpg", alt: "AMATISTA Coral", color: "#FF6B6B", name: "Coral" },
            { src: "/images/amatista-cielo-4.jpg", alt: "AMATISTA Cielo", color: "#4A90E2", name: "Cielo" },
            { src: "/images/amatista-negro-3.jpg", alt: "AMATISTA Gris", color: "#6b7280", name: "Gris" },
          ],
        }
    }
  }

  const bannerData = getBannerImages()

  return (
    <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 px-2"
            style={{ color: colors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Línea Priveé - Colecciones Exclusivas
          </h2>
          <p
            className="text-center max-w-3xl mx-auto text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Descubre nuestras 5 colecciones premium: AMATISTA, ÁGATA, PERLA, ESMERALDA y JADE, diseñadas especialmente
            para profesionales que buscan la perfecta combinación entre elegancia, funcionalidad y comodidad en su
            entorno laboral.
          </p>
        </div>

        {/* Banner dinámico que cambia según la colección activa - Responsive */}
        <div className="py-8 sm:py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              {bannerData.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
              {bannerData.images.map((image, index) => (
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
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: image.color }}></div>
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

        {/* Tabs para las diferentes colecciones - Responsive con 5 tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8">
            <TabsList className="grid h-auto w-full max-w-md grid-cols-2 gap-2 sm:max-w-4xl sm:grid-cols-5 sm:gap-1">
              <TabsTrigger
                value="amatista"
                className="min-h-[44px] px-1 text-xs font-semibold sm:px-3 sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                AMATISTA
              </TabsTrigger>
              <TabsTrigger
                value="agata"
                className="min-h-[44px] px-1 text-xs font-semibold sm:px-3 sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                ÁGATA
              </TabsTrigger>
              <TabsTrigger
                value="perla"
                className="min-h-[44px] px-1 text-xs font-semibold sm:px-3 sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                PERLA
              </TabsTrigger>
              <TabsTrigger
                value="esmeralda"
                className="min-h-[44px] px-1 text-xs font-semibold sm:px-3 sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                ESMERALDA
              </TabsTrigger>
              <TabsTrigger
                value="jade"
                className="col-span-2 min-h-[44px] px-1 text-xs font-semibold sm:col-span-1 sm:px-3 sm:text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                JADE
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Contenido AMATISTA */}
          <TabsContent value="amatista" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...amatistaProduct} uniformesGColors={colors} />
            </div>
          </TabsContent>

          {/* Contenido ÁGATA */}
          <TabsContent value="agata" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...agataProduct} uniformesGColors={colors} />
            </div>
          </TabsContent>

          {/* Contenido PERLA */}
          <TabsContent value="perla" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...perlaProduct} uniformesGColors={colors} />
            </div>
          </TabsContent>

          {/* Contenido ESMERALDA */}
          <TabsContent value="esmeralda" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...esmeraldaProduct} uniformesGColors={colors} />
            </div>
          </TabsContent>

          {/* Contenido JADE - Nueva colección */}
          <TabsContent value="jade" className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8">
              <ProductDisplay {...jadeProduct} uniformesGColors={colors} />
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section - Responsive */}
        <div className="py-10 text-center sm:py-12 lg:py-14">
          <div className="mx-auto max-w-3xl px-4">
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4"
              style={{ color: colors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              ¿Te interesa nuestra Línea Priveé?
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
