import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, MessageCircle, Calculator, Gift, TrendingUp, type LucideCrop as LucideProps } from "lucide-react"
import type { ComponentType } from "react"

// --- ARQUITETURA DE DADOS E COMPONENTES ---

// 1. Tipagem robusta para os dados dos bônus.
interface Bonus {
  id: number
  iconName: keyof typeof IconMap
  title: string
  description: string
  variant: "teal" | "blue" | "green" | "emerald"
}

// 2. Mapeamento de ícones: separa a lógica de qual ícone usar dos dados.
const IconMap: { [key: string]: ComponentType<LucideProps> } = {
  TrendingUp,
  BookOpen,
  MessageCircle,
  Calculator,
}

// 3. Array de dados puro: sem JSX ou classes de CSS, pronto para vir de uma API.
const bonusItems: Bonus[] = [
  {
    id: 1,
    iconName: "TrendingUp",
    title: "Método Barsi em Ação",
    description:
      "Aprenda a estratégia de foco em dividendos do maior investidor do Brasil para construir sua liberdade financeira.",
    variant: "teal",
  },

  {
    id: 3,
    iconName: "MessageCircle",
    title: "Acesso à Comunidade VIP",
    description:
      "Participe do nosso grupo exclusivo no WhatsApp para tirar dúvidas, fazer networking e receber insights em primeira mão.",
    variant: "green",
  },
  {
    id: 4,
    iconName: "Calculator",
    title: "Planilha de Projeção de Riqueza",
    description:
      "Simule a acumulação de capital e projete sua aposentadoria com esta ferramenta inteligente e fácil de usar.",
    variant: "emerald",
  },
]

// 4. Componente de Card extraído, responsável por sua própria apresentação.
const BonusCard = ({ bonus }: { bonus: Bonus }) => {
  const Icon = IconMap[bonus.iconName]

  // Mapeamento de estilos baseado na prop 'variant'.
  const variantStyles = {
    teal: {
      bg: "from-[#e3b061] to-[#d4a259]",
      glow: "shadow-[#e3b061]/20",
      highlight: "text-[#e3b061]",
    },
    blue: {
      bg: "from-sky-500 to-blue-500",
      glow: "shadow-blue-500/20",
      highlight: "text-blue-400",
    },
    green: {
      bg: "from-emerald-500 to-green-500",
      glow: "shadow-green-500/20",
      highlight: "text-green-400",
    },
    emerald: {
      bg: "from-green-600 to-emerald-700",
      glow: "shadow-emerald-600/20",
      highlight: "text-emerald-400",
    },
  }

  const styles = variantStyles[bonus.variant]

  return (
    <Card className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 ease-in-out hover:border-white/20 hover:-translate-y-1">
      <CardContent className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
        {/* Ícone com fundo e brilho dinâmicos */}
        <div className="relative flex-shrink-0">
          <div
            className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${styles.bg} transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div
            className={`absolute inset-0 rounded-2xl blur-lg transition-opacity duration-300 group-hover:opacity-100 ${styles.glow} opacity-0`}
          />
        </div>

        {/* Conteúdo de Texto */}
        <div className="flex flex-col">
          <h3 className={`text-xl font-bold text-white transition-colors duration-300 group-hover:${styles.highlight}`}>
            {bonus.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{bonus.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// 5. Componente principal como Server Component (sem "use client").
export default function BonusContentSection() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background sutil */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-[#e3b061] to-[#d4a259] p-2">
              <Gift className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="text-[#e3b061]"> Bônus exclusivos</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Além do curso completo, sua inscrição garante acesso a estas ferramentas e conteúdos para acelerar
            seus resultados.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2">
          {bonusItems.map((item) => (
            <BonusCard key={item.id} bonus={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
