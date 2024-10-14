'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProvinceSelect from '../ui/divecu/ProvinceSelect';
import CantonSelect from '../ui/divecu/CantonSelect';
import ParishSelect from '../ui/divecu/ParishSelect';

export default function Page() {
  const [selectedProvince, setSelectedProvince] = useState<{ id: string | null, name: string | null }>({ id: null, name: null });
  const [selectedCanton, setSelectedCanton] = useState<{ id: string | null, name: string | null }>({ id: null, name: null });
  const [selectedParish, setSelectedParish] = useState<{ id: string | null, name: string | null }>({ id: null, name: null });
  const [name, setName] = useState<string>('');

  const router = useRouter();

  const handleProvinceChange = (provinceId: string, provinceName: string) => {
    setSelectedProvince({ id: provinceId, name: provinceName });
    setSelectedCanton({ id: null, name: null });
    setSelectedParish({ id: null, name: null });
  };

  const handleCantonChange = (cantonId: string, cantonName: string) => {
    setSelectedCanton({ id: cantonId, name: cantonName });
    setSelectedParish({ id: null, name: null });
  };

  const handleParishChange = (parishId: string, parishName: string) => {
    setSelectedParish({ id: parishId, name: parishName });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/test?name=${encodeURIComponent(name)}&province=${encodeURIComponent(selectedProvince.name || '')}&canton=${encodeURIComponent(selectedCanton.name || '')}&parish=${encodeURIComponent(selectedParish.name || '')}`);
  };

 
  const isFormComplete = name && selectedProvince.id && selectedCanton.id && selectedParish.id;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="mb-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="font-bold">Antes de empezar el test psicológico</p>
          <p>Por favor, ingresa tu nombre y selecciona tu ubicación (provincia, cantón y parroquia) para continuar.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div>
            <ProvinceSelect onProvinceChange={handleProvinceChange} />
          </div>
          {selectedProvince.id && (
            <div>
              <CantonSelect 
                provinceId={selectedProvince.id} 
                onCantonChange={handleCantonChange} 
              />
            </div>
          )}
          {selectedCanton.id && (
            <div>
              <ParishSelect cantonId={selectedCanton.id} onParishChange={handleParishChange} />
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md font-medium ${
              isFormComplete ? 'bg-indigo-600 text-white' : 'bg-gray-400 text-gray-300 cursor-not-allowed'
            }`}
            disabled={!isFormComplete}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
