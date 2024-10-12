import React, { useState, useEffect } from 'react';

interface CantonSelectProps {
  provinceId: string;
  onCantonChange: (cantonId: string) => void;
}

const CantonSelect: React.FC<CantonSelectProps> = ({ provinceId, onCantonChange }) => {
  const [cantons, setCantons] = useState([]);

  useEffect(() => {
    if (provinceId) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cantons/${provinceId}`)
        .then((response) => response.json())
        .then((data) => setCantons(data))
        .catch((error) => console.error('Error al cargar cantones:', error));
    }
  }, [provinceId]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCantonChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="canton" className="block text-sm font-medium text-gray-700">
        Cantón
      </label>
      <select
        id="canton"
        name="canton"
        onChange={handleChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md"
      >
        <option value="">Seleccione un cantón</option>
        {cantons.map((canton: { canton_id: string; canton_name: string }) => (
          <option key={canton.canton_id} value={canton.canton_id}>
            {canton.canton_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CantonSelect;
