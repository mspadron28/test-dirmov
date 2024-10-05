import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'; 
import Link from 'next/link';

import { ArrowRightIcon } from "@heroicons/react/24/outline";
type ResultProps = {
  score: number;
}

export default function Result({ score }: ResultProps) {
  const isApto = score >= 70;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Test Completado</h2>

        <div className="flex items-center justify-center mb-4">
          {isApto ? (
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
          ) : (
            <XCircleIcon className="h-16 w-16 text-red-500" />
          )}
        </div>

        <p className="text-lg font-semibold text-gray-700 mb-4">
          Puntuación final: <span className="text-blue-600">{score}</span>
        </p>

        <p className={`text-xl font-bold ${isApto ? 'text-green-600' : 'text-red-600'}`}>
          {isApto ? 'Apto' : 'No Apto'}
        </p>
      </div>

      <Link
          href="/"
          className="inline-flex items-center gap-4 mt-6 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Finalizar</span>
          <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
    </div>
  );
}
