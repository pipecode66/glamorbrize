"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const amatistaCollection = [
  {
    name: "AMATISTA Coral",
    color: "#FF6B6B",
    images: [
      { src: "/images/amatista-1.jpg", alt: "AMATISTA Coral - Vista frontal" },
      { src: "/images/amatista-2.jpg", alt: "AMATISTA Coral - Vista lateral" },
      { src: "/images/amatista-3.jpg", alt: "AMATISTA Coral - Vista frontal con pose" },
      { src: "/images/amatista-4.jpg", alt: "AMATISTA Coral - Detalle lateral" },
      { src: "/images/amatista-5.jpg", alt: "AMATISTA Coral - Vista caminando" },
      { src: "/images/amatista-6.jpg", alt: "AMATISTA Coral - Pose profesional" },
      { src: "/images/amatista-7.jpg", alt: "AMATISTA Coral - Con estetoscopio" },
      { src: "/images/amatista-8.jpg", alt: "AMATISTA Coral - Vista completa" },
      { src: "/images/amatista-9.jpg", alt: "AMATISTA Coral - Vista posterior" },
      { src: "/images/amatista-10.jpg", alt: "AMATISTA Coral - Pose con estetoscopio" },
    ],
  },
  {
    name: "AMATISTA Cielo",
    color: "#4A90E2",
    images: [
      { src: "/images/amatista-cielo-1.jpg", alt: "AMATISTA Cielo - Vista posterior" },
      { src: "/images/amatista-cielo-2.jpg", alt: "AMATISTA Cielo - Detalle pantalón" },
      { src: "/images/amatista-cielo-3.jpg", alt: "AMATISTA Cielo - Vista lateral" },
      { src: "/images/amatista-cielo-4.jpg", alt: "AMATISTA Cielo - Vista frontal" },
      { src: "/images/amatista-cielo-5.jpg", alt: "AMATISTA Cielo - Con laptop" },
      { src: "/images/amatista-cielo-6.jpg", alt: "AMATISTA Cielo - Pose casual" },
      { src: "/images/amatista-cielo-7.jpg", alt: "AMATISTA Cielo - En pasillo" },
    ],
  },
  {
    name: "AMATISTA Gris",
    color: "#2C3E2D",
    images: [
      { src: "/images/amatista-negro-1.jpg", alt: "AMATISTA Gris - Vista lateral profesional" },
      { src: "/images/amatista-negro-2.jpg", alt: "AMATISTA Gris - Brazos cruzados con estetoscopio" },
      { src: "/images/amatista-negro-3.jpg", alt: "AMATISTA Gris - Vista frontal casual" },
      { src: "/images/amatista-negro-4.jpg", alt: "AMATISTA Gris - Pose con manos en bolsillos" },
      { src: "/images/amatista-negro-5.jpg", alt: "AMATISTA Gris - Vista frontal con cinturón" },
      { src: "/images/amatista-negro-6.jpg", alt: "AMATISTA Gris - Pose dinámica mirando hacia abajo" },
      { src: "/images/amatista-negro-7.jpg", alt: "AMATISTA Gris - Vista frontal con estetoscopio" },
      { src: "/images/amatista-negro-8.jpg", alt: "AMATISTA Gris - Pose profesional completa" },
      { src: "/images/amatista-negro-9.jpg", alt: "AMATISTA Gris - Vista frontal con manos en bolsillos" },
    ],
  },
]

export default function AmatistaCollectionGallery() {
  const [selectedProduct, setSelectedProduct] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const currentProduct = amatistaCollection[selectedProduct]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % currentProduct.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + currentProduct.images.length) % currentProduct.images.length)
  }

  const handleProductChange = (productIndex: number) => {
    setSelectedProduct(productIndex)
    setCurrentImage(0)
  }

  return (
    <div className="space-y-6">
      {/* Selector de productos */}
      <div className="flex justify-center space-x-4">
        {amatistaCollection.map((product, index) => (
          <Button
            key={index}
            variant={selectedProduct === index ? "default" : "outline"}
            onClick={() => handleProductChange(index)}
            className="flex items-center space-x-2"
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: product.color }}></div>
            <span>{product.name}</span>
          </Button>
        ))}
      </div>

      {/* Imagen principal */}
      <div className="relative aspect-[4/5] max-w-sm mx-auto">
        <Image
          src={currentProduct.images[currentImage]?.src || "/placeholder.svg"}
          alt={currentProduct.images[currentImage]?.alt || ""}
          fill
          className="object-cover rounded-lg shadow-lg"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Controles de navegación */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Badge del producto */}
        <Badge className="absolute top-4 left-4 text-white" style={{ backgroundColor: currentProduct.color }}>
          {currentProduct.name}
        </Badge>

        {/* Indicador de imagen actual */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {currentProduct.images.length}
        </div>
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-5 gap-2 max-w-sm mx-auto">
        {currentProduct.images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
              currentImage === index ? "ring-2 ring-offset-2" : "border-gray-200 hover:border-gray-300"
            }`}
            style={{
              borderColor: currentImage === index ? currentProduct.color : undefined,
              ringColor: currentImage === index ? currentProduct.color : undefined,
            }}
            onClick={() => setCurrentImage(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  )
}
