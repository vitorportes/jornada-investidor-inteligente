"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Radio } from "lucide-react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
})

export default function EventosPage() {
  return (
    <div className={`min-h-screen bg-black ${montserrat.className}`}>
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e3b061]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#e3b061]/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-20 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Event Info */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              {/* LIVE Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full mb-6 animate-pulse">
                <Radio className="w-5 h-5" />
                <span className="font-bold text-sm tracking-wider">LIVE 100% GRATUITA</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                <span className="text-[#e3b061]">Tesouro Direto:</span>
                <br />
                Como fazer o seu dinheiro render muito mais que a poupança
              </h1>

              {/* Date and Time */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-[#e3b061]" />
                  <span className="font-medium">Quarta-feira, 11/03</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                  <Clock className="w-5 h-5 text-[#e3b061]" />
                  <span className="font-medium">19h (Horário de Brasília)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Descubra como investir no Tesouro Direto de forma simples e segura, e faça seu dinheiro trabalhar para você com rendimentos superiores à poupança.
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
                Receba o link da live e conteúdos exclusivos
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#e3b061]/30 to-[#e3b061]/10 rounded-3xl blur-2xl" />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#e3b061]/30 shadow-2xl max-w-[280px] sm:max-w-xs lg:max-w-md">
                  <Image
                    src="/images/luciano-live.jpeg"
                    alt="Luciano Mangueira - Especialista em Investimentos"
                    width={500}
                    height={600}
                    className="object-cover w-full h-auto"
                    priority
                  />
                  
                  {/* Overlay with presenter name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 lg:p-6">
                    <p className="text-white font-bold text-base lg:text-lg">Luciano Mangueira</p>
                    <p className="text-[#e3b061] text-xs lg:text-sm">Especialista em Investimentos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
