import { Response } from '@/app/test/page';

export default function calculateScore(responses: Response[]): number {
  const totalPoints = responses.reduce((acc, curr) => acc + curr.points, 0);
  const totalQuestions = responses.length;
  return (totalPoints / (totalQuestions * 10)) * 100;
}
