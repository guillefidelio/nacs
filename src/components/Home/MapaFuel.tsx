"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface HoverSpot {
  id: number;
  name: string;
  position: { top: string; left: string };
}

interface ClickSpot extends HoverSpot {
  description: string;
  contact: string;
}

interface PopupInfo {
  isVisible: boolean;
  spot: ClickSpot | null;
  position: { top: number; left: number };
}

interface HoverInfo {
  name: string;
  position: { top: number; left: number };
}

const hoverSpots: HoverSpot[] = [
  { id: 1, name: "Franklin Electric (C6603)", position: { top: "32%", left: "8%" } },
  { id: 2, name: "OMNTEC (C6911)", position: { top: "24%", left: "21%" } },
  { id: 3, name: "JF Petroleum Group (C6819)", position: { top: "33%", left: "22%" } },
  { id: 4, name: "Censtar Science & Technology Corp. (C6953)", position: { top: "57%", left: "51%" } },
  { id: 5, name: "PIUSI USA Inc. (C6663)", position: { top: "73%", left: "39%" } },
  { id: 6, name: "Zeppini Ecoflex (C6677)", position: { top: "82%", left: "51%"  } },
  { id: 7, name: "SimplyFuel Solutions (C6777)", position: { top: "77%", left: "55%"  } },
  { id: 8, name: "Post Guard (C6884)", position: { top: "80%", left: "60%" } },
  { id: 9, name: "Red E Charging (C7084)", position: { top: "73%", left: "68%" } },
  { id: 10, name: "Innoplast (C7178)", position: { top: "63%", left: "68%" } },
];

const clickSpots: ClickSpot[] = [
  { 
    id: 1, 
    name: "Franklin Electric (C6603)", 
    position: { top: "32%", left: "8%" }, 
    description: "Innovación en control de corrosión, tableros inteligentes para la distribución de autos eléctricos y detección de fugas eléctricas.", 
    contact: "gustavo.perez@aoypf.org" 
  },
  { 
    id: 2, 
    name: "OMNTEC (C6911)", 
    position: { top: "24%", left: "21%" }, 
    description: "Con su tecnología avanzada, el OMNTEC PROTEUS-K® ATG facilita la administración de almacenamiento de combustible y detección de fugas.", 
    contact: "http://www.omntec.com"
  },
  { 
    id: 3, 
    name: "JF Petroleum Group (C6819)", 
    position: { top: "33%", left: "22%" }, 
    description: "Soluciones de carga de vehículos eléctricos.", 
    contact: "http://www.jfpetrogroup.com"
  },
  { 
    id: 4, 
    name: "Censtar Science & Technology Corp. (C6953)", 
    position: { top: "57%", left: "51%" }, 
    description: "Soluciones integrales para automatización y venta de equipos de playa, GNC y eléctricos.", 
    contact: "https://www.censtargroup.com/"
  },
  { 
    id: 5, 
    name: "PIUSI USA Inc. (C6663)", 
    position: { top: "73%", left: "39%" }, 
    description: "Innovación en la manipulación de fluidos, bombas, medidores de flujo y accesorios para múltiples aplicaciones.", 
    contact: "http://www.piusi.com"
  },
  { 
    id: 6, 
    name: "Zeppini Ecoflex (C6677)", 
    position: { top: "82%", left: "51%" }, 
    description: "Líder en equipos de protección ambiental para estaciones de servicio.", 
    contact: "http://www.zeppini.com.br"
  },
  { 
    id: 7, 
    name: "SimplyFuel Solutions (C6777)", 
    position: { top: "77%", left: "55%"  }, 
    description: "Plataforma para acceso automatizado al combustible, gestión de tanques y análisis detallados.", 
    contact: "http://www.ejward.com"
  },
  { 
    id: 8, 
    name: "Post Guard (C6884)", 
    position: { top: "80%", left: "60%" }, 
    description: "Bolardos, cubiertas decorativas y de protección de bolardos.", 
    contact: "http://www.postguard.com"
  },
  { 
    id: 9, 
    name: "Red E Charging (C7084)", 
    position: { top: "73%", left: "68%" }, 
    description: "Tecnología en carga eléctrica.", 
    contact: "https://www.redecharge.com"
  },
  { 
    id: 10, 
    name: "Innoplast (C7178)", 
    position: { top: "63%", left: "68%" }, 
    description: "Tecnología en bolardos, innovación y seguridad.", 
    contact: "http://www.innoplast.com"
  }
];

const MapaFuel: React.FC = () => {
  const [hoveredSpot, setHoveredSpot] = useState<HoverInfo | null>(null);
  const [popupInfo, setPopupInfo] = useState<PopupInfo>({
    isVisible: false,
    spot: null,
    position: { top: 0, left: 0 },
  });
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setPopupInfo(prev => ({ ...prev, isVisible: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSpotInteraction = (spot: HoverSpot | ClickSpot, event: React.MouseEvent) => {
    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      const top = event.clientY - rect.top;
      const left = event.clientX - rect.left;

      if (event.type === 'mouseenter' && !popupInfo.isVisible) {
        setHoveredSpot({ name: spot.name, position: { top, left } });
      } else if (event.type === 'mouseleave' && !popupInfo.isVisible) {
        setHoveredSpot(null);
      } else if (event.type === 'click' && 'description' in spot) {
        setPopupInfo({
          isVisible: true,
          spot: spot as ClickSpot,
          position: { top, left },
        });
        setHoveredSpot(null);
      }
    }
  };

  const handleClosePopup = () => {
    setPopupInfo(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <div className="relative w-full" ref={mapRef}>
      <Image 
        src="/mapaequipamientos.png" 
        alt="Equipment Map" 
        width={2000}
        height={1200}
        layout="responsive"
      />

      {[...hoverSpots, ...clickSpots].map((spot) => (
        <div
          key={spot.id}
          className={`absolute w-12 h-12 rounded-full cursor-pointer ${
            'description' in spot ? 'bg-red-500 animate-pulse' : 'bg-blue-500'
          }`}
          style={{ 
            top: `calc(${spot.position.top} - 6px)`, 
            left: `calc(${spot.position.left} - 6px)`,
            opacity: 0.0
          }}
          onMouseEnter={(e) => handleSpotInteraction(spot, e)}
          onMouseLeave={(e) => handleSpotInteraction(spot, e)}
          onClick={(e) => handleSpotInteraction(spot, e)}
        />
      ))}

      {hoveredSpot && !popupInfo.isVisible && (
        <div 
          className="absolute bg-white p-2 rounded shadow z-20"
          style={{
            top: `${hoveredSpot.position.top - 40}px`,
            left: `${hoveredSpot.position.left}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          {hoveredSpot.name}
        </div>
      )}

      {popupInfo.isVisible && popupInfo.spot && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleClosePopup} />
          <div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-md z-50 flex flex-col w-11/12 max-w-md"
          >
            <h3 className="font-bold text-lg mb-2">{popupInfo.spot.name}</h3>
            <p className="mb-2">{popupInfo.spot.description}</p>
            <p className="mb-4"><strong>Contacto:</strong> {popupInfo.spot.contact}</p>
            <button 
              className="self-center bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors duration-200"
              onClick={handleClosePopup}
            >
              Cerrar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MapaFuel;
