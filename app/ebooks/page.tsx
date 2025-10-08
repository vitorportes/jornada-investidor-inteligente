"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Download, GraduationCap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode, type ElementType } from "react";

// --- ARQUITETURA DE DADOS ---
// Conteúdo da página centralizado em um único objeto para máxima manutenibilidade.

const pageData = {
  hero: {
    title: "E-books Exclusivos",
    subtitle: "Adquira nossos e-books e comece sua jornada rumo à independência financeira. Conteúdo prático e objetivo para transformar sua relação com o dinheiro.",
  },
  ebooks: [
    { id: 1, icon: BookOpen, title: "Aprenda a Investir em Renda Fixa", description: "Guia completo para investimentos seguros e previsíveis em renda fixa.", gradient: "from-blue-500 to-cyan-500" },
    { id: 2, icon: BookOpen, title: "Como investir em Ações", description: "Estratégias e fundamentos para investir na bolsa de valores com segurança.", gradient: "from-green-500 to-emerald-500" },
    { id: 3, icon: BookOpen, title: "Educação Financeira", description: "Base sólida para organizar suas finanças e tomar decisões inteligentes.", gradient: "from-purple-500 to-pink-500" },
    { id: 4, icon: BookOpen, title: "Fundos Imobiliários (FIIs)", description: "Como investir em imóveis através dos FIIs e gerar renda passiva.", gradient: "from-orange-500 to-red-500" },
    { id: 5, icon: BookOpen, title: "Mentalidade de Investidor", description: "Desenvolva a psicologia certa para investir com disciplina e estratégia.", gradient: "from-teal-500 to-cyan-500" },
    { id: 6, icon: BookOpen, title: "Como se livrar das Dívidas", description: "Estratégias práticas para quitar dívidas e reorganizar sua vida financeira.", gradient: "from-yellow-500 to-amber-500" },
    { id: 7, icon: BookOpen, title: "Como investir no Tesouro Direto", description: "Guia completo para investir nos títulos públicos do governo brasileiro.", gradient: "from-indigo-500 to-violet-500" },
  ],
  cta: {
    title: "Quer ir além dos e-books?",
    subtitle: "Conheça a Jornada do Investidor Inteligente e transforme sua vida financeira.",
    buttonText: "Conhecer o Curso Completo",
    buttonLink: "/",
  }
};

// --- ARQUITETURA DE COMPONENTES DE UI ---

const MotionWrapper = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
    }}
  >
    {children}
  </motion.div>
);

const EbookCard = ({ ebook, index }: { ebook: typeof pageData.ebooks[0], index: number }) => {
  const Icon = ebook.icon;
  return (
    <MotionWrapper delay={index * 0.05}>
      <Card className="group flex h-full flex-col overflow-hidden border-white/10 bg-white/[.03] transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/5 hover:-translate-y-2">
        <CardContent className="flex flex-grow flex-col p-6 text-center">
          <div className="relative mb-6">
            <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${ebook.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`} />
            <div className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${ebook.gradient} shadow-lg shadow-black/20`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
              {ebook.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">{ebook.description}</p>
          </div>
          <div className="mt-6">
            <Button size="sm" disabled className="w-full font-semibold">
              <Download className="mr-2 h-4 w-4" />
              Em Breve
            </Button>
          </div>
        </CardContent>
      </Card>
    </MotionWrapper>
  );
};

// --- COMPONENTE PRINCIPAL (PÁGINA) ---

export default function EbooksPageV1() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-cyan-500/30">
      {/* Fundo Temático Unificado */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-black/90 to-black" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-7xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,200,255,0.15),rgba(255,255,255,0))]" />

      {/* Header Fixo Consistente */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao Início</span>
          </Link>
          <Button asChild className="hidden sm:inline-flex" variant="secondary">
            <Link href={pageData.cta.buttonLink}>
              <GraduationCap className="mr-2 h-4 w-4" />
              Curso Completo
            </Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-24 sm:pt-28">
        {/* Seção Hero */}
        <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <MotionWrapper>
            <BookOpen className="mx-auto h-14 w-14 text-cyan-400" />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {pageData.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
              {pageData.hero.subtitle}
            </p>
          </MotionWrapper>
        </section>

        {/* E-books Grid */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pageData.ebooks.map((ebook, i) => (
              <EbookCard key={ebook.id} ebook={ebook} index={i} />
            ))}
          </div>
        </section>
        
        {/* Seção de CTA Final */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-2 md:-inset-4">
              <div className="mx-auto h-full w-full max-w-4xl rounded-3xl bg-gradient-to-tr from-cyan-600/50 to-blue-600/50 opacity-20 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gray-900/70 p-[1px] text-center backdrop-blur-sm ring-1 ring-white/10">
              <div className="rounded-[23px] bg-gray-950/90 px-6 py-24 sm:px-16">
                 <MotionWrapper>
                   <div className="mx-auto max-w-2xl">
                     <GraduationCap className="mx-auto h-12 w-12 text-cyan-400" />
                     <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">{pageData.cta.title}</h2>
                     <p className="mt-6 text-lg leading-8 text-gray-300">{pageData.cta.subtitle}</p>
                     <div className="mt-10 flex items-center justify-center">
                       <Button size="lg" className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 px-10 text-lg font-bold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 hover:brightness-110" asChild>
                         <Link href={pageData.cta.buttonLink}>
                           {pageData.cta.buttonText}
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
