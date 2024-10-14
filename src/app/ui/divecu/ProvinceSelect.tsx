import React, { useState, useEffect } from 'react';

interface ProvinceSelectProps {
  onProvinceChange: (provinceId: string, provinceName: string) => void;
}

const ProvinceSelect: React.FC<ProvinceSelectProps> = ({ onProvinceChange }) => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/provinces`)
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error('Error al cargar provincias:', error));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.selectedOptions[0]; 
    const provinceId = selectedOption.value; 
    const provinceName = selectedOption.text; 

    onProvinceChange(provinceId, provinceName); 
  };

  return (
    <div>
      <label htmlFor="province" className="block text-sm font-medium text-gray-700">
        Provincia
      </label>
      <select
        id="province"
        name="province"
        onChange={handleChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md"
      >
        <option value="">Seleccione una provincia</option>
        {provinces.map((province: { province_id: string; province_name: string }) => (
          <option className='text-black' key={province.province_id} value={province.province_id}>
            {province.province_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceSelect;
