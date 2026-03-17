"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AprilGallery from "./april-gallery"
import GreyGallery from "./grey-gallery"
import IzzieGallery from "./izzie-gallery"
import YangGallery from "./yang-gallery"
import QuoteButton from "@/components/quote-button"

const batasMedicasData = {
  april: {
    name: "APRIL",
    description: "Elegancia y funcionalidad en cada detalle",
    images: ["/images/april-1.jpg", "/images/april-2.jpg", "/images/april-3.jpg", "/images/april-4.jpg"],
    component: AprilGallery,
  },
  grey: {
    name: "GREY",
    description: "Sofisticación moderna para el profesional de hoy",
    images: [
      "/images/grey-black-1.jpg",
      "/images/grey-white-1.jpg",
      "/images/grey-black-2.jpg",
      "/images/grey-white-2.jpg",
    ],
    component: GreyGallery,
  },
  izzie: {
    name: "IZZIE",
    description: "Comodidad excepcional para largas jornadas",
    images: ["/images/izzie-1.jpg", "/images/izzie-2.jpg", "/images/izzie-3.jpg", "/images/izzie-4.jpg"],
    component: IzzieGallery,
  },
  yang: {
    name: "YANG",
    description: "Innovación y tecnología en cada fibra",
    images: [
      "/images/yang-pink-1.jpg",
      "/images/yang-green-1.jpg",
      "/images/yang-pink-2.jpg",
      "/images/yang-green-2.jpg",
    ],
    component: YangGallery,
  },
}

export default function BatasMedicasCategory() {
  const [activeTab, setActiveTab] = useState("april")

  const currentCollection = batasMedicasData[activeTab as keyof typeof batasMedicasData]

  return (
    <div className="py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 grid h-auto w-full grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-4">
            <TabsTrigger value="april" className="min-h-[44px] text-sm font-medium">
              APRIL
            </TabsTrigger>
            <TabsTrigger value="grey" className="min-h-[44px] text-sm font-medium">
              GREY
            </TabsTrigger>
            <TabsTrigger value="izzie" className="min-h-[44px] text-sm font-medium">
              IZZIE
            </TabsTrigger>
            <TabsTrigger value="yang" className="min-h-[44px] text-sm font-medium">
              YANG
            </TabsTrigger>
          </TabsList>

          {/* Collection Photos Display */}
          <div className="mb-8 sm:mb-10">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {currentCollection.images.slice(0, 4).map((image, index) => (
                <div
                  key={`${currentCollection.name}-${index}`}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-sm"
                >
                  <Image
                    src={image}
                    alt={`${currentCollection.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 220px"
                  />
                </div>
              ))}
            </div>
            <div className="mx-auto mt-4 max-w-2xl text-center sm:mt-6">
              <h3 className="text-lg font-semibold sm:text-xl">{currentCollection.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{currentCollection.description}</p>
            </div>
          </div>

          {/* Collection Content */}
          {Object.entries(batasMedicasData).map(([key, collection]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <collection.component />
            </TabsContent>
          ))}
        </Tabs>

        {/* Pedidos Empresariales Section */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-50 to-green-50 p-6 sm:mt-16 sm:p-8 md:p-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Pedidos Empresariales</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              ¿Necesitas uniformar a tu equipo médico? Ofrecemos descuentos especiales para pedidos empresariales a
              partir de 12 unidades. Puedes mezclar entre diferentes modelos y colores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton
                productName="Pedido Empresarial - Batas Médicas"
                productPrice="Precio especial por volumen"
                className="w-full bg-primary text-white hover:bg-primary/90 sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
