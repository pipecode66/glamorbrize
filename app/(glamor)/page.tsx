"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

import ProductGallery from "@/components/product-gallery"
import ServiceCard from "@/components/service-card"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"

const showBordadosNavigation = false

export default function Home() {
  const handleWhatsAppQuote = () => {
    const phoneNumber = "573156614208"
    const message = encodeURIComponent("Hola, me gustaría solicitar una cotización")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Static Banner */}
<section className="relative w-full">
  <div 
    className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full overflow-hidden cursor-pointer"
    onClick={handleWhatsAppQuote}
  >
    {/* Desktop Image - shows on devices with mouse/trackpad */}
    <div className="w-full h-full">
      <Image
        src="/images/banner-desktop.png"
        alt="Lujo a tu medida - Confecciones Glamor"
        fill
        className="desktop-device-image object-cover object-center"
        priority
        sizes="100vw"
      />
    </div>
    {/* Mobile Image - shows on touch devices */}
    <div className="w-full h-full">
      <Image
        src="/images/banner-mobile.png"
        alt="Lujo a tu medida - Confecciones Glamor"
        fill
        className="mobile-device-image object-cover object-center"
        priority
        sizes="100vw"
      />
    </div>
  </div>
</section>

      {/* Servicios */}
<section className="py-12 sm:py-16 md:py-20">
  <div className="section-content-width">
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4 px-4">
      Nuestros Servicios
    </h2>
    <p className="text-center text-muted max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 text-sm sm:text-base">
      Ofrecemos soluciones personalizadas para profesionales y empresas que buscan destacar con productos de calidad.
    </p>

    <div
      className={`grid grid-cols-1 gap-6 px-4 sm:gap-8 ${
        showBordadosNavigation ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      <div className="h-full">
        <Link href="/batas-glamor/microfibra" passHref>
          <div className="cursor-pointer h-full">
            <ServiceCard
              title="Batas Glamor"
              description="Batas de alta calidad para profesionales de la estética, salud y bienestar. Diseños exclusivos y personalizados."
              icon="Sparkles"
            />
          </div>
        </Link>
      </div>

      <div className="h-full">
        <Link href="/uniformes-g" passHref>
          <div className="cursor-pointer h-full">
            <ServiceCard
              title="Uniformes G"
              description="Uniformes empresariales y corporativos personalizados. Incluye el bordado del logo de tu empresa."
              icon="Users"
            />
          </div>
        </Link>
      </div>

      {showBordadosNavigation && (
        <div className="h-full">
          <Link href="/bordados" passHref>
            <div className="cursor-pointer h-full">
              <ServiceCard
                title="Bordado Personalizado"
                description="Servicio de bordado profesional para personalizar tus prendas. Aplicamos logos en diversas prendas."
                icon="Scissors"
              />
            </div>
          </Link>
        </div>
      )}
    </div>
  </div>
</section>

      {/* Productos Destacados */}
      <section className="py-12 sm:py-16 md:py-20 bg-accent-2/20">
        <div className="section-content-width">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4 px-4">
            Productos Destacados
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 text-sm sm:text-base">
            Descubre nuestras prendas más vendidas, elaboradas con materiales de primera calidad y diseños exclusivos.
          </p>

          <ProductGallery />

          <div className="text-center mt-8 sm:mt-12 px-4"></div>
        </div>
      </section>

      {/* Materiales */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary text-white">
        <div className="section-content-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center px-4">
            <div className="order-2 lg:order-1">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-center lg:text-left">
                Materiales de Alta Calidad
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center lg:text-left">
                En Batas Glamor utilizamos únicamente los mejores materiales para garantizar prendas duraderas, cómodas
                y de aspecto profesional.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  <span className="text-base sm:text-lg">Microfibra de alta resistencia</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  <span className="text-base sm:text-lg">Telas sedosas Premium</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  <span className="text-base sm:text-lg">Antifluidez certificada</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  <span className="text-base sm:text-lg">Hilos de alta calidad</span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <Link href="/quienes-somos" passHref>
                  <Button className="mt-6 sm:mt-8 bg-accent text-secondary hover:bg-accent/90 font-semibold text-xs sm:text-sm py-2 sm:py-3 min-h-[44px]">
                    Conocer Más
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-sm overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/design-mode/22.png"
                alt="Materiales de alta calidad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-content-width">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4 px-4">
            Nuestros Valores
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 text-sm sm:text-base">
            Pilares fundamentales que guían nuestro trabajo y compromiso con cada cliente
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            <div className="min-w-0">
              <FeatureCard
                title="Innovación"
                description="Experimentamos constantemente nuevas técnicas y tecnologías para ofrecer un producto único y exclusivo."
                icon="Lightbulb"
                bgColor="bg-accent/20"
              />
            </div>

            <div className="min-w-0">
              <FeatureCard
                title="Exclusividad"
                description="Cada prenda es única y diseñada exclusivamente para el cliente ofreciendo una experiencia de alta calidad."
                icon="Star"
                bgColor="bg-primary/20"
              />
            </div>

            <div className="min-w-0">
              <FeatureCard
                title="Calidad"
                description="Nuestros productos están fabricados con materiales de la más alta calidad y técnicas de confección avanzadas."
                icon="Award"
                bgColor="bg-accent-3/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-12 sm:py-16 md:py-20 bg-accent-2/20">
        <div className="section-content-width">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4 px-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 text-sm sm:text-base">
            La opinión de nuestros clientes es el mejor indicador de la calidad de nuestros productos y servicios
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            <div className="min-w-0">
              <TestimonialCard
                name="Laura Martínez"
                profession="Esteticista"
                text="Las batas de Glamor son excepcionales. La calidad del material y los acabados son impecables. Mis clientas siempre preguntan dónde las conseguí."
                rating={5}
              />
            </div>

            <div className="min-w-0">
              <TestimonialCard
                name="Carlos Rodríguez"
                profession="Director Clínica Estética"
                text="Los uniformes para nuestro personal quedaron perfectos. El servicio de personalización es muy profesional y el resultado superó nuestras expectativas."
                rating={5}
              />
            </div>

            <div className="min-w-0">
              <TestimonialCard
                name="Ana Gómez"
                profession="Spa Manager"
                text="El bordado personalizado en nuestras batas es simplemente espectacular. La atención al detalle y la calidad son inigualables."
                rating={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary/10">
        <div className="section-content-width text-center px-4">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">¿Listo para destacar?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a destacar con nuestras prendas de alta calidad y
            diseños exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handleWhatsAppQuote}
              className="bg-primary hover:bg-primary/90 text-white font-semibold w-full sm:w-auto text-sm sm:text-base px-6 py-3 min-h-[44px]"
            >
              Cotizar
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
