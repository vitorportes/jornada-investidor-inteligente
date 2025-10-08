import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AuthorSection() {
  return (
    <section id="author-section" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e3b061]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #e3b061 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Com quem você <span className="text-highlight-glow font-extrabold">irá aprender</span>
          </h2>
        </div>

        {/* Grid do Autor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          {/* Foto do Autor */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-base md:max-w-lg">
              <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl overflow-hidden rounded-2xl p-0">
                <CardContent className="p-0">
                  <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/author-photo.jpg"
                      alt="Professor e Educador Financeiro Luciano G. Mangueira"
                      fill
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Texto do Autor */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="font-montserrat font-bold text-3xl text-white mb-2">
                  Luciano G. Mangueira, MSc
                </h3>
                <div className="w-16 h-0.5 bg-[#e3b061] mx-auto lg:mx-0"></div>
              </div>

              <div className="space-y-4 text-gray-300 text-base leading-relaxed text-center lg:text-left">
                <p>
                  Mestrado em Gestão (UFF/RJ), Pós-graduação em Investimentos Financeiros (FGV/SP), Pós-graduação em
                  Gestão de Projetos (PUC/RJ). Educador Financeiro, Consultor, Palestrante, Empreendedor e Professor
                  Universitário há 20 anos. Mas o que realmente me define não são os títulos – é a{" "}
                  <span className="text-[#e3b061] font-semibold">
                    paixão por transformar vidas através da Educação Financeira
                  </span>
                  .
                </p>
                <p>
                  Depois de muitos anos estudando, errando, aprendendo e investindo na prática, entendi que{" "}
                  <span className="text-white font-semibold">
                    o maior problema das pessoas não é a falta de dinheiro
                  </span>{" "}
                  — é a falta de clareza, direção e autonomia para tomar decisões financeiras com confiança.
                </p>
                <p>
                  Minha missão é te guiar para que você{" "}
                  <span className="text-[#e3b061] font-semibold">
                    assuma o controle da sua vida financeira, construa um caminho sólido rumo à prosperidade e nunca
                    mais se sinta perdido quando o assunto for dinheiro.
                  </span>
                </p>
              </div>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl p-0">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-[#e3b061] mb-2">20+</div>
                  <div className="text-gray-300 text-sm">Anos de Experiência</div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl p-0">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-[#e3b061] mb-2">1000+</div>
                  <div className="text-gray-300 text-sm">Vidas Transformadas</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
