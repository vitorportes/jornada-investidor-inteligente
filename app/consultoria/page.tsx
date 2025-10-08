"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Target, TrendingUp, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

// --- ARQUITETURA DE DADOS ---
const pageData = {
  consultant: {
    name: "Luciano G. Mangueira",
    title: "Consultor Financeiro",
    image: "/images/consultoria-photo.jpeg",
  },
  services: [
    "Análise completa da sua situação financeira atual",
    "Planejamento estratégico personalizado",
    "Orientação para montagem de carteira de investimentos",
    "Estratégias de otimização tributária",
    "Plano de aposentadoria sob medida",
    "Acompanhamento e ajustes periódicos",
  ],
  processSteps: [
    {
      icon: Target,
      title: "Diagnóstico Inicial",
      description: "Análise completa da sua situação financeira atual, objetivos e perfil de investidor.",
    },
    {
      icon: TrendingUp,
      title: "Estratégia Personalizada",
      description: "Desenvolvimento de um plano financeiro sob medida para seus objetivos específicos.",
    },
    {
      icon: CheckCircle,
      title: "Acompanhamento Contínuo",
      description: "Monitoramento regular dos resultados e ajustes estratégicos quando necessário.",
    },
  ],
  contact: {
    whatsappLink:
      "https://wa.me/5522992180488?text=Ol%C3%A1%2C%20Luciano!%20Gostaria%20de%20agendar%20uma%20conversa%20inicial%20sobre%20consultoria%20financeira.",
  },
}

// --- ARQUITETURA DE COMPONENTES DE UI ---
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

const FeatureItem = ({ children, index }: { children: ReactNode; index: number }) => (
  <MotionWrapper delay={index * 0.1}>
    <li className="flex items-start gap-3">
      <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#e3b061] mt-1" />
      <span className="text-[#e3b061]">{children}</span>
    </li>
  </MotionWrapper>
)

const ProcessStepCard = ({
  icon: Icon,
  title,
  description,
  index,
}: { icon: React.ElementType; title: string; description: string; index: number }) => (
  <MotionWrapper delay={index * 0.15}>
    <Card className="group relative h-full overflow-hidden border border-white/10 bg-white/[.03] text-center transition-all duration-300 hover:border-[#e3b061]/50 hover:bg-white/5 hover:-translate-y-2">
      <CardContent className="p-8">
        <div className="mb-5 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/10 bg-gray-900 transition-colors duration-300 group-hover:border-[#e3b061] group-hover:bg-[#8b6f47]/50">
            <Icon className="h-8 w-8 text-[#e3b061] transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>
        <h4 className="mb-3 text-xl font-bold text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </CardContent>
    </Card>
  </MotionWrapper>
)

// --- COMPONENTE PRINCIPAL (PÁGINA) ---

export default function ConsultoriaPageV4() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-[#e3b061]/30">
      {/* Fundo Temático Unificado */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-black/90 to-black"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-7xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,200,255,0.15),rgba(255,255,255,0))]"
      />

      {/* Header Fixo Consistente */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao Início</span>
          </Link>
          <Button
            asChild
            className="shadow-sm shadow-[#e3b061]/20 transition-all hover:shadow-md hover:shadow-[#e3b061]/40"
          >
            <Link href="#contact">
              <Phone className="mr-2 h-4 w-4" />
              Agendar Consulta
            </Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-20 sm:pt-24">
        <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <MotionWrapper>
            <Target className="mx-auto h-14 w-14 text-[#e3b061]" />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Consultoria Financeira <br /> Personalizada
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300">
              Um plano de ação sob medida para você alcançar a independência financeira com segurança e estratégia.
            </p>
          </MotionWrapper>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-20">
            <div className="lg:col-span-3">
              <MotionWrapper>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Orientação especializada para transformar sua vida financeira.
                </h2>
                <div className="prose prose-invert mt-6 max-w-none text-gray-300 text-lg space-y-4">
                  <p>
                    Com mais de <span className="font-semibold text-white">duas décadas de experiência</span>, ofereço
                    um serviço personalizado que vai muito além de simples conselhos.
                  </p>
                  <p>
                    Cada consultoria é{" "}
                    <span className="font-semibold text-[#e3b061]">única e adaptada à sua realidade</span>, considerando
                    seus objetivos, perfil de risco e sonhos futuros.
                  </p>
                  <p>
                    Meu compromisso é exclusivamente com{" "}
                    <span className="font-semibold text-white">seu sucesso financeiro</span> e sua independência para
                    tomar as melhores decisões.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/[.03] p-8">
                  <h3 className="text-xl font-semibold text-white">O que você recebe na consultoria:</h3>
                  <ul className="mt-6 space-y-4">
                    {pageData.services.map((service, i) => (
                      <FeatureItem key={i} index={i}>
                        {service}
                      </FeatureItem>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
            </div>

            <div className="lg:col-span-2">
              <MotionWrapper>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={pageData.consultant.image || "/placeholder.svg"}
                    alt={`Foto de ${pageData.consultant.name}, ${pageData.consultant.title}`}
                    fill
                    className="rounded-2xl object-cover shadow-2xl shadow-[#8b6f47]/40"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <MotionWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Como Funciona a Consultoria</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Um processo claro e estruturado em três etapas para garantir os melhores resultados.
              </p>
            </div>
          </MotionWrapper>
          <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {pageData.processSteps.map((item, i) => (
              <ProcessStepCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </section>

        {/* SEÇÃO DE CTA ATUALIZADA */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-2 md:-inset-4">
              <div className="mx-auto h-full w-full max-w-4xl rounded-3xl bg-gradient-to-tr from-[#e3b061]/50 to-[#d4a259]/50 opacity-20 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gray-900/70 p-[1px] text-center backdrop-blur-sm ring-1 ring-white/10">
              <div className="rounded-[23px] bg-gray-950/90 px-6 py-24 sm:px-16">
                <MotionWrapper>
                  <div className="mx-auto max-w-2xl">
                    <TrendingUp className="mx-auto h-12 w-12 text-[#e3b061]" />
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Pronto para transformar sua vida financeira?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      Meus clientes alcançam, em média,{" "}
                      <span className="font-semibold text-white">rentabilidade superior a 15% ao ano</span>. Agende uma
                      conversa inicial gratuita e descubra como posso te ajudar.
                    </p>
                    <div className="mt-10 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="h-14 bg-gradient-to-r from-[#e3b061] to-[#d4a259] px-10 text-lg font-bold text-white shadow-lg shadow-[#e3b061]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e3b061]/40 hover:brightness-110"
                        asChild
                      >
                        <Link href={pageData.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                          <Phone className="mr-3 h-5 w-5" />
                          Agendar Agora
                        </Link>
                      </Button>
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
