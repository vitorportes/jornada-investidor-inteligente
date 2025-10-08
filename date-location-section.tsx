"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Coffee, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

const MotionWrapper = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
    }}
  >
    {children}
  </motion.div>
)

const InfoBadge = ({
  icon: Icon,
  label,
  value,
  delay = 0,
}: {
  icon: React.ElementType
  label: string
  value: string
  delay?: number
}) => (
  <MotionWrapper delay={delay}>
    <Card className="group relative overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#e3b061]/50 hover:bg-white/8">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl bg-[#e3b061]/20">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#e3b061]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs sm:text-sm text-gray-400 mb-1">{label}</div>
            <div className="text-sm sm:text-base font-bold text-white truncate">{value}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  </MotionWrapper>
)

export default function DateLocationSection() {
  return (
    <section id="date-location-section" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e3b061]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <MotionWrapper>
            <div className="inline-flex items-center gap-2 bg-[#e3b061]/10 border border-[#e3b061]/30 rounded-full px-4 py-2 mb-4">
              <AlertCircle className="h-4 w-4 text-[#e3b061]" />
              <span className="text-sm font-semibold text-[#e3b061] uppercase tracking-wide">Evento Presencial</span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              DATA E <span className="text-highlight-glow font-extrabold">LOCAL</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 font-semibold">
              Curso Presencial Exclusivo – <span className="text-[#e3b061]">Poucas Vagas Disponíveis!</span>
            </p>
          </MotionWrapper>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Hotel Image */}
          <MotionWrapper delay={0.1}>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hotel-comfort-suites.jpg"
                alt="Comfort Suites Macaé - Local do Evento"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-1">Comfort Suites Macaé</h3>
                <p className="text-gray-300 text-sm">Estrutura completa para o seu aprendizado</p>
              </div>
            </div>
          </MotionWrapper>

          {/* Event Details */}
          <div className="space-y-4">
            <InfoBadge icon={MapPin} label="Local" value="Comfort Suites Macaé" delay={0.15} />
            <InfoBadge icon={Calendar} label="Data" value="25 de Outubro de 2025" delay={0.2} />
            <InfoBadge icon={Clock} label="Horário" value="Das 8h às 17h" delay={0.25} />

            <MotionWrapper delay={0.3}>
              <Card className="border border-[#e3b061]/30 bg-gradient-to-br from-[#e3b061]/10 to-transparent">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Coffee className="h-6 w-6 text-[#e3b061] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">8 Horas Intensivas</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Serão 8 horas intensivas de aprendizado prático, com{" "}
                        <span className="font-semibold text-white">coffee break incluso</span>. Garanta a sua vaga agora
                        mesmo e dê o primeiro passo rumo à sua liberdade financeira!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>

      </div>
    </section>
  )
}
