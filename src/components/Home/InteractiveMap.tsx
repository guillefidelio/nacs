"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShoppingBag, Utensils, Cpu, Fuel, GraduationCap, BookOpen, Factory, Map } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Change this import
import Link from "next/link"


interface PopupInfo {
  isVisible: boolean;
  content: string;
  position: { top: string; left: string };
}

interface ContentItem {
  icon: React.ReactNode;
  text: string;
  color: string;
  className: string;
  onClick?: () => void;
  component?: React.ReactNode; // Add this line
}

interface SectionInfo {
  name: string;
  description: string;
  position: { top: string; left: string };
  content?: ContentItem[];
  borderColor: string;
}

const InteractiveMap = () => {
  const router = useRouter();
  const [popupInfo, setPopupInfo] = useState<PopupInfo>({
    isVisible: false,
    content: '',
    position: { top: '0', left: '0' },
  });

  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const sectionDetails: { [key: string]: SectionInfo } = {
    'WESTGATE': {
      name: 'WESTGATE',
      description: 'El pabellón Westgate alberga las presentaciones generales y educativas desde el 7 al 11 de octubre',
      position: { top: '65%', left: '5%' },
      content: [
        { icon: <GraduationCap className="w-5 h-5 mr-2" />, text: 'Ver presentaciones recomendadas', color: 'text-grey-700', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
        { icon: <BookOpen className="w-5 h-5 mr-2" />, text: 'Ver todas las presentaciones', color: 'text-grey-700', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
        { icon: <Map className="w-5 h-5 mr-2" />, text: 'Ver mapa del pabellón', color: 'text-grey-700', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
      ],
      borderColor: 'border-blue-300',
    },
    'NORTH HALL NIVEL 1': {
      name: 'NORTH HALL NIVEL 1',
      description: 'Alberga expositores especializados en mercadería de tienda\n' +
        'y gestión de instalaciones.',
      position: { top: '65%', left: '39%' },
      content: [
        { icon: <ShoppingBag className="w-5 h-5 mr-2" />, text: 'Mercadería de tiendas', color: 'text-blue-500', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
        { icon: <Factory className="w-5 h-5 mr-2" />, text: 'Gestión de instalaciones', color: 'text-grey-500', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
        { icon: <Map className="w-5 h-5 mr-2" />, text: 'Ver mapa del pabellón', color: 'text-grey-700', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
      ],
      borderColor: 'border-blue-400',
    },
    'CENTRAL HALL NIVEL 1': {
      name: 'CENTRAL HALL NIVEL 1',
      description: 'Central Hall Level 1 is the main exhibition area with a wide variety of vendors.',
      position: { top: '65%', left: '73%' },
      content: [
        { icon: <ShoppingBag className="w-5 h-5 mr-2" />, text: 'Mercadería de tiendas', color: 'text-blue-500', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
        { icon: <Utensils className="w-5 h-5 mr-2" />, text: 'Equipamiento gastrónómico', color: 'text-purple-500', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
        { icon: <Cpu className="w-5 h-5 mr-2" />, text: 'Soluciones tecnológicas', color: 'text-gray-500', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
        { 
          icon: <Fuel className="w-5 h-5 mr-2" />, 
          text: 'Equipamiento de combustible', 
          color: 'text-red-500', 
          className: 'border rounded-full px-3 py-1 shadow-sm flex items-center cursor-pointer',
          component: (
            <Link href="/?map=fuel" className="flex items-center">
              <Fuel className="w-5 h-5 mr-2" />
              <span>Equipamiento de combustible</span>
            </Link>
          )
        },
        { icon: <Map className="w-5 h-5 mr-2" />, text: 'Ver mapa del pabellón', color: 'text-grey-700', className: 'border rounded-full px-3 py-1 shadow-sm flex items-center' },
      ],
      borderColor: 'border-blue-500',
    },
  };

  const handleFuelEquipmentClick = () => {
    router.push('/sliding-map#fuel');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1500);
    };

    const handleScroll = () => {
      if (!mapRef.current) return;

      const mapRect = mapRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const visibleSections: string[] = [];

      Object.entries(sectionDetails).forEach(([key, value]) => {
        const sectionTop = parseFloat(value.position.top) / 100 * mapRect.height;
        const sectionLeft = parseFloat(value.position.left) / 100 * mapRect.width;

        if (
          mapRect.top + sectionTop < viewportHeight &&
          mapRect.top + sectionTop > 0
        ) {
          visibleSections.push(key);
        }
      });

      setVisibleSections(visibleSections);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderDesktopView = () => (
    <div className="relative w-2/3 mx-auto" ref={mapRef}>
      <Image 
        src="/mapanacsshow.jpg" 
        alt="Conference Pavilion Map" 
        width={1675}
        height={1394}
        layout="responsive"
      />
  
      {visibleSections.map((sectionName) => {
        const section = sectionDetails[sectionName];
        return (
          <div 
            key={sectionName}
            className={`absolute bg-white border-2 ${section.borderColor} p-4 rounded shadow-md z-20`}
            style={{ 
              top: section.position.top, 
              left: section.position.left, 
              transform: 'translate(-50%, -100%)',
              maxWidth: '270px'
            }}
          >
            <h1 className="text-xl font-bold mb-2">{section.name}</h1>
            <p className="mb-2 text-lg">{section.description}</p>
            {section.content && (
              <>
                <h3 className="text-md font-semibold mb-2 underline">Recorridos sugeridos (click para ver)</h3>
                <ul className="mb-4">
                  {section.content.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item.text === 'Equipamiento de combustible' ? (
                        <Link href="/?map=fuel" className={`flex items-center text-left w-full hover:bg-gray-100 p-1 rounded ${item.color}`}>
                          {item.icon}
                          <span>{item.text}</span>
                        </Link>
                      ) : (
                        <button 
                          className={`flex items-center text-left w-full hover:bg-gray-100 p-1 rounded ${item.color}`}
                          onClick={item.onClick}
                        >
                          {item.icon}
                          <span>{item.text}</span>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
  

  const renderMobileView = () => (
    <div className="w-full px-4">
      <Image 
        src="/mapanacsshowmobile.jpg" 
        alt="Conference Pavilion Map" 
        width={1000}
        height={600}
        layout="responsive"
      />
      {Object.entries(sectionDetails).map(([sectionName, section]) => (
        <div key={sectionName} className={`mt-4 bg-white border-2 ${section.borderColor} p-4 rounded shadow-md`}>
          <h2 className="text-2xl md:text-2xl font-bold mb-2">{section.name}</h2>
          <p className="mb-2 text-lg md:text-lg">{section.description}</p>
          {section.content && (
            <>
              <h3 className="text-md font-semibold mb-2 underline">Recorridos sugeridos</h3>
              <ul className="mb-4">
                {section.content.map((item, index) => (
                  <li key={index} className="mb-2">
                    <button 
                      className={`flex items-center text-left w-full hover:bg-gray-100 p-2 rounded ${item.color}`}
                      onClick={() => console.log(`Clicked: ${item.text}`)}
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto">
      {isMobile ? renderMobileView() : renderDesktopView()}
    </div>
  );
};

export default InteractiveMap;