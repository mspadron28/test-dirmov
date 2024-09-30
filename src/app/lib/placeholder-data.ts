const questions = [
    {
      id: 1,
      general: "¿Cómo te comportas cuando debes trabajar en equipo?",
      question_type: 'adaptation',
      options: [
        {
          id: 1,
          answer: "Colaboro activamente y trato de aportar soluciones.",
          score: 10,
          next_question_id: 2,  
        },
        {
          id: 2,
          answer: "Trabajo bien en equipo, aunque a veces prefiero tomar decisiones solo.",
          score: 7,
          next_question_id: 2,  
        },
        {
          id: 3,
          answer: "Prefiero trabajar solo, pero puedo colaborar si es necesario.",
          score: 5,
          next_question_id: 2,  
        },
        {
          id: 4,
          answer: "Evito trabajar en equipo siempre que puedo.",
          score: 2,
          next_question_id: 3,  
        },
      ],
    },
    {
      id: 2,
      general: "¿Qué haces si uno de tus compañeros tiene dificultades en el equipo?",
      question_type: 'teamwork',
      options: [
        {
          id: 5,
          answer: "Trato de ayudarle y resolver el problema juntos.",
          score: 10,
          next_question_id: 3, // Referencia válida
        },
        {
          id: 6,
          answer: "Le doy algunas sugerencias pero no me involucro mucho.",
          score: 5,
          next_question_id: 3, // Referencia válida
        },
        {
          id: 7,
          answer: "Espero que lo resuelva solo y me concentro en mis tareas.",
          score: 2,
          next_question_id: 3, // Referencia válida
        },
        {
          id: 8,
          answer: "Ignoro el problema, no es mi responsabilidad.",
          score: 0,
          next_question_id: 3, // Referencia válida
        },
      ],
    },
    {
      id: 3,
      general: "¿Cómo reaccionas cuando te ves obligado a trabajar en equipo?",
      question_type: 'adaptation',
      options: [
        {
          id: 9,
          answer: "Intento adaptarme a la situación aunque no me guste.",
          score: 10,
          next_question_id: 4,  
        },
        {
          id: 10,
          answer: "Hago lo mínimo necesario para no afectar al equipo.",
          score: 5,
          next_question_id: 4, // Referencia válida
        },
        {
          id: 11,
          answer: "Sigo actuando por mi cuenta a pesar de estar en un equipo.",
          score: 2,
          next_question_id: 4, // Referencia válida
        },
        {
          id: 12,
          answer: "Evito involucrarme y dejo que otros tomen la responsabilidad.",
          score: 0,
          next_question_id: 4, // Referencia válida
        },
      ],
    },
    {
      id: 4,
      general: "¿Cómo reaccionas ante críticas o retroalimentación negativa?",
      question_type: 'empathy',
      options: [
        {
          id: 13,
          answer: "Las acepto como una oportunidad para mejorar.",
          score: 10,
          next_question_id: 5,  
        },
        {
          id: 14,
          answer: "Me siento incómodo pero trato de mejorar a partir de ellas.",
          score: 7,
          next_question_id: 5, // Referencia válida
        },
        {
          id: 15,
          answer: "Las críticas me afectan emocionalmente y me cuesta mejorar.",
          score: 5,
          next_question_id: 5, // Referencia válida
        },
        {
          id: 16,
          answer: "Me irrito y no las tomo en cuenta.",
          score: 2,
          next_question_id: 5, // Referencia válida
        },
      ],
    },
    {
      id: 5,
      general: "¿Qué haces si la crítica viene de alguien con quien no tienes buena relación?",
      question_type: 'empathy',
      options: [
        {
          id: 17,
          answer: "Acepto la crítica y trato de aprender de ella.",
          score: 10,
        },
        {
          id: 18,
          answer: "Me molesta un poco, pero sigo tomando en cuenta la crítica.",
          score: 7,
        },
        {
          id: 19,
          answer: "Me cuesta aceptar la crítica cuando viene de alguien con quien no me llevo bien.",
          score: 5,
        },
        {
          id: 20,
          answer: "Descarto la crítica si no me llevo bien con la persona.",
          score: 2,
        },
      ],
    },
  ];
  
  export { questions };
  