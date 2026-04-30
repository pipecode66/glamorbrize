"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmpresarialCategory from "@/components/batas-glamor/empresarial-category"
import KitsEmpresarialesCategory from "@/components/batas-glamor/kits-empresariales-category"
import PersonalCategory from "@/components/batas-glamor/personal-category"
import PreNupcialCategory from "@/components/batas-glamor/prenupcial-category"
import ToallasCobijasCategory from "@/components/batas-glamor/toallas-cobijas-category"

function BatasGlamorContent() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "empresarial"

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-secondary text-white py-2 text-center text-sm">
        Envíos GRATIS en pedidos superiores a $200.000 -- APLICA SOLO A COLOMBIA --
      </div>

      <section className="relative h-[50vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920&text=Batas+Glamor"
            alt="Colección Batas Glamor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 flex h-full items-center justify-center text-white">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/logo-white.png"
                alt="Batas Glamor"
                width={200}
                height={80}
                className="drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
              />
            </div>
            <p className="text-lg max-w-2xl mx-auto px-4">
              Productos de alta calidad para profesionales de la estética, salud y bienestar con diseños exclusivos.
            </p>
          </div>
        </div>
      </section>

      <div className="border-b py-4">
        <div className="container">
          <div className="flex text-sm">
            <Link href="/" className="text-muted hover:text-primary">
              Inicio
            </Link>
            <span className="mx-2 text-muted">/</span>
            <span>Batas Glamor</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue={activeTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid h-auto w-full max-w-5xl grid-cols-1 gap-2 sm:grid-cols-5">
                <TabsTrigger value="empresarial">Empresarial</TabsTrigger>
                <TabsTrigger value="kits-empresariales">Kits empresariales</TabsTrigger>
                <TabsTrigger value="toallas-cobijas">Toallas y Cobijas</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="prenupcial">Prenupcial</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="empresarial">
              <EmpresarialCategory />
            </TabsContent>

            <TabsContent value="kits-empresariales">
              <KitsEmpresarialesCategory />
            </TabsContent>

            <TabsContent value="toallas-cobijas">
              <ToallasCobijasCategory />
            </TabsContent>

            <TabsContent value="personal">
              <PersonalCategory />
            </TabsContent>

            <TabsContent value="prenupcial">
              <PreNupcialCategory />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 bg-accent-2/20">
        <div className="container">
          <h2 className="text-3xl font-eagers text-center mb-8">Pedidos empresariales</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Realizamos pedidos con logo empresarial a partir de 12 unidades. Puedes mezclar entre productos para
              completar tu pedido.
            </p>
            <p className="text-lg mb-8">
              Contáctanos para obtener una cotización personalizada para tu empresa o negocio.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link
                href="https://wa.me/573156614208?text=Hola,%20quiero%20cotizar%20un%20pedido%20empresarial%20de%20Batas%20Glamor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-medium text-lg mb-2">Envío gratis</h3>
              <p className="text-muted">En pedidos superiores a $200.000</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Garantía de calidad</h3>
              <p className="text-muted">Materiales premium y acabados perfectos</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Personalización</h3>
              <p className="text-muted">Bordado con tu logo o nombre</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function BatasGlamorPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Cargando...</div>}>
      <BatasGlamorContent />
    </Suspense>
  )
}
