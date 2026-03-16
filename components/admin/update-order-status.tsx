"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export function UpdateOrderStatus({ order }: { order: any }) {
  const [status, setStatus] = useState(order.status)
  const [isUpdating, setIsUpdating] = useState(false)
  const router = useRouter()

  const handleUpdate = async () => {
    if (status === order.status) return

    setIsUpdating(true)
    try {
      const response = await fetch(`/api/admin/orders/${order.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error("Error al actualizar el estado del pedido")
      }

      toast({
        title: "Estado actualizado",
        description: "El estado del pedido ha sido actualizado correctamente.",
      })
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado del pedido.",
        variant: "destructive",
      })
      setStatus(order.status)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Select value={status} onValueChange={setStatus} disabled={isUpdating}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Seleccionar estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pending">Pendiente</SelectItem>
          <SelectItem value="processing">Procesando</SelectItem>
          <SelectItem value="completed">Completado</SelectItem>
          <SelectItem value="cancelled">Cancelado</SelectItem>
        </SelectContent>
      </Select>
      <Button
        onClick={handleUpdate}
        disabled={isUpdating || status === order.status}
        className="bg-primary hover:bg-primary/90 text-white"
      >
        {isUpdating ? "Actualizando..." : "Actualizar"}
      </Button>
    </div>
  )
}
