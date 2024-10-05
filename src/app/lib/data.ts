import { sql } from '@vercel/postgres';
import { Question, Option } from './definitions';

export async function fetchQuestions(): Promise<Question[]> {
    try {
      const data = await sql<Question>`SELECT * FROM questions`;
      return data.rows;
    } catch (error) {
      console.error('Error al obtener las preguntas:', error);
      throw new Error('No se pudieron obtener las preguntas.');
    }
  }
  
  // Fetch para obtener las opciones de una pregunta específica
  export async function fetchOptionsByQuestionId(questionId: number): Promise<Option[]> {
    try {
      const data = await sql<Option>`
        SELECT * FROM options WHERE question_id = ${questionId}
      `;
      return data.rows;
    } catch (error) {
      console.error('Error al obtener las opciones:', error);
      throw new Error('No se pudieron obtener las opciones.');
    }
  }