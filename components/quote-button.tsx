"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from "lucide-react"
import { openWhatsApp, type QuoteData } from "@/lib/whatsapp"

interface QuoteButtonProps {
  productName: string
  productPrice: string
  selectedColor?: string
  selectedSize?: string
  quantity?: number
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function QuoteButton({
  productName,
  productPrice,
  selectedColor,
  selectedSize,
  quantity = 1,
  className,
  variant = "default",
  size = "default",
}: QuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  const handleQuickQuote = () => {
    const quoteData: QuoteData = {
      productName,
      productPrice,
      selectedColor,
      selectedSize,
      quantity,
    }

    openWhatsApp(quoteData)
  }

  const handleDetailedQuote = () => {
    const quoteData: QuoteData = {
      productName,
      productPrice,
      selectedColor,
      selectedSize,
      quantity,
      customerName: customerData.name,
      customerEmail: customerData.email,
      customerPhone: customerData.phone,
      notes: customerData.notes,
    }

    openWhatsApp(quoteData)
    setIsOpen(false)

    // Reset form
    setCustomerData({
      name: "",
      email: "",
      phone: "",
      notes: "",
    })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {/* Quick Quote Button */}
      <Button onClick={handleQuickQuote} variant={variant} size={size} className={className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle w-4 h-4 mr-2"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
        COTIZACIÓN
      </Button>

      {/* Detailed Quote Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Solicitar Cotización</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Product Info */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-sm">{productName}</p>
              <p className="text-sm text-muted-foreground">{productPrice}</p>
              {selectedColor && <p className="text-sm text-muted-foreground">Color: {selectedColor}</p>}
              {selectedSize && <p className="text-sm text-muted-foreground">Talla: {selectedSize}</p>}
              {quantity > 1 && <p className="text-sm text-muted-foreground">Cantidad: {quantity}</p>}
            </div>

            {/* Customer Form */}
            <div className="space-y-3">
              <div>
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  value={customerData.name}
                  onChange={(e) => setCustomerData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerData.email}
                  onChange={(e) => setCustomerData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={customerData.phone}
                  onChange={(e) => setCustomerData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div>
                <Label htmlFor="notes">Notas adicionales (opcional)</Label>
                <Textarea
                  id="notes"
                  value={customerData.notes}
                  onChange={(e) => setCustomerData((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="Información adicional sobre tu pedido..."
                  rows={3}
                />
              </div>
            </div>

            <Button onClick={handleDetailedQuote} className="w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Enviar Cotización por WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
