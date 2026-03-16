"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/auth-context"
import { toast } from "@/components/ui/use-toast"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export const dynamic = "force-dynamic"

export default function ProfilePage() {
  const { user, profile, isLoading, updateProfile, signOut } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  })
  const [isSaving, setIsSaving] = useState(false)

  // Redirigir si no hay usuario autenticado
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/login?redirectUrl=/account/profile")
    }
  }, [user, isLoading, router])

  // Cargar datos del perfil
  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.first_name || "",
        lastName: profile.last_name || "",
        phone: profile.phone || "",
        address: profile.address || "",
        city: profile.city || "",
        state: profile.state || "",
        postalCode: profile.postal_code || "",
      })
    }
  }, [profile])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      const { error } = await updateProfile(formData)

      if (error) {
        toast({
          title: "Error al actualizar perfil",
          description: error.message,
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Perfil actualizado",
        description: "Tu información ha sido actualizada correctamente.",
      })
    } catch (error) {
      toast({
        title: "Error al actualizar perfil",
        description: "Ha ocurrido un error inesperado.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p>Cargando...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!user || !profile) {
    return null // La redirección se maneja en el useEffect
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="container py-12">
        <h1 className="text-3xl font-semibold mb-8">Mi Cuenta</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="text-xl font-medium mb-4">Información Personal</h2>
              <Separator className="mb-6" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" value={user.email} disabled />
                  <p className="text-xs text-muted-foreground">El correo electrónico no se puede cambiar.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <h3 className="text-lg font-medium mt-8 mb-4">Dirección de Envío</h3>
                <Separator className="mb-6" />

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input id="address" name="address" value={formData.address} onChange={handleChange} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Ciudad</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">Departamento</Label>
                    <Input id="state" name="state" value={formData.state} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Código Postal</Label>
                    <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-white" disabled={isSaving}>
                    {isSaving ? "Guardando..." : "Guardar Cambios"}
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-8">
            <div className="max-w-4xl">
              <h2 className="text-xl font-medium mb-4">Mis Pedidos</h2>
              <Separator className="mb-6" />

              <div className="text-center py-12">
                <p className="text-muted-foreground">No tienes pedidos recientes.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="text-xl font-medium mb-4">Configuración de la Cuenta</h2>
              <Separator className="mb-6" />

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Cambiar Contraseña</h3>
                  <p className="text-muted-foreground mb-4">
                    Puedes cambiar tu contraseña para mantener tu cuenta segura.
                  </p>
                  <Button variant="outline">Cambiar Contraseña</Button>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-2 text-destructive">Cerrar Sesión</h3>
                  <p className="text-muted-foreground mb-4">Cierra sesión en todos los dispositivos.</p>
                  <Button variant="destructive" onClick={signOut}>
                    Cerrar Sesión
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
