import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="section-content-width py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1 min-w-0">
            <Link href="/" className="mb-4 sm:mb-6 inline-block">
              <Image
                src="/images/logo-white.png"
                alt="Batas Glamor"
                width={140}
                height={60}
                className="w-32 h-auto sm:w-36 md:w-40 min-w-[100px]"
              />
            </Link>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Batas Glamor es una empresa de confecciones que se caracteriza por la calidad de sus productos, ofreciendo
              una experiencia totalmente exclusiva para sus clientes.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/batasglamor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.facebook.com/batasglamor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Categorías</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/batas-glamor/microfibra"
                  className="hover:text-accent transition-colors text-sm sm:text-base block py-2 min-h-[44px] flex items-center"
                >
                  Batas Glamor
                </Link>
              </li>
              <li>
                <Link
                  href="/uniformes-g"
                  className="hover:text-accent transition-colors text-sm sm:text-base block py-2 min-h-[44px] flex items-center"
                >
                  Uniformes G
                </Link>
              </li>
              <li>
                <Link
                  href="/bordados"
                  className="hover:text-accent transition-colors text-sm sm:text-base block py-2 min-h-[44px] flex items-center"
                >
                  Bordado Personalizado
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Empresa</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/quienes-somos"
                  className="hover:text-accent transition-colors text-sm sm:text-base block py-2 min-h-[44px] flex items-center"
                >
                  Quienes Somos
                </Link>
              </li>
              <li>
                <a
                  href="mailto:batasglamorr@gmail.com"
                  className="flex min-h-[44px] items-center py-2 text-sm transition-colors hover:text-accent sm:text-base"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 min-h-[44px]">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Cúcuta, Colombia </span>
              </li>
              <li className="flex items-start gap-3 min-h-[44px]">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+573001234567" className="text-sm sm:text-base hover:text-accent transition-colors">
                  320 995 1491
                </a>
              </li>
              <li className="flex items-start gap-3 min-h-[44px]">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:batasglamorr@gmail.com"
                  className="text-sm sm:text-base hover:text-accent transition-colors break-all"
                >
                  batasglamorr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm mb-2">
            © {new Date().getFullYear()} Batas Glamor. Todos los derechos reservados.
          </p>
          <p className="text-xs sm:text-sm text-white/80">www.confeccionesglamor.com</p>
        </div>
      </div>
    </footer>
  )
}
