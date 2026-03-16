"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const amatistaImages = [
  {
    src: "/images/amatista-1.jpg",
    alt: "Uniforme AMATISTA - Vista frontal completa",
  },
  {
    src: "/images/amatista-2.jpg",
    alt: "Uniforme AMATISTA - Vista lateral",
  },
  {
    src: "/images/amatista-3.jpg",
    alt: "Uniforme AMATISTA - Vista frontal con pose",
  },
  {
    src: "/images/amatista-4.jpg",
    alt: "Uniforme AMATISTA - Vista lateral con detalle de bolsillos",
  },
  {
    src: "/images/amatista-5.jpg",
    alt: "Uniforme AMATISTA - Vista frontal caminando",
  },
  {
    src: "/images/amatista-6.jpg",
    alt: "Uniforme AMATISTA - Vista frontal con manos en cintura",
  },
  {
    src: "/images/amatista-7.jpg",
    alt: "Uniforme AMATISTA - Con estetoscopio",
  },
  {
    src: "/images/amatista-8.jpg",
    alt: "Uniforme AMATISTA - Vista completa caminando",
  },
  {
    src: "/images/amatista-9.jpg",
    alt: "Uniforme AMATISTA - Vista posterior",
  },
  {
    src: "/images/amatista-10.jpg",
    alt: "Uniforme AMATISTA - Pose profesional con estetoscopio",
  },
]

export default function AmatistaGallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % amatistaImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + amatistaImages.length) % amatistaImages.length)
  }

  return (
    <div className="space-y-6">
      {/* Imagen principal */}
      <div className="relative aspect-[3/4] max-w-md mx-auto">
        <Image
          src={amatistaImages[currentImage].src || "/placeholder.svg"}
          alt={amatistaImages[currentImage].alt}
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

        {/* Indicador de imagen actual */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {amatistaImages.length}
        </div>
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
        {amatistaImages.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
              currentImage === index
                ? "border-coral-500 ring-2 ring-coral-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  )
}
