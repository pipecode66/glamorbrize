export interface QuoteData {
  productName: string
  productPrice: string
  selectedColor?: string
  selectedSize?: string
  selectedSizeLabel?: string
  quantity?: number
  customerName?: string
  customerEmail?: string
  customerPhone?: string
  notes?: string
}

export function generateWhatsAppMessage(data: QuoteData): string {
  const lines = [
    "Hola, me interesa cotizar el siguiente producto:",
    "",
    `Producto: ${data.productName}`,
    `Precio: ${data.productPrice}`,
  ]

  if (data.selectedColor) {
    lines.push(`Color: ${data.selectedColor}`)
  }

  if (data.selectedSize) {
    lines.push(`${data.selectedSizeLabel || "Talla"}: ${data.selectedSize}`)
  }

  if (data.quantity && data.quantity > 1) {
    lines.push(`Cantidad: ${data.quantity}`)
  }

  if (data.customerName || data.customerEmail || data.customerPhone) {
    lines.push("", "Datos de contacto:")

    if (data.customerName) {
      lines.push(`Nombre: ${data.customerName}`)
    }

    if (data.customerEmail) {
      lines.push(`Email: ${data.customerEmail}`)
    }

    if (data.customerPhone) {
      lines.push(`Telefono: ${data.customerPhone}`)
    }
  }

  if (data.notes) {
    lines.push("", `Notas adicionales: ${data.notes}`)
  }

  lines.push("", "Gracias.")

  return encodeURIComponent(lines.join("\n"))
}

export function openWhatsApp(data: QuoteData, phoneNumber = "573156614208") {
  const message = generateWhatsAppMessage(data)
  const url = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(url, "_blank", "noopener,noreferrer")
}
