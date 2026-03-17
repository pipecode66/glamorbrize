"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Heart, ChevronDown, Sparkles, UserCheck, Palette, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useAuth } from "@/context/auth-context"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [batasGlamorOpen, setBatasGlamorOpen] = useState(false)
  const [uniformesGOpen, setUniformesGOpen] = useState(false)
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#3E5860]/95 backdrop-blur supports-[backdrop-filter]:bg-[#3E5860]/90">
      <div className="container flex h-24 md:h-28 items-center min-h-[80px]">
        {/* Logo */}
        <div className="mr-4 flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/design-mode/batas-glamor-vector.png"
              alt="Glamor Logo"
              width={280}
              height={100}
              className="h-20 md:h-24 w-auto px-4 md:px-12 py-3 md:py-5 min-h-[60px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - always visible in desktop mode */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:space-x-4 lg:space-x-6 px-0">
          {/* Batas Glamor Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-white hover:text-gray-300 min-h-[44px] px-2">
              <span>Batas Glamor</span>
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/batas-glamor/microfibra" className="flex items-center space-x-2 min-h-[44px]">
                  <UserCheck className="h-4 w-4" />
                  <span>Microfibra</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/batas-glamor/seda" className="flex items-center space-x-2 min-h-[44px]">
                  <Users className="h-4 w-4" />
                  <span>Seda</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/batas-glamor/antifluido" className="flex items-center space-x-2 min-h-[44px]">
                  <Sparkles className="h-4 w-4" />
                  <span>Antifluido</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Uniformes G Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-white hover:text-gray-300 min-h-[44px] px-2">
              <span>Uniformes G</span>
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/uniformes-g" className="flex items-center space-x-2 min-h-[44px]">
                  <Sparkles className="h-4 w-4" />
                  <span>Línea Priveé</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/uniformes-g/batas-medicas" className="flex items-center space-x-2 min-h-[44px]">
                  <UserCheck className="h-4 w-4" />
                  <span>Batas Médicas</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/bordados"
            className="text-sm font-medium text-white hover:text-gray-300 min-h-[44px] flex items-center px-2"
          >
            <div className="flex items-center space-x-1">
              <Palette className="h-4 w-4" />
              <span>Bordados</span>
            </div>
          </Link>
          <Link
            href="/quienes-somos"
            className="text-sm font-medium text-white hover:text-gray-300 min-h-[44px] flex items-center px-2"
          >
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Quiénes Somos</span>
            </div>
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="ml-auto flex items-center space-x-2 md:space-x-4">
          <Link href={user ? "/account/favorites" : "/wishlist"}>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-300 hover:bg-gray-800 px-0 min-h-[44px] min-w-[44px]"
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favoritos</span>
            </Button>
          </Link>

          {/* Mobile menu - visible only on small screens */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-300 hover:bg-gray-800 min-h-[44px] min-w-[44px]"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 py-9 my-0 mx-0 px-0">
                {/* Batas Glamor Collapsible */}
                <Collapsible open={batasGlamorOpen} onOpenChange={setBatasGlamorOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary min-h-[44px]">
                    <span>Batas Glamor</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${batasGlamorOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/batas-glamor/microfibra"
                      className="block text-base text-muted-foreground hover:text-primary py-2 min-h-[44px]"
                      onClick={() => setIsOpen(false)}
                    >
                      Microfibra
                    </Link>
                    <Link
                      href="/batas-glamor/seda"
                      className="block text-base text-muted-foreground hover:text-primary py-2 min-h-[44px]"
                      onClick={() => setIsOpen(false)}
                    >
                      Seda
                    </Link>
                    <Link
                      href="/batas-glamor/antifluido"
                      className="block text-base text-muted-foreground hover:text-primary py-2 min-h-[44px]"
                      onClick={() => setIsOpen(false)}
                    >
                      Antifluido
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                {/* Uniformes G Collapsible */}
                <Collapsible open={uniformesGOpen} onOpenChange={setUniformesGOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary min-h-[44px]">
                    <span>Uniformes G</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${uniformesGOpen ? "rotate-180" : ""}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/uniformes-g"
                      className="block text-base text-muted-foreground hover:text-primary py-2 min-h-[44px]"
                      onClick={() => setIsOpen(false)}
                    >
                      Línea Priveé
                    </Link>
                    <Link
                      href="/uniformes-g/batas-medicas"
                      className="block text-base text-muted-foreground hover:text-primary py-2 min-h-[44px]"
                      onClick={() => setIsOpen(false)}
                    >
                      Batas Médicas
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  href="/bordados"
                  className="text-lg font-medium hover:text-primary min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Bordados
                </Link>
                <Link
                  href="/quienes-somos"
                  className="text-lg font-medium hover:text-primary min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Quiénes Somos
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
