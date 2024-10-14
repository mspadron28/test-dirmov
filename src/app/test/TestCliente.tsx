'use client';
import { useState } from 'react';
import Question from '../ui/test/Question'; 
import { useSearchParams } from 'next/navigation';
import Footer from '../ui/structure/Footer';
import Result from '../ui/test/Result'; 
import calculateScore from '../lib/calculateScore'; 
import { Question as QuestionType, Option } from '../lib/definitions';

interface TestClientProps {
  allQuestions: (QuestionType & { options: Option[] })[];
}

export interface Response {
  answer: string;
  points: number;
}

export default function TestClient({ allQuestions }: TestClientProps) {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType & { options: Option[] }>(allQuestions[0]);
  const [responses, setResponses] = useState<Response[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'No ingresado';
  const province = searchParams.get('province') || 'No seleccionada';
  const canton = searchParams.get('canton') || 'No seleccionado';
  const parish = searchParams.get('parish') || 'No seleccionada';

  const handleAnswer = (answer: string, points: number, nextQuestionId: number | null) => {
    const newResponses = [...responses, { answer, points }];
    setResponses(newResponses);

    if (nextQuestionId) {
      const nextQuestion = allQuestions.find(q => q.id === nextQuestionId);
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
      } else {
        console.error('Siguiente pregunta no encontrada.');
      }
    } else {
      const finalScore = calculateScore(newResponses);
      setScore(finalScore);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        {score === null ? (
          <Question
            data={{
              general: currentQuestion.general,
              options: currentQuestion.options,
            }}
            onAnswer={(answer, points) => {
              const selectedOption = currentQuestion.options.find(opt => opt.answer === answer);
              handleAnswer(
                answer,
                points,
                selectedOption?.next_question_id ?? null
              );
            }}
          />
        ) : (
          <Result score={score} />
        )}
      </div>
          {/* Footer con los datos del formulario */}
          <Footer name={name} province={province} canton={canton} parish={parish} />
    </div>
  );
}
