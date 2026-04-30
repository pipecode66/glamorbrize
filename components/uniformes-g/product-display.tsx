"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import QuoteButton from "@/components/quote-button"

interface ColorVariant {
  name: string
  color: string
  description: string
  images: string[]
  sizes?: string[]
}

interface ComplementaryProduct {
  name: string
  price: number
  description?: string
}

interface SizeVariant {
  images?: string[]
  description?: string
}

interface ProductDisplayProps {
  id: number
  name: string
  basePrice: number
  pricing: Record<string, number>
  variantPricing?: Record<string, Record<string, number>>
  sizeVariants?: Record<string, SizeVariant>
  description: string
  colorVariants: ColorVariant[]
  specs: Array<{ name: string; value: string }>
  features: string[]
  colors: string[]
  sizes: string[]
  sizeLabel?: string
  badgeLabel?: string
  uniformesGColors?: {
    primary: string
    secondary: string
    accent: string
    accent2: string
    accent3: string
    light?: string
    darkGray?: string
    lightGray?: string
    white: string
    black: string
  }
  complementaryProduct?: ComplementaryProduct
  complementaryProducts?: ComplementaryProduct[]
}

const defaultPalette = {
  primary: "#354358",
  secondary: "#697C87",
  accent: "#A78786",
  accent2: "#7E6863",
  accent3: "#98837A",
  light: "#CFC2B6",
  white: "#FFFFFF",
  black: "#000000",
}

export default function ProductDisplay({
  name,
  basePrice,
  pricing,
  variantPricing,
  sizeVariants,
  description,
  colorVariants,
  specs,
  features,
  colors,
  sizes,
  sizeLabel = "Talla",
  badgeLabel = "Línea Privée",
  uniformesGColors,
  complementaryProduct,
  complementaryProducts = [],
}: ProductDisplayProps) {
  const palette = {
    ...defaultPalette,
    ...uniformesGColors,
    light: uniformesGColors?.light ?? uniformesGColors?.lightGray ?? defaultPalette.light,
  }

  const [selectedColor, setSelectedColor] = useState(colorVariants[0]?.name || colors[0] || "")
  const [selectedSize, setSelectedSize] = useState(colorVariants[0]?.sizes?.[0] || sizes[0] || "")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentVariant = colorVariants.find((variant) => variant.name === selectedColor) || colorVariants[0]
  const availableSizes = currentVariant?.sizes ?? sizes
  const availableSizesKey = availableSizes.join("|")
  const currentSizeVariant = selectedSize ? sizeVariants?.[selectedSize] : undefined
  const currentImages = currentSizeVariant?.images ?? currentVariant?.images ?? []
  const currentDescription = currentSizeVariant?.description ?? description
  const sizePrice = selectedSize ? pricing[selectedSize] : undefined
  const selectedVariantPricing = variantPricing?.[selectedColor]
  const currentPrice = selectedVariantPricing ? selectedVariantPricing[selectedSize] ?? basePrice : sizePrice ?? basePrice
  const extraProducts = useMemo(
    () => (complementaryProduct ? [complementaryProduct, ...complementaryProducts] : complementaryProducts),
    [complementaryProduct, complementaryProducts],
  )

  const handleColorChange = (colorName: string) => {
    setSelectedColor(colorName)
    setCurrentImageIndex(0)
  }

  useEffect(() => {
    if (availableSizes.length === 0) {
      if (selectedSize) {
        setSelectedSize("")
      }
      return
    }

    if (!availableSizes.includes(selectedSize)) {
      setSelectedSize(availableSizes[0])
    }
  }, [availableSizes, availableSizesKey, selectedSize])

  const formatPrice = (price: number) =>
    price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })

  const leftFeatures = features.slice(0, Math.ceil(features.length / 2))
  const rightFeatures = features.slice(Math.ceil(features.length / 2))

  return (
    <div className="mx-auto max-w-7xl rounded-lg bg-white p-4 shadow-lg sm:p-6 md:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="relative mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-lg bg-gray-50 sm:max-w-sm">
            <Image
              src={currentImages[currentImageIndex] || "/placeholder.svg"}
              alt={`${name} - ${selectedSize || selectedColor || "principal"}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
            />
          </div>

          {currentImages.length > 1 && (
            <div className="mx-auto grid max-w-sm grid-cols-4 gap-2 sm:grid-cols-5">
              {currentImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square overflow-hidden rounded-md border-2 transition ${
                    currentImageIndex === index ? "shadow-md" : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ borderColor: currentImageIndex === index ? palette.primary : undefined }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${name} - vista ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1
              className="text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-left"
              style={{ color: palette.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              {name}
            </h1>
            <div className="mt-3 flex items-center justify-center gap-3 lg:justify-start">
              <span
                className="text-2xl font-bold sm:text-3xl"
                style={{ color: palette.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                {formatPrice(currentPrice)}
              </span>
              <Badge variant="secondary" className="text-xs sm:text-sm">
                {badgeLabel}
              </Badge>
            </div>
          </div>

          <p
            className="max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-left"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {currentDescription}
          </p>

          {extraProducts.length > 0 && (
            <div className="space-y-3">
              <h3
                className="text-center text-base font-semibold sm:text-lg lg:text-left"
                style={{ color: palette.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Complementos disponibles
              </h3>
              <div className="space-y-2">
                {extraProducts.map((product, index) => (
                  <div
                    key={`${product.name}-${index}`}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3 sm:p-4"
                  >
                    <div>
                      <h4 className="text-sm font-semibold sm:text-base">{product.name}</h4>
                      {product.description && (
                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{product.description}</p>
                      )}
                    </div>
                    <span className="text-lg font-bold sm:text-xl" style={{ color: palette.primary }}>
                      {formatPrice(product.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {colorVariants.length > 0 && colors.length > 0 && (
            <div className="space-y-3">
              <h3
                className="text-center text-base font-semibold sm:text-lg lg:text-left"
                style={{ color: palette.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Color: {selectedColor}
              </h3>
              <div className="flex justify-center gap-2 lg:justify-start">
                {colorVariants.map((variant) => (
                  <button
                    key={variant.name}
                    type="button"
                    onClick={() => handleColorChange(variant.name)}
                    className={`h-6 w-6 rounded-full border-2 transition-all sm:h-7 sm:w-7 ${
                      selectedColor === variant.name
                        ? "border-gray-800 ring-2 ring-offset-2"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{
                      backgroundColor: variant.color,
                      boxShadow: selectedColor === variant.name ? `0 0 0 2px ${palette.light}` : undefined,
                    }}
                    title={variant.name}
                  />
                ))}
              </div>
            </div>
          )}

          {availableSizes.length > 0 && (
            <div className="space-y-3">
              <h3
                className="text-center text-base font-semibold sm:text-lg lg:text-left"
                style={{ color: palette.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                {sizeLabel}
              </h3>
              <div className="mx-auto grid max-w-md grid-cols-2 gap-2 sm:grid-cols-3 lg:mx-0">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size)
                      setCurrentImageIndex(0)
                    }}
                    className={`min-h-10 rounded-md border-2 px-2 py-2 text-xs font-medium transition-all sm:text-sm ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {specs.length > 0 && (
            <div className="space-y-3">
              <h3
                className="text-center text-lg font-semibold sm:text-xl lg:text-left"
                style={{ color: palette.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Medidas y detalles
              </h3>
              <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {specs.map((spec) => (
                  <div key={`${spec.name}-${spec.value}`} className="rounded-md border border-gray-200 bg-gray-50 p-3">
                    <dt className="text-xs font-semibold uppercase text-gray-500">{spec.name}</dt>
                    <dd className="mt-1 text-sm font-medium text-gray-800">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <QuoteButton
            productName={name}
            productPrice={formatPrice(currentPrice)}
            selectedColor={selectedColor || undefined}
            selectedSize={selectedSize || undefined}
            selectedSizeLabel={sizeLabel}
            className="w-full py-3 text-sm font-semibold sm:py-4 sm:text-base md:text-lg"
            style={{
              backgroundColor: palette.primary,
              color: palette.white,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
            }}
          />

          {features.length > 0 && (
            <div className="space-y-4">
              <h3
                className="text-center text-lg font-semibold sm:text-xl lg:text-left"
                style={{ color: palette.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                Características
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[leftFeatures, rightFeatures].map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-2">
                    {column.map((feature, index) => (
                      <div key={`${feature}-${index}`} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600 sm:h-5 sm:w-5" />
                        <span
                          className="text-xs text-muted-foreground sm:text-sm"
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <h3
              className="text-center text-lg font-semibold sm:text-xl lg:text-left"
              style={{ color: palette.primary, fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Instrucciones de cuidado
            </h3>
            <div className="space-y-2">
              {[
                "Lavar a temperatura no mayor a 30 °C",
                "No usar blanqueador",
                "Secar a la sombra",
                "Planchar a temperatura media",
              ].map((instruction) => (
                <p key={instruction} className="text-xs sm:text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  • {instruction}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
