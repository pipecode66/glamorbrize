"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AprilGallery from "./april-gallery"
import GreyGallery from "./grey-gallery"
import IzzieGallery from "./izzie-gallery"
import YangGallery from "./yang-gallery"
import QuoteButton from "@/components/quote-button"

const batasMedicasData = {
  april: AprilGallery,
  grey: GreyGallery,
  izzie: IzzieGallery,
  yang: YangGallery,
}

export default function BatasMedicasCategory() {
  const [activeTab, setActiveTab] = useState("april")

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

          {/* Collection Content */}
          {Object.entries(batasMedicasData).map(([key, CollectionGallery]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <CollectionGallery />
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
