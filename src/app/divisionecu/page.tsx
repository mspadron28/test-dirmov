'use client'
import React, { useState } from 'react';
import ProvinceSelect from '../ui/divecu/ProvinceSelect';
import CantonSelect from '../ui/divecu/CantonSelect'; 
import ParishSelect from '../ui/divecu/ParishSelect';

export default function Page() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCanton, setSelectedCanton] = useState<string | null>(null);
  
  const handleProvinceChange = (provinceId: string) => {
    setSelectedProvince(provinceId);
    setSelectedCanton(null); // Reset canton when province changes
  };

  const handleCantonChange = (cantonId: string) => {
    setSelectedCanton(cantonId);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Formulario con Provincias, Cantones y Parroquias
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <ProvinceSelect onProvinceChange={handleProvinceChange} />
          </div>
          {selectedProvince && (
            <div>
              <CantonSelect 
                provinceId={selectedProvince} 
                onCantonChange={handleCantonChange} 
              />
            </div>
          )}
          {selectedCanton && (
            <div>
              <ParishSelect cantonId={selectedCanton} />
            </div>
          )}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
