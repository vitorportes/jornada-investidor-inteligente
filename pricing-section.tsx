"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ShieldCheck, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// --- ARQUITETURA DE DADOS E COMPONENTES ---

// 1. Dados centralizados para fácil manutenção.
const pricingData = {
  originalPrice: "497",
  discountedPriceInstallments: "40,40",
  discountedPriceFull: "397",
  ctaLink: "/checkout",
  features: [
    "Imersão completa e presencial",
    "Acesso à comunidade VIP no WhatsApp",
    "Planilha de Projeção de Riqueza",
    "E-book 'Biblioteca Essencial'",
    "Aulas sobre o Método Barsi",
    "Suporte direto pós-evento",
    "Garantia de satisfação total",
  ],
  paymentMethods: [
    { src: "/images/payment-methods/visa.svg", alt: "Visa", width: 40, height: 25 },
    { src: "/images/payment-methods/mastercard.svg", alt: "Mastercard", width: 40, height: 25 },
    { src: "/images/payment-methods/amex.svg", alt: "American Express", width: 40, height: 25 },
    { src: "/images/payment-methods/elo.svg", alt: "Elo", width: 40, height: 25 },
    { src: "/images/payment-methods/pix.svg", alt: "PIX", width: 28, height: 28 },
  ],
}

// 2. Componente de Feature.
const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#e3b061] mt-0.5" />
    <span className="text-sm sm:text-base text-gray-300">{children}</span>
  </li>
)

// --- COMPONENTE PRINCIPAL (SERVER COMPONENT) ---

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-[#e3b061]/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 translate-x-1/2 translate-y-1/2 bg-[#d4a259]/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #e3b061 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Um único investimento para sua <span className="text-[#e3b061]">transformação financeira</span>
          </h2>
        </div>

        {/* Card de Preços */}
        <div className="relative mx-auto mt-16 max-w-lg lg:mt-20 lg:max-w-4xl">
          <div className="absolute -inset-4 z-0 rounded-3xl bg-gradient-to-r from-[#e3b061]/15 to-[#d4a259]/15 opacity-75 blur-2xl" />

          <Card className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-xl">
            {/* O grid agora se aplica apenas a partir do breakpoint 'md' */}
            <div className="md:grid md:grid-cols-2">
              {/* Coluna da Esquerda: Valor */}
              <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
                <h3 className="text-lg font-semibold text-white text-center md:text-left">O que você recebe:</h3>
                <ul className="mt-6 space-y-4">
                  {pricingData.features.map((feature, index) => (
                    <FeatureItem key={index}>{feature}</FeatureItem>
                  ))}
                </ul>
              </div>

              {/* Coluna da Direita: Preço e Ação */}
              <div className="flex flex-col p-6 text-center md:p-8 md:text-left">
                <div className="flex-grow">
                  <div className="flex justify-center md:justify-start">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-sm font-semibold text-black">
                      <Sparkles className="h-4 w-4" />
                      <span>Oferta de Lançamento</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    De <span className="line-through">R$ {pricingData.originalPrice}</span> por apenas:
                  </p>
                  <p className="mt-2 text-4xl font-bold text-white sm:text-5xl">
                    12x <span className="text-[#e3b061]">R$ {pricingData.discountedPriceInstallments}</span>
                  </p>
                  <p className="mt-1 text-gray-300">ou R$ {pricingData.discountedPriceFull} à vista</p>
                </div>

                <div className="mt-8">
                  <Button
                    size="lg"
                    className="bg-[#e3b061] hover:bg-[#e3b061]/90 text-black font-bold text-sm sm:text-lg px-6 py-3 sm:px-10 sm:py-5 rounded-full transform transition-all duration-300 hover:scale-105 uppercase tracking-wide animate-neon-pulse"
                    asChild
                  >
                    <Link href={pricingData.ctaLink}>QUERO GARANTIR MINHA VAGA</Link>
                  </Button>

                  <div className="mt-6">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                      {pricingData.paymentMethods.map((p) => (
                        <Image key={p.alt} {...p} className="h-6 w-auto opacity-80" />
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                      <ShieldCheck className="h-4 w-4 text-green-500" />
                      <span>Compra 100% segura.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
