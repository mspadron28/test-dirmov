// src/app/components/ProvinceSelect.tsx

'use client';

import React, { useEffect, useState } from 'react';

const ProvinceSelect = () => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      const res = await fetch('http://localhost:3000/provinces');
      if (res.ok) {
        const data = await res.json();
        setProvinces(data);
      }
    };

    fetchProvinces();
  }, []);

  return (
    <div>
      <label htmlFor="province" className="block text-sm font-medium text-gray-700">
        Provincia
      </label>
      <select
        id="province"
        name="province"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" className="text-gray-400">
          Selecciona una opción
        </option>
        {provinces.map((province: { id_prov: string; province_name: string }) => (
          <option key={province.id_prov} value={province.id_prov} className="text-black">
            {province.province_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceSelect;
