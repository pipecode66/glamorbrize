"use client"

import Image from "next/image"
import Link from "next/link"
import { Scissors, Check, Shirt, Palette, Award, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Definimos los colores para la sección de bordados (combinación de Batas Glamor y Uniformes G)
const bordadosColors = {
  primary: "#74A4AB", // Color principal de Batas Glamor
  secondary: "#3E5860", // Color secundario de Batas Glamor
  accent: "#B5DEDA", // Color acento de Batas Glamor
  uniformesGPrimary: "#354358", // Color principal de Uniformes G
  uniformesGSecondary: "#697C87", // Color secundario de Uniformes G
  uniformesGAccent: "#A78786", // Color acento de Uniformes G
  light: "#CFC2B6", // Beige claro de Uniformes G
}

export default function BordadosPage() {

  const handleWhatsAppEmpresarial = () => {
    const phoneNumber = "573209951491"
    const message = encodeURIComponent("Hola, estoy interesado en solicitar una cotización empresarial para el servicio de bordados personalizados")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Bar */}
      <div className="bg-secondary text-white py-2 text-center text-sm">
        {"Envíos GRATIS en pedidos mayores a \$200.000\nAplica solo en Colombia"} 
      </div>

      {/* Hero Banner - Responsive */}
      <section
        className="relative py-6 sm:py-8 md:py-12 lg:py-16"
        style={{ backgroundColor: bordadosColors.light + "10" }}
      >
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Banner Container para imagen */}
            <div className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">
              {/* Espacio para imagen - Reemplaza la src con tu imagen */}
              <Image
                src="/images/design-mode/banner-bordado-computarizado.png"
                alt="Bordados Personalizados - Batas Glamor y Uniformes G"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Sombra adicional para efecto flotante - solo en desktop */}
            <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-lg sm:blur-xl -z-10 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumb - Responsive */}
      <div className="border-b py-2 sm:py-3 md:py-4" style={{ borderColor: bordadosColors.light + "30" }}>
        <div className="container mx-auto px-4">
          <div className="flex text-xs sm:text-sm">
            <Link href="/" className="text-muted hover:text-[#697C87] transition-colors">
              Inicio
            </Link>
            <span className="mx-1 sm:mx-2 text-muted">/</span>
            <span style={{ color: bordadosColors.secondary }}>Bordados Personalizados</span>
          </div>
        </div>
      </div>

      {/* Descripción del Servicio */}
      <section className="py-12 bg-accent/10 mx-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-eagers mb-6 text-secondary">Servicio de Bordado Profesional</h2>
              <p className="mb-4 text-muted">
                En Batas Glamor y Uniformes G ofrecemos un servicio de bordado profesional para personalizar tus prendas
                con logos, nombres o diseños exclusivos, dándole un toque único y profesional a tu imagen corporativa.
              </p>
              <p className="mb-6 text-muted">
                Nuestro equipo de expertos en bordado utiliza tecnología de última generación para garantizar acabados
                perfectos y duraderos en cada prenda, manteniendo la calidad y profesionalismo que nos caracteriza.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h3 className="font-semibold">Personalización Total</h3>
                    <p className="text-muted-foreground">
                      Bordamos tu logo, nombre o diseño en cualquiera de nuestras prendas, adaptándonos a tus
                      necesidades específicas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h3 className="font-semibold">Calidad Profesional</h3>
                    <p className="text-muted-foreground">
                      Utilizamos hilos de alta calidad y maquinaria especializada para garantizar bordados nítidos y
                      duraderos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h3 className="font-semibold">Pedidos Empresariales</h3>
                    <p className="text-muted-foreground">
                      Atendemos pedidos corporativos a partir de 12 unidades, con posibilidad de mezclar entre
                      diferentes productos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/bordado-bata-blanca-2.jpeg"
                  alt="Bordado en Bata Blanca"
                  width={250}
                  height={300}
                  className="rounded-md shadow-md"
                />
                <Image
                  src="/images/bordado-bata-negra-5.jpeg"
                  alt="Bordado en Bata Negra"
                  width={250}
                  height={300}
                  className="rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Ejemplos */}
      <section className="py-12">
        <div className="container mx-28">
          <h2 className="text-3xl font-eagers text-center mb-8">Ejemplos de Nuestros Bordados</h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            Descubre algunos de nuestros trabajos realizados para diferentes empresas y profesionales del sector salud,
            estética y bienestar.
          </p>

          <Tabs defaultValue="uniformes" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-3xl">
                <TabsTrigger value="uniformes">Uniformes Médicos</TabsTrigger>
                <TabsTrigger value="batas">Batas y Estrapleras</TabsTrigger>
                <TabsTrigger value="accesorios">Accesorios</TabsTrigger>
              </TabsList>
            </div>

            {/* Uniformes Tab */}
            <TabsContent value="uniformes" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="flex items-center flex-col px-4 mx-0 gap-0">
                  <Image
                    src="/images/bordado-azules.jpeg"
                    alt="Bordado en Uniformes Azules"
                    width={350}
                    height={400}
                    className="rounded-md shadow-md"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-medium">Uniformes Clínica </h3>
                    <p className="text-sm text-muted">Bordado en diferentes tonos de azul</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/bordado-celeste.jpeg"
                    alt="Bordado en Uniformes Celestes"
                    width={350}
                    height={400}
                    className="rounded-md shadow-md mx-0"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-medium">Uniformes</h3>
                    <p className="text-sm text-muted">Bordado en uniformes color turquesa</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Batas Tab */}
            <TabsContent value="batas" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/bordado-bata-negra-2.jpeg"
                    alt="Bordado en Batas Negras"
                    width={350}
                    height={400}
                    className="rounded-md shadow-md px-0 py-0 my-0"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-medium">Batas Nathaly Studio</h3>
                    <p className="text-sm text-muted">Bordado dorado en batas negras</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/bordado-bata-blanca-1.jpeg"
                    alt="Bordado en Batas Blancas"
                    width={350}
                    height={400}
                    className="rounded-md shadow-md"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-medium">Batas Cataleya Spa</h3>
                    <p className="text-sm text-muted">Bordado morado en batas blancas</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/bordado-bata-negra-4.jpeg"
                    alt="Bordado en Batas Negras"
                    width={350}
                    height={400}
                    className="rounded-md shadow-md"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-medium">Batas Wellness Center</h3>
                    <p className="text-sm text-muted">Bordado blanco en batas negras</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Accesorios Tab */}
            <TabsContent value="accesorios" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/bordado-bata-negra-3.jpeg"
                    alt="Bordado en Toallas Negras"
                    width={350}
                    height={400}
                    className="rounded-md shadow-md"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-medium">Set Completo Nathaly Studio</h3>
                    <p className="text-sm text-muted">Bordado dorado en batas y toallas</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/bordado-bata-negra-5.jpeg"
                    alt="Bordado en Accesorios"
                    width={350}
                    height={400}
                    className="rounded-md shadow-md"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-medium">Set Dr. Carlos Zúñiga</h3>
                    <p className="text-sm text-muted">Bordado blanco en batas y balacas</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/bordado-bata-blanca-3.jpeg"
                    alt="Bordado en Uniformes Blancos"
                    width={350}
                    height={400}
                    className="rounded-md shadow-md"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-medium">Set Centro Cosmetológico</h3>
                    <p className="text-sm text-muted">Bordado azul en uniformes y toallas</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Proceso de Bordado */}
      <section className="py-12 bg-gradient-to-r from-[#354358]/10 to-[#74A4AB]/10">
        <div className="container mx-14">
          <h2 className="text-3xl font-eagers text-center mb-8">Nuestro Proceso de Bordado</h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            Conoce el proceso que seguimos para crear bordados personalizados de alta calidad para tu empresa o negocio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-md shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">1. Diseño</h3>
              <p className="text-muted text-sm">
                Recibimos tu logo o diseño y lo adaptamos para el bordado, ajustando tamaños y colores según tus
                necesidades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">2. Aprobación</h3>
              <p className="text-muted text-sm">
                Te enviamos una muestra digital para tu aprobación, realizando los ajustes necesarios hasta tu
                satisfacción.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">3. Producción</h3>
              <p className="text-muted text-sm">
                Realizamos el bordado en las prendas seleccionadas utilizando hilos de alta calidad y maquinaria
                especializada.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">4. Entrega</h3>
              <p className="text-muted text-sm">
                Realizamos un control de calidad y entregamos tus prendas bordadas listas para usar, con envío a todo el
                país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opciones de Bordado */}
      <section className="py-12">
        <div className="container mx-14">
          <h2 className="text-3xl font-eagers text-center mb-8">Opciones de Bordado</h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            Ofrecemos diferentes opciones de bordado para adaptarnos a tus necesidades y presupuesto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-md p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-4 text-center">Bordado Simple</h3>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/bordado-bata-blanca-2.jpeg"
                  alt="Bordado Simple"
                  width={250}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Logo o texto en un solo color</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Tamaño estándar (hasta 7x7 cm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ubicación en pecho o manga</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ideal para nombres o logos sencillos</span>
                </li>
              </ul>
              <div className="text-center">
                <p className="font-medium text-lg mb-4">Desde $15.000</p>
                <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleWhatsAppEmpresarial}>
                  Cotizar
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-6 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1">Más Popular</div>
              <h3 className="text-xl font-medium mb-4 text-center">Bordado Empresarial</h3>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/bordado-bata-negra-5.jpeg"
                  alt="Bordado Empresarial"
                  width={250}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Logo multicolor (hasta 3 colores)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Tamaño mediano (hasta 10x10 cm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ubicación personalizable</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ideal para logos empresariales</span>
                </li>
              </ul>
              <div className="text-center">
                <p className="font-medium text-lg mb-4">Desde $25.000</p>
                <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleWhatsAppEmpresarial}>
                  Cotizar
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-4 text-center">Bordado Premium</h3>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/bordado-bata-negra-2.jpeg"
                  alt="Bordado Premium"
                  width={250}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Logo complejo (sin límite de colores)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Tamaño grande (hasta 15x15 cm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Múltiples ubicaciones (pecho, espalda, manga)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ideal para diseños detallados y exclusivos</span>
                </li>
              </ul>
              <div className="text-center">
                <p className="font-medium text-lg mb-4">Desde $35.000</p>
                <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handleWhatsAppEmpresarial}>
                  Cotizar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pedidos Empresariales */}
      <section className="py-12 bg-accent/10">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mx-28">
      <div>
        <h2 className="text-3xl font-eagers mb-6">Pedidos Empresariales</h2>
        <p className="mb-6">
          Realizamos pedidos con logo empresarial a partir de 12 unidades. Puedes mezclar entre diferentes
          productos para completar tu pedido, incluyendo batas, uniformes, toallas y accesorios.
        </p>
        <p className="mb-8">
          Nuestro equipo de asesores te guiará en todo el proceso, desde la selección de prendas hasta la
          aprobación final del diseño, garantizando un resultado profesional y acorde a la imagen de tu empresa.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            <span>Calidad garantizada en cada prenda</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            <span>Tiempos de entrega rápidos y puntuales</span>
          </div>
          <div className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-primary" />
            <span>Asesoría en diseño y selección de colores</span>
          </div>
        </div>
        <Button 
          className="mt-8 bg-primary hover:bg-primary/90 text-white"
          onClick={handleWhatsAppEmpresarial}
        >
          Cotizar
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/images/bordado-bata-blanca-3.jpeg"
          alt="Pedidos Empresariales"
          width={250}
          height={300}
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  </div>
</section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-eagers text-center mb-8">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border rounded-md p-6">
                <h3 className="font-medium text-lg mb-2">¿Qué tipo de archivos necesitan para bordar mi logo?</h3>
                <p className="text-muted">
                  Aceptamos archivos en formato JPG, PNG, PDF o AI. Mientras más alta sea la calidad del archivo, mejor
                  será el resultado final del bordado. Si no tienes un archivo de alta calidad, nuestro equipo de diseño
                  puede ayudarte a recrear tu logo.
                </p>
              </div>
              <div className="border rounded-md p-6">
                <h3 className="font-medium text-lg mb-2">¿Cuánto tiempo toma realizar un pedido con bordado?</h3>
                <p className="text-muted">
                  El tiempo de producción depende del volumen del pedido y la complejidad del bordado. En general, para
                  pedidos estándar, el tiempo de entrega es de 7 a 10 días hábiles después de la aprobación del diseño.
                  Para pedidos urgentes, consúltanos por opciones de entrega express.
                </p>
              </div>
              <div className="border rounded-md p-6">
                <h3 className="font-medium text-lg mb-2">¿Puedo bordar diferentes diseños en un mismo pedido?</h3>
                <p className="text-muted">
                  Sí, es posible incluir diferentes diseños en un mismo pedido. Por ejemplo, puedes tener un logo en el
                  pecho y un nombre en la manga, o diferentes nombres para cada prenda. Cada diseño adicional puede
                  tener un costo extra dependiendo de su complejidad.
                </p>
              </div>
              <div className="border rounded-md p-6">
                <h3 className="font-medium text-lg mb-2">¿El bordado se daña con los lavados?</h3>
                <p className="text-muted">
                  Nuestros bordados están hechos con hilos de alta calidad y técnicas profesionales que garantizan su
                  durabilidad. Para mantener el bordado en óptimas condiciones, recomendamos lavar las prendas del
                  revés, con agua fría y detergentes suaves, evitando el uso de blanqueadores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
