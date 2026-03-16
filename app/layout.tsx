import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "@/components/header"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/context/auth-context"
import { CartProvider } from "@/context/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Glamor - Batas, Uniformes y Bordados",
  description:
    "Descubre nuestra colección de batas glamorosas y uniformes profesionales. Calidad, estilo y comodidad en cada prenda.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Script id="hide-v0" strategy="afterInteractive">
          {`
            (function() {
              const hideV0 = () => {
                try {
                  // Only target specific v0 branding elements
                  const selectors = [
                    'a[href*="v0.app"][href*="chat"]',
                    'a[href*="v0.dev"]',
                    'svg[viewBox="0 0 147 70"]'
                  ];
                  
                  selectors.forEach(selector => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(el => {
                      el.style.display = 'none';
                      el.style.visibility = 'hidden';
                      el.style.opacity = '0';
                    });
                  });
                } catch (e) {
                  // Ignore errors silently
                }
              };
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', hideV0);
              } else {
                hideV0();
              }
              
              // Run periodically but less aggressively
              setInterval(hideV0, 5000);
            })();
          `}
        </Script>

        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
