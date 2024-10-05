export type Question = {
    id: number;
    general: string;
    question_type: string;
  };
  
  export type Option = {
    id: number;
    answer: string;
    score: number;
    question_id: number;
    next_question_id: number | null;
  };