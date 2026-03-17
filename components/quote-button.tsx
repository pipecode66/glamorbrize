"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { openWhatsApp, type QuoteData } from "@/lib/whatsapp"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface QuoteButtonProps {
  productName: string
  productPrice: string
  selectedColor?: string
  selectedSize?: string
  quantity?: number
  className?: string
  style?: React.CSSProperties
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
  style,
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

  const buildQuoteData = (): QuoteData => ({
    customerEmail: customerData.email,
    customerName: customerData.name,
    customerPhone: customerData.phone,
    notes: customerData.notes,
    productName,
    productPrice,
    quantity,
    selectedColor,
    selectedSize,
  })

  const resetForm = () => {
    setCustomerData({
      name: "",
      email: "",
      phone: "",
      notes: "",
    })
  }

  const handleDetailedQuote = () => {
    openWhatsApp(buildQuoteData())
    setIsOpen(false)
    resetForm()
  }

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => setIsOpen(true)} variant={variant} size={size} className={className} style={style}>
        <MessageCircle className="w-4 h-4 mr-2" />
        Cotizar
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cotizar</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-sm">{productName}</p>
              <p className="text-sm text-muted-foreground">{productPrice}</p>
              {selectedColor && <p className="text-sm text-muted-foreground">Color: {selectedColor}</p>}
              {selectedSize && <p className="text-sm text-muted-foreground">Talla: {selectedSize}</p>}
              {quantity > 1 && <p className="text-sm text-muted-foreground">Cantidad: {quantity}</p>}
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="quote-name">Nombre completo</Label>
                <Input
                  id="quote-name"
                  value={customerData.name}
                  onChange={(e) => setCustomerData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <Label htmlFor="quote-email">Email</Label>
                <Input
                  id="quote-email"
                  type="email"
                  value={customerData.email}
                  onChange={(e) => setCustomerData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="quote-phone">Telefono</Label>
                <Input
                  id="quote-phone"
                  value={customerData.phone}
                  onChange={(e) => setCustomerData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div>
                <Label htmlFor="quote-notes">Notas adicionales</Label>
                <Textarea
                  id="quote-notes"
                  value={customerData.notes}
                  onChange={(e) => setCustomerData((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="Informacion adicional sobre tu pedido..."
                  rows={3}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button onClick={handleDetailedQuote} className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Cotizar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
