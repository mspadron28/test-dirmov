import React, { useState, useEffect } from 'react';

interface ParishSelectProps {
  cantonId: string;
}

const ParishSelect: React.FC<ParishSelectProps> = ({ cantonId }) => {
  const [parishes, setParishes] = useState([]);

  useEffect(() => {
    if (cantonId) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/parishes/${cantonId}`)
        .then((response) => response.json())
        .then((data) => setParishes(data))
        .catch((error) => console.error('Error al cargar parroquias:', error));
    }
  }, [cantonId]);

  return (
    <div>
      <label htmlFor="parish" className="block text-sm font-medium text-gray-700">
        Parroquia
      </label>
      <select
        id="parish"
        name="parish"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md"
      >
        <option value="">Seleccione una parroquia</option>
        {parishes.map((parish: { parish_id: string; parish_name: string }) => (
          <option key={parish.parish_id} value={parish.parish_id}>
            {parish.parish_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ParishSelect;
