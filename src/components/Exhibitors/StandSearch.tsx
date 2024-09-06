import React, { useState } from 'react';

export function StandSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implementar la lógica de búsqueda aquí
    console.log('Buscando:', searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar stand..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}