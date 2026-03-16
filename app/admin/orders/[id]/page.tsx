import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"
import { UpdateOrderStatus } from "@/components/admin/update-order-status"

export default async function OrderDetailPage({ params }: { params: { id: string } }) {
  const cookieStore = await cookies()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })

  // Obtener pedido con sus items
  const { data: order } = await supabase
    .from("orders")
    .select(`
      *,
      user:profiles(first_name, last_name, email, phone),
      items:order_items(*)
    `)
    .eq("id", params.id)
    .single()

  if (!order) {
    notFound()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/orders">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Pedido #{order.id.substring(0, 8)}</h1>
        </div>
        <UpdateOrderStatus order={order} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Información del Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="font-medium">Nombre</div>
                <div>
                  {order.user.first_name} {order.user.last_name}
                </div>
              </div>
              <div>
                <div className="font-medium">Email</div>
                <div>{order.user.email}</div>
              </div>
              {order.user.phone && (
                <div>
                  <div className="font-medium">Teléfono</div>
                  <div>{order.user.phone}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información de Envío</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="font-medium">Dirección</div>
                <div>{order.shipping_address}</div>
              </div>
              <div>
                <div className="font-medium">Ciudad</div>
                <div>{order.shipping_city}</div>
              </div>
              <div>
                <div className="font-medium">Departamento</div>
                <div>{order.shipping_state}</div>
              </div>
              {order.shipping_postal_code && (
                <div>
                  <div className="font-medium">Código Postal</div>
                  <div>{order.shipping_postal_code}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información del Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="font-medium">Fecha</div>
                <div>
                  {new Date(order.created_at).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
              <div>
                <div className="font-medium">Estado del Pedido</div>
                <div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "processing"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status === "completed"
                      ? "Completado"
                      : order.status === "processing"
                        ? "Procesando"
                        : "Pendiente"}
                  </span>
                </div>
              </div>
              <div>
                <div className="font-medium">Método de Pago</div>
                <div className="capitalize">{order.payment_method}</div>
              </div>
              <div>
                <div className="font-medium">Estado del Pago</div>
                <div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.payment_status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.payment_status === "completed" ? "Pagado" : "Pendiente"}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Productos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                  <Image
                    src={item.product_image || "/placeholder.svg"}
                    alt={item.product_name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium">
                    <h3>{item.product_name}</h3>
                    <p className="ml-4">${Number(item.price).toLocaleString("es-CO")}</p>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">Cantidad: {item.quantity}</div>
                </div>
              </div>
            ))}

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${Number(order.total).toLocaleString("es-CO")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between font-medium text-base">
                <span>Total</span>
                <span>${Number(order.total).toLocaleString("es-CO")}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
