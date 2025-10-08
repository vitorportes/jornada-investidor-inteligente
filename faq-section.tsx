"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Este curso é para iniciantes ou preciso ter conhecimento prévio?",
    answer:
      "O curso foi desenvolvido especialmente para iniciantes! Começamos do absoluto zero e te levamos passo a passo até você se tornar um investidor confiante. Não é necessário nenhum conhecimento prévio em investimentos ou finanças.",
  },
  {
    id: 2,
    question: "Quanto tempo leva para completar o curso?",
    answer:
      "O curso tem mais de 8 horas de conteúdo divididas em 13 módulos. Você pode estudar no seu próprio ritmo - alguns alunos completam em 2-3 semanas, outros preferem um ritmo mais tranquilo de 1-2 meses. O importante é que você tem acesso vitalício!",
  },
  {
    id: 3,
    question: "E se eu não tenho dinheiro para investir agora?",
    answer:
      "Perfeito! O curso ensina desde como organizar suas finanças e criar uma reserva de emergência até como começar a investir com pouco dinheiro. Muitos alunos começaram investindo apenas R$ 50-100 por mês e hoje têm carteiras robustas.",
  },
  {
    id: 4,
    question: "Como sei que este curso realmente funciona?",
    answer:
      "Temos mais de 1000 alunos que transformaram suas vidas financeiras. Além disso, oferecemos garantia de 7 dias - se não ficar satisfeito, devolvemos 100% do seu dinheiro. Você também pode ver os depoimentos reais dos nossos alunos.",
  },
  {
    id: 5,
    question: "E se eu não entender algum conteúdo?",
    answer:
      "Você terá suporte especializado durante todo o curso! Além disso, o conteúdo é explicado de forma simples e didática, com exemplos práticos. Você pode rever as aulas quantas vezes quiser e fazer perguntas no suporte.",
  },
  {
    id: 6,
    question: "Por quanto tempo terei acesso ao curso?",
    answer:
      "Seu acesso é VITALÍCIO! Uma vez que você adquire o curso, pode acessar todo o conteúdo para sempre, incluindo futuras atualizações. Não há mensalidades ou taxas adicionais.",
  },
  {
    id: 7,
    question: "Existe garantia? E se eu não gostar?",
    answer:
      "Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso e devolvemos 100% do valor pago, sem perguntas ou burocracias.",
  },
  {
    id: 8,
    question: "Preciso de algum software ou ferramenta especial?",
    answer:
      "Não! Você só precisa de um computador, tablet ou celular com acesso à internet. Todas as ferramentas e plataformas que ensinamos são gratuitas ou já estão incluídas nos bancos e corretoras que recomendamos.",
  },
  {
    id: 9,
    question: "Que resultados posso esperar após o curso?",
    answer:
      "Com este curso, você sairá do absoluto zero e será capaz de investir com segurança, confiança, inteligência, estratégia e independência. Será capaz de tomar decisões de investimentos sozinho, montar a sua própria carteira de investimentos de acordo com o seu perfil e objetivos, bem como montar um plano estratégico para acumular riqueza da forma certa e garantir um futuro próspero para você e sua família.",
  },
  {
    id: 10,
    question: "Por que não aprender de graça no YouTube?",
    answer:
      "Conteúdo gratuito costuma ser fragmentado, contraditório e, muitas vezes, vem de falsos especialistas. Já o nosso curso oferece um método estruturado, passo a passo, testado e comprovado. Com ele, você economiza meses — ou até anos — de pesquisa e evita erros que podem custar muito caro.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section id="faq-section" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#05eff8]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #05eff8 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            <span className="text-highlight-glow font-extrabold">Perguntas Frequentes</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-lg font-medium">Esclarecemos as principais questões sobre o curso</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id)

            return (
              <Card
                key={faq.id}
                className={`backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  isOpen ? "border-[#05eff8]/30 bg-white/10" : "hover:border-white/20"
                }`}
                onClick={() => toggleItem(faq.id)}
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors duration-300">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#05eff8]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#05eff8] font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3
                        className={`font-montserrat font-semibold text-base sm:text-lg text-white leading-relaxed transition-colors duration-300 ${
                          isOpen ? "text-[#05eff8]" : "group-hover:text-[#05eff8]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ChevronDown
                        className={`w-6 h-6 text-gray-400 transition-all duration-500 ${
                          isOpen ? "transform rotate-180 text-[#05eff8]" : "group-hover:text-[#05eff8]"
                        }`}
                      />
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-12 pr-6 sm:pr-10">
                        <div className="w-full h-px bg-gradient-to-r from-[#05eff8]/30 via-[#05eff8]/60 to-[#05eff8]/30 mb-4"></div>
                        <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {isOpen && (
                  <div className="absolute inset-0 rounded-lg opacity-20 pointer-events-none bg-gradient-to-r from-[#05eff8]/10 to-teal-400/10"></div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
