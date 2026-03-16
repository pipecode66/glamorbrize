import Link from "next/link"
import { Button } from "@/components/ui/button"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { Eye } from "lucide-react"

export default async function AdminOrdersPage() {
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

  // Obtener pedidos con información del usuario
  const { data: orders } = await supabase
    .from("orders")
    .select(`
      *,
      user:profiles(first_name, last_name, email)
    `)
    .order("created_at", { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Pedidos</h1>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
          <div>ID</div>
          <div>Cliente</div>
          <div>Fecha</div>
          <div>Total</div>
          <div>Estado</div>
          <div>Pago</div>
          <div className="text-right">Acciones</div>
        </div>
        <div className="divide-y">
          {orders?.length ? (
            orders.map((order) => (
              <div key={order.id} className="grid grid-cols-7 gap-4 p-4 items-center">
                <div className="text-sm">{order.id.substring(0, 8)}</div>
                <div>
                  <div className="font-medium">
                    {order.user?.first_name} {order.user?.last_name}
                  </div>
                  <div className="text-xs text-muted-foreground">{order.user?.email}</div>
                </div>
                <div className="text-sm">
                  {new Date(order.created_at).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="font-medium">${Number(order.total).toLocaleString("es-CO")}</div>
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
                <div className="flex justify-end">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/admin/orders/${order.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">No hay pedidos disponibles</div>
          )}
        </div>
      </div>
    </div>
  )
}
