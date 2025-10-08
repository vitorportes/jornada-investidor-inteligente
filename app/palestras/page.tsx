"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Mic, Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

// --- ARQUITETURA DE DADOS ---
// Nenhuma alteração nos dados nesta versão.

const pageData = {
  hero: {
    title: "Palestras que transformam vidas",
    subtitle: "Educação financeira que inspira e transforma",
  },
  about: {
    paragraphs: [
      "Com mais de duas décadas de experiência como educador financeiro, levo conhecimento prático e transformador para empresas, universidades e eventos em todo o Brasil.",
      "Minhas palestras não são apenas teóricas – são experiências que mudam mentalidades e inspiram ações concretas rumo à independência financeira.",
      "Cada apresentação é cuidadosamente adaptada ao público, combinando conceitos sólidos de educação financeira com casos reais e estratégias práticas que podem ser aplicadas imediatamente.",
    ],
    image: {
      src: "/images/palestra-photo.png",
      alt: "Luciano G. Mangueira palestrando para uma audiência.",
    },
  },
  topics: [
    "Educação Financeira Pessoal",
    "Investimentos Inteligentes",
    "Planejamento de Aposentadoria",
    "Mentalidade de Investidor",
    "Gestão de Riscos",
    "Construção de Renda Passiva",
  ],
  stats: [
    { icon: Users, value: "1.000+", label: "Pessoas Impactadas" },
    { icon: Award, value: "20+", label: "Anos de Experiência" },
  ],
  contact: {
    title: "Quer levar essa transformação para sua empresa ou evento?",
    subtitle: "Entre em contato e vamos conversar sobre como posso contribuir para o crescimento financeiro da sua equipe ou comunidade.",
    whatsappLink: "https://wa.me/5522992180488?text=Ol%C3%A1%2C%20Luciano!%20Gostaria%20de%20contratar%20uma%20palestra%20sobre%20educa%C3%A7%C3%A3o%20financeira.",
  },
};

// --- ARQUITETURA DE COMPONENTES DE UI ---
// Nenhuma alteração na arquitetura dos componentes nesta versão.

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
);

const TopicItem = ({ children, index }: { children: ReactNode; index: number }) => (
  <MotionWrapper delay={index * 0.05}>
    <div className="flex items-center gap-3">
      <CheckCircle className="h-5 w-5 flex-shrink-0 text-cyan-400" />
      <span className="text-gray-300 font-medium">{children}</span>
    </div>
  </MotionWrapper>
);

// --- COMPONENTE PRINCIPAL (PÁGINA) ---

export default function PalestrasPageV1_1() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-cyan-500/30">
      {/* Fundo Temático Unificado */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-black/90 to-black" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-7xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,200,255,0.15),rgba(255,255,255,0))]" />

      {/* Header Fixo Consistente */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao Início</span>
          </Link>
          <Button asChild className="hidden sm:inline-flex shadow-sm shadow-cyan-500/20 transition-all hover:shadow-md hover:shadow-cyan-500/40">
            <Link href="#contact">
              <Mic className="mr-2 h-4 w-4" />
              Solicitar Palestra
            </Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-24 sm:pt-28">
        {/* ... (Seções Hero, Sobre e Temas permanecem inalteradas) ... */}
        <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8 lg:py-20">
            <MotionWrapper>
                <Mic className="mx-auto h-14 w-14 text-cyan-400" />
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {pageData.hero.title}
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
                {pageData.hero.subtitle}
                </p>
            </MotionWrapper>
        </section>
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-10">
              <MotionWrapper>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  {pageData.about.paragraphs.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/((?:duas décadas|experiências que mudam mentalidades|casos reais e estratégias práticas|20 anos de experiência))/g, '<span class="font-semibold text-white">$1</span>').replace(/(independência financeira)/g, '<span class="font-semibold text-cyan-400">$1</span>') }} />
                  ))}
                </div>
              </MotionWrapper>
              <MotionWrapper delay={0.2}>
                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[.03] p-8">
                  <h3 className="text-xl font-bold text-white">Principais Temas Abordados:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-6 gap-y-3 pt-2">
                    {pageData.topics.map((topic, i) => <TopicItem key={i} index={i}>{topic}</TopicItem>)}
                  </div>
                </div>
              </MotionWrapper>
              <MotionWrapper delay={0.4} >
                <div className="grid grid-cols-2 gap-6 pt-4">
                  {pageData.stats.map((stat, i) => (
                    <div key={i} className="text-center rounded-lg bg-white/[.03] p-4 border border-white/10">
                      <stat.icon className="mx-auto h-8 w-8 text-cyan-400 mb-2" />
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>
            <MotionWrapper delay={0.1}>
              <div className="relative aspect-[4/5] w-full lg:sticky lg:top-28">
                <Image
                  src={pageData.about.image.src}
                  alt={pageData.about.image.alt}
                  fill
                  className="rounded-2xl object-cover shadow-2xl shadow-cyan-900/40"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Seção de CTA Final Refinada */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative">
            {/* Elemento de brilho (glow) posicionado atrás do card */}
            <div className="absolute -inset-2 md:-inset-4">
              <div className="mx-auto h-full w-full max-w-4xl rounded-3xl bg-gradient-to-tr from-cyan-600/50 to-blue-600/50 opacity-20 blur-3xl" />
            </div>

            {/* Card principal com borda sutil e fundo escuro */}
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gray-900/70 p-[1px] text-center backdrop-blur-sm ring-1 ring-white/10">
              <div className="rounded-[23px] bg-gray-950/90 px-6 py-24 sm:px-16">
                <MotionWrapper>
                  <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{pageData.contact.title}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">{pageData.contact.subtitle}</p>
                    <div className="mt-10 flex items-center justify-center">
                      <Button size="lg" className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 px-10 text-lg font-bold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 hover:brightness-110" asChild>
                        <Link href={pageData.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                          <Mic className="mr-3 h-5 w-5" />
                          Solicitar Palestra
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
  );
}
