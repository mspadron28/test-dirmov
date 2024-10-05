import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provinciaId = searchParams.get('provincia_id');

  if (!provinciaId) {
    return NextResponse.json({ error: 'Se requiere el ID de provincia' }, { status: 400 });
  }

  try {
    const { rows: cantones } = await sql`
      SELECT * FROM cantones WHERE provincia_id = ${provinciaId}
    `;
    return NextResponse.json(cantones);
  } catch (error) {
    console.error('Error al obtener los cantones:', error);
    return NextResponse.error();
  }
}
