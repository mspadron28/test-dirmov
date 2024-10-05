import { fetchOptionsByQuestionId } from "@/app/lib/data";

type OptionsPageProps = {
  params: {
    questionId: string;
  };
};

const OptionsPage = async ({ params }: OptionsPageProps) => {
  const questionId = parseInt(params.questionId);
  const options = await fetchOptionsByQuestionId(questionId);

  return (
    <div>
      <h1>Opciones para la Pregunta {questionId}</h1>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            {option.answer} - Puntaje: {option.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsPage;
