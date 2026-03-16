"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export function DeleteCategoryButton({ id, hasProducts }: { id: number; hasProducts: boolean }) {
  const [open, setOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (hasProducts) {
      toast({
        title: "No se puede eliminar",
        description: "Esta categoría tiene productos asociados. Elimina o reasigna los productos primero.",
        variant: "destructive",
      })
      setOpen(false)
      return
    }

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Error al eliminar la categoría")
      }

      toast({
        title: "Categoría eliminada",
        description: "La categoría ha sido eliminada correctamente.",
      })
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo eliminar la categoría.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setOpen(false)
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(true)}
        className="text-red-500 hover:text-red-700 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              {hasProducts
                ? "Esta categoría tiene productos asociados. Elimina o reasigna los productos primero."
                : "Esta acción no se puede deshacer. La categoría será eliminada permanentemente."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault()
                handleDelete()
              }}
              disabled={isDeleting || hasProducts}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              {isDeleting ? "Eliminando..." : "Eliminar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
