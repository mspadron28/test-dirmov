import { fetchQuestions } from "../lib/data"; 

const QuestionsPage = async () => {
  const questions = await fetchQuestions();

  return (
    <div>
      <h1>Preguntas del Test Psicológico</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.general} - Tipo: {question.question_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsPage;
