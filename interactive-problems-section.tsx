"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Target, TrendingUp, Shield, BookOpen, Users, CheckCircle } from "lucide-react"

const problems = [
  {
    id: 1,
    icon: <TrendingUp className="w-8 h-8" />,
    problem: "Seu dinheiro está parado rendendo migalhas na poupança?",
    solution: "Aprenda a fazer seu dinheiro trabalhar por você com investimentos que superam a inflação com folga",
    color: "from-red-500/20 to-orange-500/20",
    accentColor: "#ef4444",
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8" />,
    problem: "Sente um calafrio só de pensar em ações e bolsa de valores?",
    solution: "Domine os riscos e invista com a segurança de quem tem uma estratégia clara e validada",
    color: "from-yellow-500/20 to-amber-500/20",
    accentColor: "#f59e0b",
  },
  {
    id: 3,
    icon: <BookOpen className="w-8 h-8" />,
    problem: "Se sente perdido com tanta informação e não sabe por onde começar?",
    solution:
      "Tenha acesso a um guia completo e descomplicado que te leva do zero aos seus primeiros investimentos de forma clara e objetiva.",
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "#3b82f6",
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8" />,
    problem: "Acha que investir é só para quem tem muito dinheiro ou é especialista em finanças?",
    solution:
      "Descubra que qualquer pessoa, com qualquer orçamento, pode construir um patrimônio sólido e realizar seus sonhos financeiros com o conhecimento certo.",
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "#8b5cf6",
  },
  {
    id: 5,
    icon: <Target className="w-8 h-8" />,
    problem: "Já tentou investir, mas se frustrou com os resultados ou não viu seu dinheiro crescer?",
    solution: "Aprenda a otimizar seus investimentos e a evitar os erros comuns",
    color: "from-green-500/20 to-emerald-500/20",
    accentColor: "#10b981",
  },
]

export default function InteractiveProblemsSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const handleCardClick = (id: number) => {
    setFlippedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#05eff8]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #05eff8 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl inline-block">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight max-w-4xl">
              Sua vida financeira parece um <span className="text-highlight-glow font-extrabold">campo minado</span>?
            </h2>
            <p className="text-gray-300 text-lg mt-4 font-medium">
              Identifique seu problema e clique para encontrar a saída.
            </p>
          </div>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((item) => {
            const isFlipped = flippedCards.includes(item.id)

            return (
              <div
                key={item.id}
                className="relative h-80 cursor-pointer group"
                onClick={() => handleCardClick(item.id)}
              >
                {/* Card Container */}
                <div className="relative w-full h-full">
                  {!isFlipped ? (
                    /* Front of card - Problem */
                    <Card
                      className={`w-full h-full backdrop-blur-lg bg-gradient-to-br ${item.color} border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}
                    >
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 rounded-xl" style={{ backgroundColor: `${item.accentColor}20` }}>
                            <div style={{ color: item.accentColor }}>{item.icon}</div>
                          </div>
                          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#05eff8] transition-colors duration-300" />
                        </div>

                        <div className="flex-1 flex items-center">
                          <p className="text-white font-medium text-lg leading-relaxed">{item.problem}</p>
                        </div>

                        <div className="mt-4 text-center">
                          <div className="inline-flex items-center text-[#05eff8] text-sm font-medium">
                            Clique para ver a solução
                            <div className="ml-2 w-2 h-2 bg-[#05eff8] rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    /* Back of card - Solution */
                    <Card className="w-full h-full backdrop-blur-lg bg-gradient-to-br from-[#05eff8]/10 to-teal-400/10 border border-[#05eff8]/30 shadow-xl">
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 rounded-xl bg-[#05eff8]/20">
                            <CheckCircle className="w-8 h-8 text-[#05eff8]" />
                          </div>
                          <div className="text-[#05eff8] text-sm font-medium">Solução</div>
                        </div>

                        <div className="flex-1 flex items-center">
                          <p className="text-white font-medium text-lg leading-relaxed">{item.solution}</p>
                        </div>

                        <div className="mt-4 text-center">
                          <div className="inline-flex items-center text-gray-300 text-sm">
                            Clique novamente para voltar
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${item.accentColor}`,
                  }}
                ></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl inline-block">
            <p className="text-gray-300 text-lg mb-4">Reconheceu algum desses problemas?</p>
            <p className="text-[#05eff8] font-bold text-xl">
              A Jornada do Investidor Inteligente tem a solução para todos eles!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
