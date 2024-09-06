'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import BlurIn from '../magicui/blur-in'
import Image from 'next/image'

export function Welcome() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function calculateTimeLeft() {
    const difference = +new Date('2024-10-07') - +new Date()
    let timeLeft: { [key: string]: number } = {}

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const timerComponents = (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 mb-2">
        <span className="text-2xl font-bold">{timeLeft.días} días</span>
        <span className="text-2xl font-bold">{timeLeft.horas} horas</span>
      </div>
      <div className="flex space-x-4">
        <span className="text-2xl font-bold">{timeLeft.minutos} minutos</span>
        <span className="text-2xl font-bold">{timeLeft.segundos} segundos</span>
      </div>
    </div>
  )

  return (
    <div className="relative overflow-hidden bg-[#0E0B7C] text-white py-16 px-4 shadow-xl">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/topleft.png"
          alt="Top Left Decoration"
          width={400}
          height={400}
          className="absolute left-0 top-0 opacity-100 md:w-[400px] md:h-[400px] w-[200px] h-[200px]"
        />
      </div>
      <div className="container mx-auto text-center relative">
        <motion.h2 
          className="text-3xl font-bold mb-0 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Bienvenidos al
        </motion.h2>
        <motion.h1
          className="text-6xl font-bold mb-2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BlurIn word="NACS Show 2024" className="text-white" />
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-2xl">El viaje que reconoce a los ganadores del programa +YPF 2022 / 2023</span>
        </motion.p>
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 inline-block mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Cuenta regresiva para el evento</h2>
          <div className="flex justify-center">
            {Object.keys(timeLeft).length ? timerComponents : <span className="text-2xl font-bold">¡El tiempo ha llegado!</span>}
          </div>
        </motion.div>
        <motion.div 
          className="flex justify-center items-center space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center">
            <Calendar className="w-8 h-8 mr-3" />
            <p className="text-xl">7 de Octubre, 2024</p>
          </div>
          <div className="flex items-center">
            <MapPin className="w-8 h-8 mr-3" />
            <p className="text-xl">Las Vegas, Nevada</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}