"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Este curso é para iniciantes ou preciso ter conhecimento prévio?",
    answer:
      "O curso foi desenvolvido especialmente para iniciantes! Começamos do zero e, ao longo do dia, você aprenderá passo a passo a organizar suas finanças e investir com segurança. Não é necessário nenhum conhecimento prévio em investimentos ou finanças.",
  },
  {
    id: 2,
    question: "Quanto tempo dura o curso presencial?",
    answer:
      "O curso é uma imersão presencial de 8 horas, em um único dia. É um formato intensivo e prático, pensado para que você saia do evento com clareza e um plano financeiro estruturado.",
  },
  {
    id: 3,
    question: "E se eu ainda não tenho dinheiro para investir?",
    answer:
      "Sem problema! O curso começa exatamente te mostrando como organizar suas finanças e criar uma reserva de emergência. Você aprenderá estratégias para começar a investir mesmo com pouco dinheiro.",
  },
  {
    id: 4,
    question: "Como sei que este curso realmente funciona?",
    answer:
      "Este método já ajudou centenas de pessoas a saírem das dívidas e começarem a investir de forma segura. Além disso, você participa de um encontro presencial e conta com suporte direto pós-evento para tirar dúvidas.",
  },
  {
    id: 5,
    question: "E se eu não entender algum conteúdo durante o curso?",
    answer:
      "Durante o evento, todas as dúvidas são respondidas ao vivo. O ambiente é totalmente interativo e você pode perguntar à vontade. E, após o curso, ainda terá suporte direto por WhatsApp por 7 dias.",
  },
  {
    id: 6,
    question: "O curso é presencial mesmo? Onde ele acontece?",
    answer:
      "Sim! O curso é 100% presencial. Acontece em Macaé/RJ, em um local confortável e preparado para uma experiência completa de aprendizado e networking.",
  },
  {
    id: 7,
    question: "Existe garantia? E se eu não gostar do curso?",
    answer:
      "Sim! Você tem garantia de satisfação total. Se, até o final do curso, sentir que o conteúdo não foi para você, devolvemos 100% do valor investido — sem burocracia.",
  },
  {
    id: 8,
    question: "Preciso levar algo para o curso?",
    answer:
      "Você só precisa levar um caderno ou dispositivo para anotações. Todo o material de apoio digital, como a Planilha de Projeção de Riqueza e o e-book ‘Biblioteca Essencial’, será enviado após o curso.",
  },
  {
    id: 9,
    question: "Que resultados posso esperar após o curso?",
    answer:
      "Você sairá do curso com um plano financeiro pessoal estruturado, entendendo como organizar seu dinheiro, sair das dívidas e começar a investir com segurança. Terá clareza sobre como acumular riqueza e alcançar liberdade financeira.",
  },
  {
    id: 10,
    question: "Por que fazer este curso presencial em vez de aprender online?",
    answer:
      "No curso presencial, você aprende ao vivo, com contato direto comigo, tira dúvidas em tempo real e participa de dinâmicas práticas. Além disso, conecta-se com outros alunos que estão na mesma jornada — algo que nenhum curso online oferece.",
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e3b061]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #e3b061 1px, transparent 0)`,
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
          <p className="text-gray-300 text-sm sm:text-lg font-medium">
            Esclarecemos as principais questões sobre o curso
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id)

            return (
              <Card
                key={faq.id}
                className={`backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  isOpen ? "border-[#e3b061]/30 bg-white/10" : "hover:border-white/20"
                }`}
                onClick={() => toggleItem(faq.id)}
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors duration-300">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#e3b061]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#e3b061] font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3
                        className={`font-montserrat font-semibold text-base sm:text-lg text-white leading-relaxed transition-colors duration-300 ${
                          isOpen ? "text-[#e3b061]" : "group-hover:text-[#e3b061]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ChevronDown
                        className={`w-6 h-6 text-gray-400 transition-all duration-500 ${
                          isOpen ? "transform rotate-180 text-[#e3b061]" : "group-hover:text-[#e3b061]"
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
                        <div className="w-full h-px bg-gradient-to-r from-[#e3b061]/30 via-[#e3b061]/60 to-[#e3b061]/30 mb-4"></div>
                        <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {isOpen && (
                  <div className="absolute inset-0 rounded-lg opacity-20 pointer-events-none bg-gradient-to-r from-[#e3b061]/10 to-teal-400/10"></div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
