"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface Module {
  id: number
  title: string
  description: string
  image: string
  duration: string
}

const modules: Module[] = [
  {
    id: 1,
    title: "Primeiros Passos",
    description:
      "Aqui começa sua jornada. Você vai entender como funciona o curso, quais os objetivos e o que esperar ao longo do caminho.",
    image: "/images/modules/module-1.png",
    duration: "5 min",
  },
  {
    id: 2,
    title: "Educação Financeira",
    description:
      "Antes de investir, é essencial entender o básico. Neste módulo, você vai aprender como organizar suas finanças e controlar gastos.",
    image: "/images/modules/module-2.png",
    duration: "28 min",
  },
  {
    id: 3,
    title: "Mentalidade de Investidor",
    description:
      "Investir começa na mente. Aqui você vai desenvolver a mentalidade certa para investir com estratégia e fugir das armadilhas emocionais.",
    image: "/images/modules/module-3.png",
    duration: "29 min",
  },
  {
    id: 4,
    title: "Como funcionam os investimentos",
    description:
      "Descubra como o mercado financeiro funciona de forma simples e prática. Você vai aprender os princípios fundamentais.",
    image: "/images/modules/module-4.png",
    duration: "23 min",
  },
  {
    id: 5,
    title: "Principais tipos de investimento",
    description:
      "Explore o universo dos investimentos: renda fixa, ações, fundos, imóveis, criptomoedas e muito mais.",
    image: "/images/modules/module-5.png",
    duration: "4 min",
  },
  {
    id: 6,
    title: "Renda Fixa",
    description:
      "Segurança e previsibilidade. Entenda tudo sobre Tesouro Direto, CDBs, LCIs, LCAs e outros ativos de renda fixa.",
    image: "/images/modules/module-6.png",
    duration: "129 min",
  },
  {
    id: 7,
    title: "Fundos de Investimento",
    description:
      "Invista com praticidade e diversificação. Aprenda como funcionam os fundos, suas vantagens, riscos e taxas.",
    image: "/images/modules/module-7.png",
    duration: "12 min",
  },
  {
    id: 8,
    title: "Fundos Imobiliários (FIIs)",
    description:
      "Invista em imóveis de forma inteligente e acessível, e aprenda a gerar renda passiva todos os meses.",
    image: "/images/modules/module-8.png",
    duration: "32 min",
  },
  {
    id: 9,
    title: "Ações",
    description:
      "Aprenda a investir em empresas, entender a Bolsa de Valores e como montar uma estratégia de crescimento.",
    image: "/images/modules/module-9.png",
    duration: "55 min",
  },
  {
    id: 10,
    title: "ETFs, Cripto e Futuros",
    description:
      "Explore ativos modernos: ETFs, criptomoedas e uma introdução aos contratos futuros com foco em segurança.",
    image: "/images/modules/module-10.png",
    duration: "8 min",
  },
  {
    id: 11,
    title: "Montando sua carteira ideal",
    description:
      "Aplique tudo na prática, montando sua carteira de acordo com seu perfil, objetivos e prazo, com confiança.",
    image: "/images/modules/module-11.png",
    duration: "7 min",
  },
  {
    id: 12,
    title: "Como criar renda passiva",
    description:
      "Transforme seus investimentos em uma fonte de renda recorrente e construa sua liberdade financeira.",
    image: "/images/modules/module-12.png",
    duration: "8 min",
  },
  {
    id: 13,
    title: "Plano de Aposentadoria",
    description:
      "Monte um plano de aposentadoria eficiente, realista e seguro, para viver com tranquilidade no futuro.",
    image: "/images/modules/module-13.png",
    duration: "32 min",
  },
]

const ModuleCard = ({
  module,
  isExpanded,
  onToggle,
}: { module: Module; isExpanded: boolean; onToggle: () => void }) => {
  return (
    <Card className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-0 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-[#e3b061]/10">
      {/* Imagem colada no topo */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={module.image || "/placeholder.svg"}
          alt={`Imagem ilustrativa do módulo: ${module.title}`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Véu com movimento suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-transform duration-500 ease-in-out group-hover:-translate-y-full pointer-events-none"></div>
      </div>

      {/* Cabeçalho do módulo */}
      <CardHeader
        onClick={onToggle}
        className="flex cursor-pointer flex-row items-center justify-between p-6"
        aria-expanded={isExpanded}
      >
        <h3 className="flex-1 pr-4 font-bold text-white transition-colors group-hover:text-[#e3b061]">
          {module.title}
        </h3>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 transition-colors ${
              isExpanded ? "text-[#e3b061]" : "text-gray-400 group-hover:text-[#e3b061]"
            }`}
          />
        </motion.div>
      </CardHeader>

      {/* Animação de expansão do conteúdo */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-sm leading-relaxed text-gray-300">{module.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default function CourseModulesSection() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)

  const handleToggle = (moduleId: number) => {
    setExpandedModule((prev) => (prev === moduleId ? null : moduleId))
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e3b061]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#d4a259]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-3 sm:mb-4">
            O <span className="text-highlight-glow font-extrabold">mapa completo</span> da sua jornada financeira
          </h2>

          <p className="font-montserrat text-gray-300 text-sm sm:text-lg font-medium max-w-3xl mx-auto">
            Cada módulo foi cuidadosamente estruturado para conduzir você, passo a passo, do zero absoluto à total
            confiança na hora de investir.
          </p>
        </div>

        {/* Grade de módulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isExpanded={expandedModule === module.id}
              onToggle={() => handleToggle(module.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
