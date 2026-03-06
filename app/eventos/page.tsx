"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Calendar, Clock, Radio } from "lucide-react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
})

const navItems = [
  { label: "Curso", href: "/" },
  { label: "E-books", href: "/ebooks" },
  { label: "Palestras", href: "/palestras" },
  { label: "Consultoria", href: "/consultoria" },
]

export default function EventosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={`min-h-screen bg-black ${montserrat.className}`}>
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e3b061]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#e3b061]/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation Header */}
      <header className="relative z-20 w-full">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 mt-6">
            <div className="w-full flex items-center justify-between backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 md:px-6 py-3 shadow-2xl">
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

              <div className="hidden lg:flex lg:items-baseline lg:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-200 hover:text-[#e3b061] transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-200 hover:text-white hover:bg-white/10"
                  aria-label="Abrir menu"
                >
                  {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full right-0 left-0 mx-4 mt-2 rounded-2xl border border-white/20 bg-black/70 backdrop-blur-lg shadow-2xl overflow-hidden">
            <div className="flex flex-col items-center space-y-2 px-4 pt-4 pb-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-200 hover:text-[#e3b061] transition-colors duration-200 text-lg font-medium py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Event Info */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* LIVE Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6 animate-pulse">
                <Radio className="w-5 h-5" />
                <span className="font-bold text-sm tracking-wider">LIVE</span>
              </div>

              {/* Free Badge */}
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-[#e3b061] to-[#d4a259] text-black font-bold text-sm px-4 py-2 rounded-full">
                  100% Gratuito
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                <span className="text-[#e3b061]">Tesouro Direto:</span>
                <br />
                Como fazer o seu dinheiro render muito mais que a poupanca
              </h1>

              {/* Date and Time */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-[#e3b061]" />
                  <span className="font-medium">Quarta-feira, 11/03</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-[#e3b061]" />
                  <span className="font-medium">19h (Horario de Brasilia)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Descubra como investir no Tesouro Direto de forma simples e segura, e faca seu dinheiro trabalhar para voce com rendimentos superiores a poupanca.
              </p>

              {/* WhatsApp CTA Button */}
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base sm:text-lg px-8 py-6 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/30"
                asChild
              >
                <Link
                  href="https://chat.whatsapp.com/KuDoRrEXYn7B5rHZZ9EkD2?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Entrar no Grupo do WhatsApp
                </Link>
              </Button>

              <p className="text-gray-500 text-sm mt-4">
                Receba o link da live e conteudos exclusivos
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#e3b061]/30 to-[#e3b061]/10 rounded-3xl blur-2xl" />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#e3b061]/30 shadow-2xl max-w-md">
                  <Image
                    src="/images/luciano-live.jpeg"
                    alt="Luciano Mangueira - Especialista em Investimentos"
                    width={500}
                    height={600}
                    className="object-cover w-full h-auto"
                    priority
                  />
                  
                  {/* Overlay with presenter name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                    <p className="text-white font-bold text-lg">Luciano Mangueira</p>
                    <p className="text-[#e3b061] text-sm">Especialista em Investimentos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What you'll learn section */}
          <div className="mt-16 lg:mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
              O que voce vai aprender
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Como funciona o Tesouro Direto e por que ele e mais seguro que a poupanca",
                "Os diferentes tipos de titulos e qual e o melhor para o seu perfil",
                "Estrategias praticas para comecar a investir ainda hoje",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e3b061]/20 flex items-center justify-center mb-4">
                    <span className="text-[#e3b061] font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="relative z-10 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">Nao perca essa oportunidade unica!</p>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-6 rounded-full"
            asChild
          >
            <Link
              href="https://chat.whatsapp.com/KuDoRrEXYn7B5rHZZ9EkD2?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Garantir minha vaga gratuita
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}
