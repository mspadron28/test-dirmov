'use client';
import { useState } from 'react';
import questions from '../data/questions';
import Question from '../ui/test/Question';
import Result from '../ui/test/Result';
import calculateScore from '../lib/calculateScore';

export interface Response {
  answer: string;
  points: number;
}

export default function TestPage() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<Response[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswer = (answer: string, points: number) => {
    setResponses([...responses, { answer, points }]);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const finalScore = calculateScore(responses);
      setScore(finalScore);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        {score === null ? (
          <Question
            data={questions[step]}
            onAnswer={handleAnswer}
          />
        ) : (
          <Result score={score} />
        )}
      </div>
    </div>
  );
}
