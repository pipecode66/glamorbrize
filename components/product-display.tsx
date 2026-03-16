"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Minus, Plus, Heart, Share2, Star } from "lucide-react"
import QuoteButton from "@/components/quote-button"

interface ProductSpec {
  name: string
  value: string
}

interface ComplementaryProduct {
  name: string
  price: number
  description?: string
}

interface ProductDisplayProps {
  id: number | string
  name: string
  price: number
  description: string
  images: string[]
  specs?: ProductSpec[]
  features?: string[]
  colors?: string[]
  sizes?: string[]
  category?: string
  complementaryProduct?: ComplementaryProduct // Nueva propiedad
}

export default function ProductDisplay({
  id,
  name,
  price,
  description,
  images,
  specs = [],
  features = [],
  colors = [],
  sizes = [],
  category = "",
  complementaryProduct, // Nueva prop
}: ProductDisplayProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(colors[0] || "")
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleQuantityChange = (increment: boolean) => {
    if (increment) {
      setQuantity((prev) => prev + 1)
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="aspect-square overflow-hidden rounded-lg border bg-gray-50">
          <Image
            src={images[selectedImage] || "/placeholder.svg"}
            alt={`${name} - Vista ${selectedImage + 1}`}
            width={600}
            height={600}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Thumbnail Images */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-md border-2 ${
                  selectedImage === index ? "border-primary" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${name} - Miniatura ${index + 1}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
              {category && (
                <Badge variant="secondary" className="mt-1">
                  {category}
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-red-500" : ""}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-3xl font-bold">{formatPrice(price)}</p>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Complementary Product Section - NUEVA SECCIÓN */}
        {complementaryProduct && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{complementaryProduct.name}</h3>
                {complementaryProduct.description && (
                  <p className="text-sm text-muted-foreground mt-1">{complementaryProduct.description}</p>
                )}
              </div>
              <div>
                <p className="text-2xl font-bold">{formatPrice(complementaryProduct.price)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Color Selection */}
        {colors.length > 0 && (
          <div>
            <Label className="text-base font-medium">Color</Label>
            <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="mt-2">
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem value={color} id={`color-${color}`} />
                    <Label htmlFor={`color-${color}`} className="cursor-pointer">
                      {color}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Size Selection */}
        {sizes.length > 0 && (
          <div>
            <Label className="text-base font-medium">Talla</Label>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="mt-2">
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`} className="cursor-pointer">
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Quantity */}
        <div>
          <Label className="text-base font-medium">Cantidad</Label>
          <div className="flex items-center space-x-2 mt-2">
            <Button variant="outline" size="icon" onClick={() => handleQuantityChange(false)} disabled={quantity <= 1}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => handleQuantityChange(true)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quote Buttons */}
        <div className="space-y-3">
          <QuoteButton
            productName={name}
            productPrice={formatPrice(price)}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            className="w-full"
          />
        </div>

        {/* Additional Info Tabs */}
        {(specs.length > 0 || features.length > 0) && (
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              {specs.length > 0 && <TabsTrigger value="specs">Especificaciones</TabsTrigger>}
              {features.length > 0 && <TabsTrigger value="features">Características</TabsTrigger>}
            </TabsList>

            {specs.length > 0 && (
              <TabsContent value="specs" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <dl className="space-y-3">
                      {specs.map((spec, index) => (
                        <div key={index} className="flex justify-between">
                          <dt className="font-medium">{spec.name}:</dt>
                          <dd className="text-muted-foreground">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
            )}

            {features.length > 0 && (
              <TabsContent value="features" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        )}
      </div>
    </div>
  )
}
