
import { QuestionProps } from "@/app/lib/definitions";

  export default function Question({ data, onAnswer }: QuestionProps) {
    return (
      <div className="text-center">
        <h2 className="text-xl text-black font-bold mb-6">{data.general}</h2>
        <div className="space-y-4">
          {data.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onAnswer(option.answer, option.score)}
              className="w-full text-black py-2 px-4 bg-gray-200 hover:bg-blue-100 hover:text-blue-600 transition-colors rounded-lg shadow"
            >
              {option.answer}
            </button>
          ))}
        </div>
      </div>
    );
  }
  