import React from 'react';

interface FooterProps {
  name: string;
  province: string | null;
  canton: string | null;
  parish: string | null;
}

const Footer: React.FC<FooterProps> = ({ name, province, canton, parish }) => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 fixed bottom-0">
      <div className="container mx-auto flex justify-between">
        <p className="text-sm">Nombre: {name}</p>
        <p className="text-sm">Provincia: {province || 'No seleccionada'}</p>
        <p className="text-sm">Cantón: {canton || 'No seleccionado'}</p>
        <p className="text-sm">Parroquia: {parish || 'No seleccionada'}</p>
      </div>
    </footer>
  );
};

export default Footer;
