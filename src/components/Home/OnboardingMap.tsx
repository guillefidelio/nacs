"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function ConventionCenterOnboarding() {
  const [step, setStep] = useState(0)
  const totalSteps = 5
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const progressBarWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"])
  const opacity = (index: number) => useTransform(
    smoothProgress,
    [index / totalSteps, (index + 1) / totalSteps, 1],
    [0, 1, 1]
  )

  useEffect(() => {
    const unsubscribe = smoothProgress.onChange(latest => {
      setStep(Math.floor(latest * totalSteps))
    })
    return () => unsubscribe()
  }, [smoothProgress])

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: `${100 * totalSteps}vh` }}>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
        <motion.div 
          className="w-full h-2 bg-gray-300 fixed top-0 left-0 z-10"
          style={{ scaleX: progressBarWidth, transformOrigin: "0%" }}
        />

        <div className="relative w-full h-full max-w-7xl mx-auto">
          <Image
            src="/mapcallouts.png"
            alt="Convention Center Floorplan"
            layout="fill"
            objectFit="contain"
          />
          
          <motion.h1 
            className="absolute top-16 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-center text-white bg-black bg-opacity-50 p-4 rounded"
            style={{ opacity: opacity(0) }}
          >
            Bienvenidos al NACS Show 2024
          </motion.h1>

          <motion.div 
            className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow"
            style={{ opacity: opacity(1) }}
          >
            <h2 className="text-2xl font-semibold">Pabellón Westgate</h2>
            <p className="mt-2">Explora las últimas innovaciones en el sector.</p>
          </motion.div>

          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow"
            style={{ opacity: opacity(2) }}
          >
            <h2 className="text-2xl font-semibold">Pabellón North Hall</h2>
            <p className="mt-2">Descubre nuevas tecnologías y soluciones.</p>
          </motion.div>

          <motion.div 
            className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow"
            style={{ opacity: opacity(3) }}
          >
            <h2 className="text-2xl font-semibold">Pabellón Central</h2>
            <p className="mt-2">Participa en conferencias y networking.</p>
          </motion.div>

          <motion.div 
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4"
            style={{ opacity: opacity(4) }}
          >
            {['Recorrido 1', 'Recorrido 2', 'Recorrido 3', 'Recorrido 4', 'Recorrido 5'].map((text, index) => (
              <motion.button
                key={index}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {text}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.button
          onClick={handleReset}
          className="fixed bottom-4 right-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reset Animation
        </motion.button>
      </div>
    </div>
  )
}