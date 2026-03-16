import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"

export default function UniformesGFooter() {
  return (
    <footer style={{ backgroundColor: "#354358", color: "#CFC2B6" }}>
      <div className="section-content-width py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/uniformes-g" className="mb-6 inline-block">
              <Image src="/images/uniformes-g-logo-amplio.png" alt="Uniformes G" width={160} height={70} />
            </Link>
            <p className="mb-6">
              Uniformes G es una marca especializada en la confección de uniformes médicos, corporativos y para spa,
              ofreciendo exclusividad en cada prenda con diseños modernos y materiales de alta calidad.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/uniformesg.col/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CFC2B6] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/uniformesg.col?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CFC2B6] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@uniformesg.col?_t=zs-8v0t9dfqpiq&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CFC2B6] hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <div className="h-5 w-5 relative">
                  <Image src="/images/tiktok-icon.png" alt="TikTok" fill className="object-contain" />
                </div>
              </a>
              <a
                href="tel:3105586767"
                className="text-[#CFC2B6] hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                <span>320 995 1491</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: "#A78786" }}>
              Categorías
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/uniformes-g?tab=normales" className="hover:text-white transition-colors">
                  Uniformes G
                </Link>
              </li>
              <li>
                <Link href="/uniformes-g?tab=privee" className="hover:text-white transition-colors">
                  Línea Priveé
                </Link>
              </li>
              <li>
                <Link href="/bordados" className="hover:text-white transition-colors">
                  Bordado Personalizado
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: "#A78786" }}>
              Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/quienes-somos" className="hover:text-white transition-colors">
                  Quienes Somos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: "#A78786" }}>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#A78786] mt-0.5" />
                <span>Cúcuta</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#A78786] mt-0.5" />
                <span>320 995 1491</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#A78786] mt-0.5" />
                <span>info@uniformesg.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#CFC2B6]/20 mt-12 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Uniformes G. Todos los derechos reservados.</p>
          <p className="mt-2">www.confeccionesglamor.com</p>
        </div>
      </div>
    </footer>
  )
}
