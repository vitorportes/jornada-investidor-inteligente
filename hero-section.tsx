"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Cormorant_Garamond, Montserrat } from "next/font/google"

// Configurar a fonte Cormorant para a logo
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
})

// Configurar a fonte Montserrat para uso explícito no componente
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
})

// Dados de navegação para evitar repetição (Princípio DRY)
const navItems = [
  { label: "Sobre o Autor", targetId: "author-section" },
  { label: "E-books", href: "/ebooks" },
  { label: "Palestras", href: "/palestras" },
  { label: "Consultoria", href: "/consultoria" },
  { label: "Depoimentos", targetId: "testimonials-section" },
  { label: "Dúvidas", targetId: "faq-section" },
  { label: "Contato", targetId: "contact-section" },
]

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const renderNavItem = (item, isMobile = false) => {
    const className = `text-gray-200 hover:text-[#e3b061] transition-colors duration-200 text-sm font-medium ${
      isMobile ? "py-3 text-lg" : ""
    }`

    if (item.href) {
      return (
        <Link key={item.label} href={item.href} className={className} onClick={() => isMobile && setIsMenuOpen(false)}>
          {item.label}
        </Link>
      )
    }

    return (
      <button key={item.label} onClick={() => handleNavClick(item.targetId)} className={className}>
        {item.label}
      </button>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Responsive Background Images */}
      <div className="absolute inset-0">
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero-desktop-new.png')` }}
        />
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero-mobile-new.png')` }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Navigation Header */}
      <header className="relative z-20 w-full">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 mt-6">
            <div className="w-full flex items-center justify-between backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 md:px-6 py-3 shadow-2xl">
              {/* Brand */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo-nova.svg"
                    alt="Luciano Mangueira Logo"
                    width={120}
                    height={40}
                    className="h-9 sm:h-10 w-auto"
                  />
                </Link>
              </div>

              {/* Navigation Links - Desktop */}
              <div className="hidden lg:flex lg:items-baseline lg:space-x-8">
                {navItems.map((item) => renderNavItem(item))}
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-200 hover:text-white hover:bg-white/10"
                  aria-label="Abrir menu"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full right-0 left-0 mx-4 mt-2 rounded-2xl border border-white/20 bg-black/70 backdrop-blur-lg shadow-2xl overflow-hidden animate-in fade-in-20 slide-in-from-top-4"
          >
            <div className="flex flex-col items-center space-y-2 px-4 pt-4 pb-6">
              {navItems.map((item) => renderNavItem(item, true))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="h-[calc(100vh-140px)] flex items-start pt-10 md:items-center md:pt-0">
          <div className="w-full max-w-7xl mx-auto">
            <div className="md:max-w-2xl lg:max-w-3xl md:ml-0 lg:ml-8">
              <div className="md:text-left text-center">
                <div className="mb-4 md:mb-8">
                  <div
                    className="font-montserrat font-bold leading-none mb-2"
                    style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", color: "#e3b061" }}
                  >
                    II Jornada
                  </div>
                  <div
                    className="font-montserrat font-bold text-white leading-none mb-2"
                    style={{ fontSize: "clamp(2.4rem, 9vw, 4.7rem)" }}
                  >
                    INVESTIDOR
                  </div>
                  <div
                    className="font-montserrat font-bold text-white leading-none"
                    style={{
                      fontSize: "clamp(2.4rem, 9vw, 4.7rem)",
                      textShadow: "0 0 10px #e3b061, 0 0 20px #e3b061, 0 0 30px #e3b061, 0 0 40px #e3b061",
                    }}
                  >
                    INTELIGENTE
                  </div>
                </div>

                <div
                  className={`${montserrat.className} text-sm sm:text-lg text-white mb-6 md:mb-10 leading-relaxed font-light max-w-2xl mx-auto md:mx-0 drop-shadow-lg space-y-3`}
                >
                  <p>
                    Em apenas <span className="font-extrabold">8 horas</span>, você irá transformar radicalmente a sua vida financeira.
                  </p>
                </div>

                <div className="flex md:justify-start justify-center">
                  <Button
                    size="lg"
                    className="bg-[#e3b061] hover:bg-[#e3b061]/90 text-black font-bold text-sm sm:text-lg px-6 py-3 sm:px-10 sm:py-5 rounded-full transform transition-all duration-300 hover:scale-105 border-0 uppercase tracking-wide animate-neon-pulse"
                    asChild
                  >
                    <Link href="/checkout">QUERO GARANTIR MINHA VAGA</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center z-10 pointer-events-none">
        <div className="animate-bounce pointer-events-auto">
          <button
            onClick={() => document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Rolar para a próxima seção"
          >
            <ChevronDown className="w-6 h-6 text-[#e3b061] drop-shadow-lg" />
          </button>
        </div>
      </div>
    </div>
  )
}
