"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

const testimonials = [
  {
    id: 6,
    name: "Isabelle",
    occupation: "Nutricionista",
    videoId: "LR1LZWClatY",
    videoUrl: "https://www.youtube.com/watch?v=LR1LZWClatY",
    thumbnail: `https://img.youtube.com/vi/LR1LZWClatY/maxresdefault.jpg`,
  },
  {
    id: 1,
    name: "Calebe Tatagiba",
    occupation: "Empresário",
    videoId: "5lVzbWsxA58",
    videoUrl: "https://www.youtube.com/watch?v=5lVzbWsxA58",
    thumbnail: `https://img.youtube.com/vi/5lVzbWsxA58/maxresdefault.jpg`,
  },
  {
    id: 2,
    name: "Isac Mendes",
    occupation: "Professor universitário",
    videoId: "9cRM4W_Oe94",
    videoUrl: "https://www.youtube.com/watch?v=9cRM4W_Oe94",
    thumbnail: `https://img.youtube.com/vi/9cRM4W_Oe94/maxresdefault.jpg`,
  },
    {
    id: 8,
    name: "Danilo",
    occupation: "Gestor de Projetos",
    videoId: "0rmCqlyfg1g",
    videoUrl: "https://www.youtube.com/watch?v=0rmCqlyfg1g",
    thumbnail: `https://img.youtube.com/vi/0rmCqlyfg1g/maxresdefault.jpg`,
  },
  {
    id: 3,
    name: "Ridley Franzoso",
    occupation: "Professor universitário",
    videoId: "ICdMy1u9PVI",
    videoUrl: "https://www.youtube.com/watch?v=ICdMy1u9PVI",
    thumbnail: `https://img.youtube.com/vi/ICdMy1u9PVI/maxresdefault.jpg`,
  },
  {
    id: 4,
    name: "Rafaelle Madeira",
    occupation: "Nutricionista",
    videoId: "-zJ8VJzAwrY",
    videoUrl: "https://www.youtube.com/watch?v=-zJ8VJzAwrY",
    thumbnail: `https://img.youtube.com/vi/-zJ8VJzAwrY/maxresdefault.jpg`,
  },
    {
    id: 7,
    name: "Eddie Paiva",
    occupation: "Professor",
    videoId: "tu7l05-nBis",
    videoUrl: "https://www.youtube.com/watch?v=tu7l05-nBis",
    thumbnail: `https://img.youtube.com/vi/tu7l05-nBis/maxresdefault.jpg`,
  },
  {
    id: 5,
    name: "Adriana Guia",
    occupation: "Analista de Sistemas",
    videoId: "Au92IKvZs4w",
    videoUrl: "https://www.youtube.com/watch?v=Au92IKvZs4w",
    thumbnail: `https://img.youtube.com/vi/Au92IKvZs4w/maxresdefault.jpg`,
  },



]

export default function VideoTestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId)
  }

  return (
    <section id="testimonials-section" className="relative py-20 lg:py-32 overflow-hidden">
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
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-3 sm:mb-4">
            Veja como a Jornada <span className="text-highlight-glow font-extrabold">mudou a vida</span> desses alunos
          </h2>
        </div>

        {/* Video Testimonials Grid - 2 rows of 4 on desktop, responsive on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group relative backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Video Container - Reduced size with aspect-[9/14] instead of [9/16] */}
              <div className="relative aspect-[9/14] overflow-hidden">
                {playingVideo === testimonial.videoId ? (
                  // Embedded YouTube Shorts Video
                  <iframe
                    src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0`}
                    title={`Depoimento de ${testimonial.name}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  // Video Thumbnail with Play Button
                  <>
                    <img
                      src={testimonial.thumbnail || "/placeholder.svg"}
                      alt={`Depoimento de ${testimonial.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to default thumbnail if maxresdefault doesn't exist
                        e.currentTarget.src = `https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

                    {/* Play Button */}
                    <div
                      className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      onClick={() => handlePlayVideo(testimonial.videoId)}
                    >
                      <div className="w-12 h-12 bg-[#05eff8]/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl hover:bg-[#05eff8] transition-colors duration-300">
                        <Play className="w-5 h-5 text-black ml-0.5" fill="currentColor" />
                      </div>
                    </div>

                    {/* Shorts Badge */}
                    <div className="absolute top-2 right-2">
                      <div className="bg-red-600 px-1.5 py-0.5 rounded text-white text-xs font-bold">Shorts</div>
                    </div>

                    {/* Name and Occupation Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="font-montserrat font-bold text-white text-xs mb-1 group-hover:text-[#05eff8] transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#05eff8] font-medium text-xs">{testimonial.occupation}</p>
                    </div>
                  </>
                )}
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-[#05eff8]/20 to-teal-400/20"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-4">
            Sua transformação financeira começa <span className="text-[#05eff8]">hoje</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-lg">
            Junte-se a centenas de pessoas que já mudaram suas vidas financeiras
          </p>
        </div>
      </div>
    </section>
  )
}
