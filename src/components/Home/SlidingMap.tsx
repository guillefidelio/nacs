"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Change this import
import MapaFuel from './MapaFuel';
import MapaTech from './MapaTech';

interface SlidingMapProps {
  initialMap: 'fuel' | 'tech' | null;
}

const SlidingMap: React.FC<SlidingMapProps> = ({ initialMap }) => {
  const [currentMap, setCurrentMap] = useState<'fuel' | 'tech'>(initialMap || 'tech');
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const slidingMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const hash = searchParams?.get('map');
    if (hash === 'fuel') {
      setCurrentMap('fuel');
      slidingMapRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const handleMapChange = (map: 'fuel' | 'tech') => {
    setCurrentMap(map);
    router.push(`?map=${map}`, { scroll: false });
  };

  return (
    <div className="container mx-auto px-4 py-14" ref={slidingMapRef}>
      <div className="mx-auto">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col items-start mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-2">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 md:mb-0">
                <span className="rounded border-2 border-pri bg-pri text-ter px-2 py-1 inline-block">
                  RECORRIDOS RECOMENDADOS
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Explora las innovaciones<br className="hidden md:inline" />
                en tecnología y equipamiento
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mb-4 gap-2">
            <button
              onClick={() => handleMapChange('tech')}
              className={`px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-xl border border-solid text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex-grow sm:flex-grow-0 ${
                currentMap === 'tech'
                  ? "bg-ter text-pri font-bold border-pri"
                  : "bg-ter border-gray-300 hover:border-pri hover:text-pri transition-colors duration-200"
              } whitespace-nowrap`}
            >
              Tecnología
            </button>
            <button
              onClick={() => handleMapChange('fuel')}
              // If a button on the home page were to link directly to this map, the URL would look like:
              // /sliding-map#fuel
              className={`px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-xl border border-solid text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex-grow sm:flex-grow-0 ${
                currentMap === 'fuel'
                  ? "bg-ter text-pri font-bold border-pri"
                  : "bg-ter border-gray-300 hover:border-pri hover:text-pri transition-colors duration-200"
              } whitespace-nowrap`}
            >
              Equipamientos
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex">
            <div className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out ${
              currentMap === 'tech' ? 'translate-x-0' : '-translate-x-full'
            }`}>
              <MapaTech />
            </div>
            <div className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out absolute top-0 left-full ${
              currentMap === 'fuel' ? '-translate-x-full' : 'translate-x-0'
            }`}>
              <MapaFuel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingMap;