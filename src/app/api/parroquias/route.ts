import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cantonId = searchParams.get('canton_id');

  if (!cantonId) {
    return NextResponse.json({ error: 'Se requiere el ID del cantón' }, { status: 400 });
  }

  try {
    const { rows: parroquias } = await sql`
      SELECT * FROM parroquias WHERE canton_id = ${cantonId}
    `;
    return NextResponse.json(parroquias);
  } catch (error) {
    console.error('Error al obtener las parroquias:', error);
    return NextResponse.error();
  }
}
