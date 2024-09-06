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
  { id: 1, name: "Gilbarco Veeder-Root (C6603)", position: { top: "32%", left: "8%" } },
  { id: 2, name: "Dover Fueling Solutions (C6911)", position: { top: "24%", left: "21%" } },
  { id: 3, name: "Invenco by GVR (C6819)", position: { top: "33%", left: "22%" } },
  { id: 4, name: "Petro Vend (C6953)", position: { top: "57%", left: "51%" } },
  { id: 5, name: "Fuel Management Systems (C6663)", position: { top: "73%", left: "39%" } },
];

const clickSpots: ClickSpot[] = [
  { 
    id: 1, 
    name: "Gilbarco Veeder-Root (C6603)", 
    position: { top: "32%", left: "8%" }, 
    description: "Líder en soluciones de pago y gestión para estaciones de servicio.", 
    contact: "https://www.gilbarco.com" 
  },
  { 
    id: 2, 
    name: "Dover Fueling Solutions (C6911)", 
    position: { top: "24%", left: "21%" }, 
    description: "Innovación en dispensadores de combustible y sistemas de pago.", 
    contact: "https://www.doverfuelingsolutions.com"
  },
  { 
    id: 3, 
    name: "Invenco by GVR (C6819)", 
    position: { top: "33%", left: "22%" }, 
    description: "Tecnología de punta en terminales de pago para estaciones de servicio.", 
    contact: "https://www.invenco.com"
  },
  { 
    id: 4, 
    name: "Petro Vend (C6953)", 
    position: { top: "57%", left: "51%" }, 
    description: "Sistemas automatizados de control de combustible.", 
    contact: "https://www.opwglobal.com/petro-vend"
  },
  { 
    id: 5, 
    name: "Fuel Management Systems (C6663)", 
    position: { top: "73%", left: "39%" }, 
    description: "Soluciones avanzadas para la gestión de combustible.", 
    contact: "https://fuelmanagement.com"
  },
];

const MapaTech: React.FC = () => {
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
        src="/mapa3.png" 
        alt="Technology Map" 
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

export default MapaTech;