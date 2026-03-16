import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { Package, ShoppingBag, Users, CreditCard } from "lucide-react"

export default async function AdminDashboard() {
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

  // Obtener estadísticas
  const { count: productsCount } = await supabase.from("products").select("*", { count: "exact", head: true })
  const { count: ordersCount } = await supabase.from("orders").select("*", { count: "exact", head: true })
  const { count: usersCount } = await supabase.from("profiles").select("*", { count: "exact", head: true })

  // Calcular ingresos totales
  const { data: orders } = await supabase.from("orders").select("total")
  const totalRevenue = orders?.reduce((sum, order) => sum + Number(order.total), 0) || 0

  // Obtener pedidos recientes
  const { data: recentOrders } = await supabase
    .from("orders")
    .select("*, profiles(first_name, last_name)")
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Productos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{productsCount || 0}</div>
            <p className="text-xs text-muted-foreground">Total de productos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ordersCount || 0}</div>
            <p className="text-xs text-muted-foreground">Total de pedidos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Usuarios</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{usersCount || 0}</div>
            <p className="text-xs text-muted-foreground">Usuarios registrados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString("es-CO")}</div>
            <p className="text-xs text-muted-foreground">Ingresos totales</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mb-4">Pedidos Recientes</h2>
      <div className="border rounded-md">
        <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
          <div>ID</div>
          <div>Cliente</div>
          <div>Fecha</div>
          <div>Estado</div>
          <div className="text-right">Total</div>
        </div>
        <div className="divide-y">
          {recentOrders?.length ? (
            recentOrders.map((order) => (
              <div key={order.id} className="grid grid-cols-5 gap-4 p-4">
                <div className="text-sm">{order.id.substring(0, 8)}</div>
                <div className="text-sm">
                  {order.profiles?.first_name} {order.profiles?.last_name}
                </div>
                <div className="text-sm">
                  {new Date(order.created_at).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="text-sm">
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
                <div className="text-sm text-right">${Number(order.total).toLocaleString("es-CO")}</div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">No hay pedidos recientes</div>
          )}
        </div>
      </div>
    </div>
  )
}
