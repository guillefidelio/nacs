'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import '../../app/globals.css'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
    {
      question: "¿Qué es el NACS Show, dónde y cuándo se llevará a cabo?",
      answer: "El NACS Show es uno de los eventos más grandes e importantes para la industria de estaciones de servicio y tiendas de conveniencia a nivel mundial. Se llevará a cabo en Las Vegas, Nevada, en el Centro de Convenciones de Las Vegas, del [inserte fecha específica] al [inserte fecha específica]. El evento reúne a minoristas, proveedores y profesionales de la industria para compartir conocimientos, exhibir productos innovadores y establecer contactos comerciales."
    },
    {
      question: "¿Qué documentación necesito para viajar desde Argentina a Estados Unidos?",
      answer: "Para viajar a Estados Unidos desde Argentina, necesitarás un pasaporte válido y una visa de turista (B1/B2). Asegúrate de que ambos documentos estén vigentes. Además, verifica cualquier requisito adicional como la inscripción en el Sistema Electrónico de Autorización de Viaje (ESTA) si aplicas bajo el programa de exención de visa."
    },
    {
      question: "¿Cómo puedo inscribirme para el NACS Show 2024?",
      answer: "La inscripción para el NACS Show se realiza a través del sitio web oficial del evento. Te recomendamos inscribirte con anticipación para aprovechar descuentos y asegurar tu participación en las sesiones de tu interés. Si viajas en grupo, verifica si hay opciones de inscripción grupal que puedan ofrecer ventajas adicionales."
    },
    {
      question: "¿Qué actividades recomiendan hacer durante el NACS Show?",
      answer: "El NACS Show ofrece una variedad de actividades que hemos curado en nuestra agenda recomendada día por día"
    },
    {
      question: "¿Cómo llegamos desde el hotel LINQ al Centro de Convenciones de Las Vegas?",
      answer: "El hotel LINQ está  ubicado cerca del Centro de Convenciones de Las Vegas. Para llegar al evento, pueden usar el transfer que partirá cada mañana a las 9.15 o pueden tomar un taxi, utilizar servicios de transporte compartido como Uber o Lyft, o incluso caminar si lo prefieren."
    },
    {
      question: "¿Hay alguna aplicación móvil oficial del NACS Show?",
      answer: "Sí, pueden descargarla desde la App Store o Play Store buscando 'NACS Show'"
    },
    {
      question: "¿Qué actividades grupales están programadas después del NACS Show?",
      answer: "El grupo tiene dos actividades incluídas. 1) Visita al gran cañon del colorado el miércoles 9 de octubre. 2) Visita a 'The Las Vegas Sphere' el jueves 10 de octubre"
    },
    {
      question: "¿Cómo puedo contactar a los organizadores del evento para más información?",
      answer: "Cada grupo tiene un coordinador que puede ayudar con cualquier duda que tengas via WhatsApp o email"
    }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="mx-auto">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col items-start mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-2">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 md:mb-0">
                <span className="rounded border-2 border-pri bg-pri text-ter px-2 py-1 inline-block">
                  PREGUNTAS FRECUENTES
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                No te quedes con dudas<br className="hidden md:inline" />
                antes de viajar a Las Vegas
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-[5px] md:rounded-[20px] p-4 border border-black transition-all duration-300 ease-in-out ${
                expandedIndex === index
                  ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                  : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
              style={{
                backgroundColor: expandedIndex === index ? "#00F6FF" : "#F3F3F3",
                color: "#000000",
              }}
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">{item.question}</h3>
                <div className="bg-ter rounded-full p-1 flex-shrink-0 border border-black">
                  {expandedIndex === index ? (
                    <Minus className="w-6 h-6 text-pri" />
                  ) : (
                    <Plus className="w-6 h-6 text-pri" />
                  )}
                </div>
              </button>
              {expandedIndex === index && (
                <>
                  <hr className="border-t border-black my-4" />
                  <p id={`faq-answer-${index}`} className="mt-4 text-base md:text-lg lg:text-xl opacity-80">
                    {item.answer}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
