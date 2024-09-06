import React, { useState } from 'react';

export function EventCalendar() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    // Aquí iría la lógica para filtrar eventos por categoría
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">Todas las categorías</option>
        <option value="presentations">Presentaciones generales</option>
        <option value="workshops">Talleres</option>
        {/* Añadir más categorías según sea necesario */}
      </select>
      <div>
        {/* Aquí iría la implementación del calendario */}
        <p>Calendario de eventos (implementación pendiente)</p>
      </div>
    </div>
  );
}