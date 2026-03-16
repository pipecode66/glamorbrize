import type React from "react"
import Footer from "@/components/footer"

export default function GlamorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
