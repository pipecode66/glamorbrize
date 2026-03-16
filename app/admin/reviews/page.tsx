"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { Check, X, Trash2 } from "lucide-react"

interface Review {
  id: number
  product_id: number
  user_id: string
  rating: number
  title: string | null
  content: string | null
  approved: boolean
  created_at: string
  product: {
    name: string
    slug: string
  }
  user: {
    first_name: string | null
    last_name: string | null
    email: string
  }
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("pending")
  const { toast } = useToast()

  useEffect(() => {
    fetchReviews()
  }, [activeTab])

  const fetchReviews = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/admin/reviews?approved=${activeTab === "approved"}`)

      if (!response.ok) {
        throw new Error("Failed to fetch reviews")
      }

      const data = await response.json()
      setReviews(data)
    } catch (error) {
      console.error("Error fetching reviews:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar las reseñas",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ approved: true }),
      })

      if (!response.ok) throw new Error("Failed to approve review")

      toast({
        title: "Reseña aprobada",
        description: "La reseña ha sido aprobada y ahora es visible para todos los usuarios",
      })

      // Actualizar la lista de reseñas
      fetchReviews()
    } catch (error) {
      console.error("Error approving review:", error)
      toast({
        title: "Error",
        description: "No se pudo aprobar la reseña",
        variant: "destructive",
      })
    }
  }

  const handleReject = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/reviews/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) throw new Error("Failed to delete review")

      toast({
        title: "Reseña rechazada",
        description: "La reseña ha sido eliminada",
      })

      // Actualizar la lista de reseñas
      fetchReviews()
    } catch (error) {
      console.error("Error rejecting review:", error)
      toast({
        title: "Error",
        description: "No se pudo rechazar la reseña",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Gestión de Reseñas</h1>

      <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="pending">Pendientes</TabsTrigger>
          <TabsTrigger value="approved">Aprobadas</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {loading ? (
            <p>Cargando reseñas pendientes...</p>
          ) : reviews.length === 0 ? (
            <p>No hay reseñas pendientes de aprobación</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">
                        {review.product.name} - {review.rating} estrellas
                      </h3>
                      <p className="text-sm text-gray-500">
                        Por {review.user.first_name} {review.user.last_name} ({review.user.email})
                      </p>
                      <p className="text-sm text-gray-500">{new Date(review.created_at).toLocaleDateString()}</p>
                      {review.title && <p className="font-medium mt-2">{review.title}</p>}
                      {review.content && <p className="mt-1">{review.content}</p>}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        onClick={() => handleApprove(review.id)}
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Aprobar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleReject(review.id)}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Rechazar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          {loading ? (
            <p>Cargando reseñas aprobadas...</p>
          ) : reviews.length === 0 ? (
            <p>No hay reseñas aprobadas</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">
                        {review.product.name} - {review.rating} estrellas
                      </h3>
                      <p className="text-sm text-gray-500">
                        Por {review.user.first_name} {review.user.last_name} ({review.user.email})
                      </p>
                      <p className="text-sm text-gray-500">{new Date(review.created_at).toLocaleDateString()}</p>
                      {review.title && <p className="font-medium mt-2">{review.title}</p>}
                      {review.content && <p className="mt-1">{review.content}</p>}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleReject(review.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
