"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import QuoteButton from "@/components/quote-button"

const aprilData = {
  name: "Bata Médica APRIL",
  description:
    "Elegancia y funcionalidad en cada detalle. Diseño clásico con cierre de cremallera dorada, bolsillos funcionales y corte favorecedor para el profesional moderno.",
  colorVariants: [
    {
      name: "Blanco",
      color: "#FFFFFF",
      description: "Clásico blanco profesional",
      images: [
        "/images/april-1.jpg",
        "/images/april-2.jpg",
        "/images/april-3.jpg",
        "/images/april-4.jpg",
        "/images/april-5.jpg",
      ],
    },
  ],
  sizes: ["S", "M", "L", "XL"],
  pricing: {
    S: 168000,
    M: 168000,
    L: 174000,
    XL: 174000,
  },
  specs: [
    { name: "Material", value: "Algodón Premium 100%" },
    { name: "Peso", value: "180 GSM" },
    { name: "Color", value: "Blanco" },
    { name: "Tallas", value: "S, M, L, XL" },
    { name: "Cuidado", value: "Lavable a máquina" },
    { name: "Cierre", value: "Cremallera dorada" },
  ],
  features: [
    "Tela antibacterial de alta calidad",
    "Resistente a manchas y líquidos",
    "Secado rápido y fácil mantenimiento",
    "Bolsillos funcionales estratégicamente ubicados",
    "Ajuste perfecto y corte favorecedor",
    "Cierre de cremallera elegante y duradero",
  ],
}

export default function AprilGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(aprilData.colorVariants[0].name)
  const [selectedSize, setSelectedSize] = useState("M")

  const currentVariant = aprilData.colorVariants.find((v) => v.name === selectedColor) || aprilData.colorVariants[0]
  const currentPrice = aprilData.pricing[selectedSize as keyof typeof aprilData.pricing]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentVariant.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentVariant.images.length) % currentVariant.images.length)
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        {/* Columna izquierda - Imágenes */}
        <div className="space-y-3 sm:space-y-4">
          {/* Imagen principal */}
          <div className="relative aspect-[3/4] max-w-xs sm:max-w-sm mx-auto">
            <Image
              src={currentVariant.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${aprilData.name} - ${selectedColor}`}
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
            />

            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-black text-white border-0"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-black text-white border-0"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Zoom Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2 bg-black/80 hover:bg-black text-white border-0"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={currentVariant.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${aprilData.name} - Vista ampliada`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Image Counter */}
            <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1}/{currentVariant.images.length}
            </div>
          </div>

          {/* Miniaturas */}
          <div className="flex justify-center gap-2 sm:gap-3 max-w-xs sm:max-w-sm mx-auto">
            {currentVariant.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-all ${
                  currentImageIndex === index
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Vista ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Columna derecha - Información del producto */}
        <div className="space-y-4 sm:space-y-6">
          {/* Título y precio */}
          <div>
            <h1
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center lg:text-left"
              style={{ color: "#354358", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              {aprilData.name}
            </h1>
            <div className="flex items-center gap-3 mb-3 sm:mb-4 justify-center lg:justify-start">
              <span
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "#354358", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                {formatPrice(currentPrice)}
              </span>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                Precio de Lanzamiento
              </Badge>
            </div>
          </div>

          {/* Descripción */}
          <div className="max-w-md mx-auto lg:mx-0">
            <p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center lg:text-left"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {aprilData.description}
            </p>
          </div>

          {/* Selección de color */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3
                className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center lg:text-left"
                style={{ color: "#354358", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Color: {selectedColor}
              </h3>
              <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start">
                {aprilData.colorVariants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => {
                      setSelectedColor(variant.name)
                      setCurrentImageIndex(0)
                    }}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all ${
                      selectedColor === variant.name
                        ? "border-gray-800 ring-2 ring-offset-2 ring-gray-300"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: variant.color }}
                    title={variant.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Selección de talla */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3
                className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center lg:text-left"
                style={{ color: "#354358", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Talla
              </h3>
              <div className="grid grid-cols-4 gap-1 sm:gap-2 max-w-md mx-auto lg:mx-0">
                {aprilData.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-8 sm:h-10 rounded-md border-2 transition-all text-sm sm:text-base font-medium ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 hover:border-gray-400 text-gray-700"
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="space-y-2 sm:space-y-3">
            <QuoteButton
              productName={`${aprilData.name} ${selectedColor} - Talla ${selectedSize}`}
              productPrice={formatPrice(currentPrice)}
              className="w-full py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white"
              style={{ backgroundColor: "#354358", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            />
          </div>

          {/* Características */}
          <div className="space-y-3 sm:space-y-4">
            <h3
              className="text-lg sm:text-xl font-semibold text-center lg:text-left"
              style={{ color: "#354358", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Características
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {aprilData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-xs sm:text-sm text-muted-foreground"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
