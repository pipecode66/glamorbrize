"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface ColorVariant {
  name: string
  color: string
  description: string
  images: string[]
}

interface ProductDisplayProps {
  id: number
  name: string
  basePrice: number
  pricing: {
    S: number
    M: number
    L: number
    XL: number
    XXL: number
  }
  description: string
  colorVariants: ColorVariant[]
  specs: Array<{ name: string; value: string }>
  features: string[]
  colors: string[]
  sizes: string[]
  uniformesGColors?: {
    primary: string
    secondary: string
    accent: string
    accent2: string
    accent3: string
    light: string
    white: string
    black: string
  }
  // NUEVA PROPIEDAD PARA PRODUCTOS COMPLEMENTARIOS
  complementaryProducts?: Array<{
    name: string
    price: number
    description?: string
  }>
}

export default function ProductDisplay({
  id,
  name,
  basePrice,
  pricing,
  description,
  colorVariants,
  specs,
  features,
  colors,
  sizes,
  uniformesGColors = {
    primary: "#354358",
    secondary: "#697C87",
    accent: "#A78786",
    accent2: "#7E6863",
    accent3: "#98837A",
    light: "#CFC2B6",
    white: "#FFFFFF",
    black: "#000000",
  },
  complementaryProducts = [], // Nueva prop con valor por defecto
}: ProductDisplayProps) {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0]?.name || colors[0])
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentVariant = colorVariants.find((variant) => variant.name === selectedColor) || colorVariants[0]
  const currentPrice = pricing[selectedSize as keyof typeof pricing] || basePrice

  const handleColorChange = (colorName: string) => {
    setSelectedColor(colorName)
    setCurrentImageIndex(0)
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  // Dividir características en dos columnas (3 y 3)
  const leftFeatures = features.slice(0, 3)
  const rightFeatures = features.slice(3, 6)

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        {/* Columna izquierda - Imágenes */}
        <div className="space-y-3 sm:space-y-4">
          {/* Imagen principal */}
          <div className="relative aspect-[4/5] max-w-xs sm:max-w-sm mx-auto">
            <Image
              src={currentVariant?.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${name} - ${selectedColor}`}
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
            />
          </div>

          {/* Miniaturas */}
          <div className="flex justify-center gap-2 sm:gap-3 max-w-xs sm:max-w-sm mx-auto">
            {currentVariant?.images.map((image, index) => (
              null
            ))}
          </div>
        </div>

        {/* Columna derecha - Información del producto */}
        <div className="space-y-4 sm:space-y-6">
          {/* Título y precio */}
          <div>
            <h1
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center lg:text-left"
              style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              {name}
            </h1>
            <div className="flex items-center gap-3 mb-3 sm:mb-4 justify-center lg:justify-start">
              <span
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                {formatPrice(currentPrice)}
              </span>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                Línea Priveé
              </Badge>
            </div>
          </div>

          {/* Descripción */}
          <div className="max-w-md mx-auto lg:mx-0">
            <p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center lg:text-left"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {description}
            </p>
          </div>

          {/* NUEVA SECCIÓN: PRODUCTOS COMPLEMENTARIOS */}
          {complementaryProducts.length > 0 && (
            <div className="space-y-3 sm:space-y-4">
              <h3
                className="text-base sm:text-lg font-semibold text-center lg:text-left"
                style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Complementos Disponibles
              </h3>
              <div className="space-y-2">
                {complementaryProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">{product.name}</h4>
                      {product.description && (
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{product.description}</p>
                      )}
                    </div>
                    <div>
                      <span className="text-lg sm:text-xl font-bold" style={{ color: uniformesGColors.primary }}>
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selección de color */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3
                className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center lg:text-left"
                style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Color: {selectedColor}
              </h3>
              <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start">
                {colorVariants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => handleColorChange(variant.name)}
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
                style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Talla
              </h3>
              <div className="grid grid-cols-5 gap-1 sm:gap-2 max-w-md mx-auto lg:mx-0">
                {sizes.map((size) => (
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
            
            <Button
              variant="outline"
              size="lg"
              className="w-full py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold bg-primary text-input"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              COTIZACIÓN
            </Button>
          </div>

          {/* Características divididas en dos columnas */}
          <div className="space-y-3 sm:space-y-4">
            <h3
              className="text-lg sm:text-xl font-semibold text-center lg:text-left"
              style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Características
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* Columna izquierda */}
              <div className="space-y-2">
                {leftFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span
                      className="text-xs sm:text-sm text-muted-foreground"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Columna derecha */}
              <div className="space-y-2">
                {rightFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
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

          {/* Instrucciones de cuidado */}
          <div className="space-y-3 sm:space-y-4">
            <h3
              className="text-lg sm:text-xl font-semibold text-center lg:text-left"
              style={{ color: uniformesGColors.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Instrucciones de Cuidado
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  • Lavar a temperatura no mayor a 30°C
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  • No usar blanqueador
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  • Secar a la sombra
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  • Planchar a temperatura media
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
