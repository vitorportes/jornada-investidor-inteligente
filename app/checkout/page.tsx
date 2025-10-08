"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CreditCard, QrCode, Copy, Check, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

// Código PIX
const PIX_CODE =
  "00020126800014br.gov.bcb.pix0111023301657060243InvestingPro - Curso Investidor Inteligente5204000053039865406397.005802BR5924LUCIANO GARCIA MANGUEIRA6005MACAE62290525nT2pxdbEDpvaGnJWT21xngM0z63048815"

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
)

export default function CheckoutPage() {
  const [copied, setCopied] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<"mercadopago" | "pix" | null>(null)

  const handleCopyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Erro ao copiar:", err)
    }
  }

  const handleMercadoPagoClick = () => {
    // Redirecionar para o link do Mercado Pago/Eduzz
    window.open("https://chk.eduzz.com/60EEEOK603", "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-[#e3b061]/30">
      {/* Fundo Temático */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-black/90 to-black"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full max-w-7xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(227,176,97,0.15),rgba(255,255,255,0))]"
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao Início</span>
          </Link>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-300">Pagamento Seguro</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header da Página */}
          <MotionWrapper>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                Finalize seu <span className="text-[#e3b061]">Pagamento</span>
              </h1>
              <p className="text-lg text-gray-300">Escolha a forma de pagamento que preferir</p>
            </div>
          </MotionWrapper>

          {/* Resumo do Pedido */}
          <MotionWrapper delay={0.1}>
            <Card className="mb-8 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Jornada do Investidor Inteligente</h3>
                    <p className="text-gray-400">Acesso vitalício ao curso completo</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through">R$ 497,00</div>
                    <div className="text-3xl font-bold text-[#e3b061]">R$ 197,00</div>
                    <div className="text-sm text-gray-300">ou 12x R$ 20,14</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* Opções de Pagamento */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mercado Pago / Cartão de Crédito */}
            <MotionWrapper delay={0.2}>
              <Card
                className={`group relative overflow-hidden border transition-all duration-300 cursor-pointer ${
                  selectedMethod === "mercadopago"
                    ? "border-[#e3b061] bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                }`}
                onClick={() => setSelectedMethod("mercadopago")}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#e3b061]/20">
                      <CreditCard className="h-8 w-8 text-[#e3b061]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">Cartão de Crédito</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Pague de forma segura com o cartão de crédito ou boleto através do Mercado Pago.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-300 mb-2">
                      ⚠️ <strong>Importante:</strong> Após o pagamento, você receberá um e-mail de confirmação.
                    </p>
                    <p className="text-sm text-[#e3b061] font-semibold">
                      Portanto, informe o seu melhor e-mail no checkout.
                    </p>
                  </div>

                  <Button
                    onClick={handleMercadoPagoClick}
                    className="w-full bg-[#00a8ff] hover:bg-[#0094e0] text-white font-bold text-lg py-6 mb-4 transition-all duration-300 hover:scale-105"
                  >
                    Pague com Mercado Pago
                  </Button>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/10">
                    <Image
                      src="/images/payment-methods/visa.svg"
                      alt="Visa"
                      width={40}
                      height={25}
                      className="opacity-70"
                    />
                    <Image
                      src="/images/payment-methods/mastercard.svg"
                      alt="Mastercard"
                      width={40}
                      height={25}
                      className="opacity-70"
                    />
                    <Image
                      src="/images/payment-methods/amex.svg"
                      alt="American Express"
                      width={40}
                      height={25}
                      className="opacity-70"
                    />
                    <Image
                      src="/images/payment-methods/elo.svg"
                      alt="Elo"
                      width={40}
                      height={25}
                      className="opacity-70"
                    />
                    <Image
                      src="/images/payment-methods/pix.svg"
                      alt="PIX"
                      width={28}
                      height={28}
                      className="opacity-70"
                    />
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>

            {/* PIX */}
            <MotionWrapper delay={0.3}>
              <Card
                className={`group relative overflow-hidden border transition-all duration-300 cursor-pointer ${
                  selectedMethod === "pix"
                    ? "border-[#e3b061] bg-white/10"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                }`}
                onClick={() => setSelectedMethod("pix")}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#e3b061]/20">
                      <QrCode className="h-8 w-8 text-[#e3b061]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">PIX</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Utilize o QR Code abaixo e envie o comprovante para o número{" "}
                        <strong className="text-white">(22) 99218-0488</strong>.
                      </p>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-white p-4 rounded-xl">
                      <Image src="/images/qrcode-pix.png" alt="QR Code PIX" width={200} height={200} />
                    </div>
                  </div>

                  {/* Código PIX */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <label className="text-sm font-semibold text-gray-300 mb-2 block">Código PIX:</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={PIX_CODE}
                        readOnly
                        className="flex-1 bg-gray-900/50 border border-white/10 rounded-lg px-3 py-2 text-xs text-gray-300 font-mono"
                      />
                      <Button
                        onClick={handleCopyPixCode}
                        variant="outline"
                        size="sm"
                        className="flex-shrink-0 border-[#e3b061] text-[#e3b061] hover:bg-[#e3b061] hover:text-black bg-transparent"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-1" />
                            Copiar
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-[#e3b061]/10 border border-[#e3b061]/30 rounded-lg p-4">
                    <p className="text-sm text-gray-300 text-center">
                      💬 Após realizar o pagamento, envie o comprovante via WhatsApp para{" "}
                      <a
                        href="https://wa.me/5522992180488"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e3b061] font-bold hover:underline"
                      >
                        (22) 99218-0488
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>

          {/* Garantia */}
          <MotionWrapper delay={0.4}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
                <ShieldCheck className="h-6 w-6 text-green-500" />
                <span className="text-gray-300">
                  <strong className="text-white">7 dias de garantia</strong> - Satisfação garantida ou seu dinheiro de
                  volta
                </span>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </main>
    </div>
  )
}
