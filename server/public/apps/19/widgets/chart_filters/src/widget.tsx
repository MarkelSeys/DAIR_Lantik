import { useEffect, useState } from 'react';

// ...otras importaciones

const FILTERS_STORAGE_KEY = 'activeFilters';

export default function Widget(props) {
  // ...código existente del componente

  const [filters, setFilters] = useState(() => {
    // Intenta cargar filtros guardados
    const saved = localStorage.getItem(FILTERS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : /* valor inicial de filtros */ {};
  });

  // Guarda los filtros en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
  }, [filters]);

  // Lógica para aplicar los filtros al cargar
  useEffect(() => {
    const saved = localStorage.getItem(FILTERS_STORAGE_KEY);
    if (saved) {
      setFilters(JSON.parse(saved));
    }
  }, []);

  // ...el resto del componente, usando setFilters para actualizar los filtros
}