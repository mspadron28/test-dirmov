import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Fetch para obtener todas las provincias
export async function GET() {
  try {
    const { rows: provincias } = await sql`SELECT * FROM provincias`;
    return NextResponse.json(provincias);
  } catch (error) {
    console.error('Error al obtener las provincias:', error);
    return NextResponse.error();
  }
}
