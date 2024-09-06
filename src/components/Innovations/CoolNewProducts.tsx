import React from 'react';

export function CoolNewProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
        <img src="/product1.jpg" alt="Nuevo Producto 1" className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-lg font-semibold">Descripción del Nuevo Producto 1</p>
        </div>
      </div>
      <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
        <img src="/product2.jpg" alt="Nuevo Producto 2" className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-lg font-semibold">Descripción del Nuevo Producto 2</p>
        </div>
      </div>
    </div>
  );
}