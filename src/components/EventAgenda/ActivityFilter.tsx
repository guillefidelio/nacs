import React from 'react';

interface ActivityFilterProps {
  onFilterChange: (value: string) => void;
}

export function ActivityFilter({ onFilterChange }: ActivityFilterProps) {
  return (
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="all">Todas las actividades</option>
      <option value="presentations">Presentaciones</option>
      <option value="workshops">Talleres</option>
    </select>
  );
}