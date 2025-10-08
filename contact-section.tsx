"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Instagram, MessageCircle, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact-section" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#05eff8]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #05eff8 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
            
            {/* --- TÍTULO AJUSTADO --- */}
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-3 sm:mb-4">
              Ainda tem dúvidas? <span className="text-highlight-glow font-extrabold">Fale conosco!</span>
            </h2>
            
            {/* --- PARÁGRAFO AJUSTADO --- */}
            <p className="text-gray-300 text-sm sm:text-lg font-medium max-w-2xl mx-auto">
              Nossa equipe está pronta pra te ajudar a tomar a melhor decisão
            </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Instagram Card */}
          <Card className="group backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white mb-3 group-hover:text-[#05eff8] transition-colors duration-300">
                Instagram
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Acompanhe dicas diárias sobre investimentos e educação financeira
              </p>
              <a
                href="https://www.instagram.com/proflucianomangueira/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#05eff8] font-semibold text-sm hover:text-white transition-colors duration-300"
              >
                @proflucianomangueira
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="group backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white mb-3 group-hover:text-[#05eff8] transition-colors duration-300">
                WhatsApp
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Tire suas dúvidas diretamente comigo sobre consultoria financeira
              </p>
              <a
                href="https://wa.me/5522992180488?text=Ol%C3%A1%2C%20Luciano!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20sua%20consultoria%20financeira!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#05eff8] font-semibold text-sm hover:text-white transition-colors duration-300"
              >
                Enviar mensagem
              </a>
            </CardContent>
          </Card>

        </div>


      </div>
    </section>
  )
}
