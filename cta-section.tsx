"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Componente auxiliar para o fundo, mantendo a versão refinada.
const AnimatedBackground = () => (
  <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-black">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30" />
    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
  </div>
)

export default function CTASection() {
  const HIGHLIGHT_COLOR = "text-[#e3b061]"

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden font-sans">
      <AnimatedBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl !leading-tight">
            Saia da incerteza e construa seu{" "}
            <span className={`${HIGHLIGHT_COLOR} font-extrabold`}>patrimônio sólido</span> com confiança
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            A <span className="font-bold text-white">Jornada Investidor Inteligente</span> é o único método passo a
            passo que ensina você a dominar seus investimentos, mesmo começando do{" "}
            <span className="font-bold text-white">absoluto zero</span>.
          </p>
        </div>

        <div className="mt-16 flow-root">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg sm:rounded-xl shadow-2xl">
              <Image
                src="/images/before-after-transformation.png"
                alt="Diagrama de transformação financeira, mostrando a transição de 'No aperto todo mês' para 'Tranquilidade financeira'."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/20" />

              {/* --- ESTRUTURA DOS SELOS ATUALIZADA --- */}

              {/* Selo Esquerdo: Fixo no topo-esquerdo em todas as telas */}
              <div className="absolute top-0 left-0 p-2 sm:p-4">
                <div className="backdrop-blur-md bg-red-600/80 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-center">
                  <span className="text-white font-bold text-[10px] leading-none sm:text-sm">No aperto todo mês</span>
                </div>
              </div>

              {/* Selo Direito: Posicionamento responsivo (embaixo no mobile, em cima no desktop) */}
              <div className="absolute bottom-0 right-0 p-2 sm:top-0 sm:bottom-auto sm:p-4">
                <div className="backdrop-blur-md bg-green-500/80 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-center">
                  <span className="text-white font-bold text-[10px] leading-none sm:text-sm">
                    Tranquilidade financeira
                  </span>
                </div>
              </div>

              <div className="absolute top-0 left-1/2 w-px h-full bg-white/20 transform -translate-x-1/2" />
            </div>
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-gray-300">
            Chega de depender dos outros e de ter dúvidas. É hora de{" "}
            <span className={`${HIGHLIGHT_COLOR} font-semibold`}>assumir o controle do seu dinheiro</span> e começar
            sua transformação financeira.
          </p>
        </div>

        {/* Botão CTA revertido ao estilo original solicitado */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            size="lg"
            className="bg-[#e3b061] hover:bg-[#e3b061]/90 text-black font-bold text-sm sm:text-lg px-6 py-3 sm:px-10 sm:py-5 rounded-full transform transition-all duration-300 hover:scale-105 uppercase tracking-wide animate-neon-pulse"
            asChild
          >
            <Link href="/checkout">QUERO GARANTIR MINHA VAGA</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
