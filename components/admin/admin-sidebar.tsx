import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  ShoppingBag,
  Tags,
  Package,
  Users,
  Settings,
  ImageIcon,
  FileText,
  CreditCard,
  Star,
} from "lucide-react"

interface AdminSidebarProps {
  className?: string
}

export function AdminSidebar({ className }: AdminSidebarProps) {
  const navItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Productos",
      href: "/admin/products",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      title: "Categorías",
      href: "/admin/categories",
      icon: <Tags className="h-5 w-5" />,
    },
    {
      title: "Pedidos",
      href: "/admin/orders",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Reseñas",
      href: "/admin/reviews",
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: "Imágenes",
      href: "/admin/images",
      icon: <ImageIcon className="h-5 w-5" />,
    },
    {
      title: "Clientes",
      href: "/admin/customers",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Pagos",
      href: "/admin/payments",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Contenido",
      href: "/admin/content",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Configuración",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Administración</h2>
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-md px-2 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
