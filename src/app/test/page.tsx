// app/test/page.tsx
import TestClient from './TestCliente';
import { fetchQuestions, fetchOptionsByQuestionId } from '../lib/data';


export default async function TestPage() {
  // Obtener todas las preguntas
  const questions = await fetchQuestions();

  // Obtener todas las opciones para cada pregunta
  const questionsWithOptions = await Promise.all(
    questions.map(async (question) => {
      const options = await fetchOptionsByQuestionId(question.id);
      return { ...question, options };
    })
  );

  return <TestClient allQuestions={questionsWithOptions} />;
}
