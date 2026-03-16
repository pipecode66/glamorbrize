import type React from "react"
import UniformesGFooter from "@/components/uniformes-g-footer"

export default function UniformesGLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <UniformesGFooter />
    </>
  )
}
