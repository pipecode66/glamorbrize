export interface QuoteData {
  productName: string
  productPrice: string
  selectedColor?: string
  selectedSize?: string
  quantity?: number
  customerName?: string
  customerEmail?: string
  customerPhone?: string
  notes?: string
}

export function generateWhatsAppMessage(data: QuoteData): string {
  let message = `¡Hola! Me interesa cotizar el siguiente producto:\n\n`

  message += `📦 *Producto:* ${data.productName}\n`
  message += `💰 *Precio:* ${data.productPrice}\n`

  if (data.selectedColor) {
    message += `🎨 *Color:* ${data.selectedColor}\n`
  }

  if (data.selectedSize) {
    message += `📏 *Talla:* ${data.selectedSize}\n`
  }

  if (data.quantity && data.quantity > 1) {
    message += `🔢 *Cantidad:* ${data.quantity}\n`
  }

  if (data.customerName || data.customerEmail || data.customerPhone) {
    message += `\n👤 *Datos de contacto:*\n`

    if (data.customerName) {
      message += `*Nombre:* ${data.customerName}\n`
    }

    if (data.customerEmail) {
      message += `*Email:* ${data.customerEmail}\n`
    }

    if (data.customerPhone) {
      message += `*Teléfono:* ${data.customerPhone}\n`
    }
  }

  if (data.notes) {
    message += `\n📝 *Notas adicionales:* ${data.notes}\n`
  }

  message += `\n¡Gracias!`

  return encodeURIComponent(message)
}

export function openWhatsApp(data: QuoteData, phoneNumber = "573209951491") {
  const message = generateWhatsAppMessage(data)
  const url = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(url, "_blank")
}
