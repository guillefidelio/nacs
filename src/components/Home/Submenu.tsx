'use client'

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Submenu() {
  const menuItems = [
    { title: ["\u00A0¿Primera vez\u00A0", "\u00A0en el NACS?\u00A0"], description: "Esto es lo que necesitas saber para disfrutar cada momento", image: "/img1.png" },
    { title: ["\u00A0Mirá el mapa\u00A0", "\u00A0en detalle\u00A0"], description: "Conocé como moverte y llegar a cada lugar que te interese", image: "/img2.png"  },
    { title: ["\u00A0Presentaciones\u00A0", "\u00A0y Charlas\u00A0"], icon: "💬", description: "Conocé cómo inscribirte y participar de las mejores presentaciones" },
    { title: ["\u00A0Agenda\u00A0", "\u00A0Recomendada\u00A0"], icon: "📧", description: "Te ayudamos a sacarle el máximo provecho a tu tiempo" },
    { title: ["\u00A0Recorridos\u00A0", "\u00A0Por Pabellones\u00A0"], icon: "✍️", description: "No te pierdas de los stands más importantes" },
    { title: ["\u00A0¿Te quedan preguntas\u00A0", "\u00A0todavía?\u00A0"], icon: "📊", description: "Mirá nuestra sección de dudas y contactate" },
  ]

  const cardColors = ["#F3F3F3", "#1EB9FF", "#0451CE", "#F3F3F3", "#1EB9FF", "#0451CE"]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const renderDesktopView = () => (
    <div
    className="grid grid-cols-1 md:grid-cols-2"
    style={{ gap: '2rem 1rem' }}  // Example: 2rem vertical, 4rem horizontal gap
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="rounded-[40px] p-8 border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full relative transition-all duration-300 ease-in-out"
          style={{ 
            backgroundColor: cardColors[index],
            color: cardColors[index] === "#F3F3F3" || cardColors[index] === "#1EB9FF" ? "#000000" : "#FFFFFF",
            transform: hoveredIndex === index ? "scale(1.01)" : "scale(1)",
            boxShadow: hoveredIndex === index ? "6px 6px 0px 0px rgba(0,0,0,1)" : "4px 4px 0px 0px rgba(0,0,0,1)"
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-tight">
                <span className="inline-block">
                  <span className={`rounded ${
                    cardColors[index] === "#1EB9FF" ? "bg-[#F3F3F3]" :
                    cardColors[index] === "#F3F3F3" ? "bg-[#1EB9FF]" :
                    cardColors[index] === "#0451CE" ? "bg-[#F3F3F3]" : ""
                  }`}>
                    {item.title[0]}<br />
                    {item.title[1]}
                  </span>
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-80">{item.description}</p>
            </div>
            <div className="flex justify-between items-end mt-4">
              {index === 0 ? (
                <Link href="/?map=fuel" className="flex items-center text-sm font-medium">
                  <div className="mr-2 rounded-full border border-current p-1 transform -rotate-10">
                    <ArrowRight className="h-5 w-5 transform rotate-[-22deg]" />
                  </div>
                  <span className="text-lg">Ver más</span>
                </Link>
              ) : (
                <button className="flex items-center text-sm font-medium">
                  <div className="mr-2 rounded-full border border-current p-1 transform -rotate-10">
                    <ArrowRight className="h-5 w-5 transform rotate-[-22deg]" />
                  </div>
                  <span className="text-lg">Ver más</span>
                </button>
              )}
              <div className="flex items-center justify-end">
                {index === 0 || index === 1 ? (
                  <Image src={item.image} alt={`Card image ${index + 1}`} width={100} height={100} className="object-cover rounded-lg" />
                ) : (
                  <div className="text-4xl md:text-5xl lg:text-6xl">{item.icon}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderMobileView = () => (
    <div className="flex flex-col gap-8">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="rounded-[20px] p-4 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] relative transition-all duration-300 ease-in-out"
          style={{ 
            backgroundColor: cardColors[index],
            color: cardColors[index] === "#F3F3F3" || cardColors[index] === "#1EB9FF" ? "#000000" : "#FFFFFF",
          }}
        >
          <div className="flex items-center mb-4">
            {index === 0 || index === 1 ? (
              <Image src={item.image} alt={`Card image ${index + 1}`} width={60} height={60} className="object-cover rounded-lg mr-4" />
            ) : (
              <div className="text-4xl mr-4">{item.icon}</div>
            )}
            <h2 className="text-xl font-semibold leading-tight">
              <span className={`rounded ${
                cardColors[index] === "#1EB9FF" ? "bg-[#F3F3F3]" :
                cardColors[index] === "#F3F3F3" ? "bg-[#1EB9FF]" :
                cardColors[index] === "#0451CE" ? "bg-[#F3F3F3]" : ""
              }`}>
                {item.title[0]} {item.title[1]}
              </span>
            </h2>
          </div>
          <p className="text-base mb-4 opacity-80">{item.description}</p>
          {index === 0 ? (
            <Link href="/?map=fuel" className="flex items-center text-sm font-medium">
              <div className="mr-2 rounded-full border border-current p-1 transform -rotate-10">
                <ArrowRight className="h-4 w-4 transform rotate-[-22deg]" />
              </div>
              <span className="text-base">Ver más</span>
            </Link>
          ) : (
            <button className="flex items-center text-sm font-medium">
              <div className="mr-2 rounded-full border border-current p-1 transform -rotate-10">
                <ArrowRight className="h-4 w-4 transform rotate-[-22deg]" />
              </div>
              <span className="text-base">Ver más</span>
            </button>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div className="relative">
      <Image
        src="/bg2.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-85"
      />
      <div className="container mx-auto px-4 py-12 lg:w-3/5 relative z-10">
        {isMobile ? renderMobileView() : renderDesktopView()}
      </div>
    </div>
  )
}