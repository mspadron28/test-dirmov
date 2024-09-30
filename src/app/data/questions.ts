interface Option {
    answer: string;
    score: number;
    next?: string;
}

interface Question {
    id: string;
    general: string;
    options: Option[];
}

const questions: Question[] = [
    {
        id: 'G1',
        general: "¿Cómo te comportas cuando debes trabajar en equipo?",
        options: [
            { answer: "Colaboro activamente y trato de aportar soluciones.", next: 'a1', score: 10 },
            { answer: "Trabajo bien en equipo, aunque a veces prefiero tomar decisiones solo.", next: 'b1', score: 7 },
            { answer: "Prefiero trabajar solo, pero puedo colaborar si es necesario.", next: 'b1', score: 5 },
            { answer: "Evito trabajar en equipo siempre que puedo.", next: 'd1', score: 2 }
        ]
    },
    {
        id: 'a1',
        general: "¿Qué haces si uno de tus compañeros tiene dificultades en el equipo?",
        options: [
            { answer: "Trato de ayudarle y resolver el problema juntos.", score: 10 },
            { answer: "Le doy algunas sugerencias pero no me involucro mucho.", score: 5 },
            { answer: "Espero que lo resuelva solo y me concentro en mis tareas.", score: 2 },
            { answer: "Ignoro el problema, no es mi responsabilidad.", score: 0 }
        ]
    },
    {
        id: 'b1',
        general: "¿Qué tan importante es para ti seguir un enfoque grupal en lugar de individual en una misión?",
        options: [
            { answer: "Es muy importante, porque el éxito del equipo depende de todos.", score: 10 },
            { answer: "Prefiero trabajar solo, pero reconozco la importancia de la colaboración.", score: 5 },
            { answer: "Me siento más cómodo cuando puedo manejar las cosas por mí mismo.", score: 2 },
            { answer: "No me gusta trabajar en equipo, prefiero manejar todo de manera individual.", score: 0 }
        ]
    },
    {
        id: 'd1',
        general: "¿Cómo reaccionas cuando te ves obligado a trabajar en equipo?",
        options: [
            { answer: "Intento adaptarme a la situación aunque no me guste.", score: 10 },
            { answer: "Hago lo mínimo necesario para no afectar al equipo.", score: 5 },
            { answer: "Sigo actuando por mi cuenta a pesar de estar en un equipo.", score: 2 },
            { answer: "Evito involucrarme y dejo que otros tomen la responsabilidad.", score: 0 }
        ]
    },
    {
        id: 'G2',
        general: "¿Cómo reaccionas ante críticas o retroalimentación negativa?",
        options: [
            { answer: "Las acepto como una oportunidad para mejorar.", next: 'a2', score: 10 },
            { answer: "Me siento incómodo pero trato de mejorar a partir de ellas.", next: 'b2', score: 7 },
            { answer: "Las críticas me afectan emocionalmente y me cuesta mejorar.", next: 'c2', score: 5 },
            { answer: "Me irrito y no las tomo en cuenta.", next: 'd2', score: 2 }
        ]
    },
    {
        id: 'a2',
        general: "¿Qué haces si la crítica viene de alguien con quien no tienes buena relación?",
        options: [
            { answer: "Acepto la crítica y trato de aprender de ella.", score: 10 },
            { answer: "Me molesta un poco, pero sigo tomando en cuenta la crítica.", score: 7 },
            { answer: "Me cuesta aceptar la crítica cuando viene de alguien con quien no me llevo bien.", score: 5 },
            { answer: "Descarto la crítica si no me llevo bien con la persona.", score: 2 }
        ]
    },
    {
        id: 'b2',
        general: "¿Cómo manejas la incomodidad emocional tras recibir una crítica?",
        options: [
            { answer: "Reflexiono y trato de manejar mis emociones de manera productiva.", score: 10 },
            { answer: "Me siento afectado, pero eventualmente lo supero.", score: 7 },
            { answer: "La incomodidad me dura un tiempo y afecta mi desempeño.", score: 5 },
            { answer: "Me cuesta mucho superar la incomodidad.", score: 2 }
        ]
    },
    {
        id: 'G3',
        general: "Si cometes un error grave que podría poner en peligro a otros, ¿cómo lo manejas?",
        options: [
            { answer: "Informo de inmediato y hago todo lo posible para corregirlo.", next: 'a3', score: 10 },
            { answer: "Intento corregir el error, pero no informo a otros.", next: 'b3', score: 7 },
            { answer: "Dejo que otros se den cuenta del error sin intervenir.", next: 'c3', score: 5 },
            { answer: "Intento ocultar el error.", next: 'd3', score: 2 }
        ]
    },
    {
        id: 'a3',
        general: "¿Qué haces si corregir el error involucra reportar a un compañero implicado?",
        options: [
            { answer: "Informo lo que ocurrió, sin importar quién esté involucrado.", score: 10 },
            { answer: "Dudo en reportarlo, pero lo hago si es necesario.", score: 7 },
            { answer: "Trato de proteger a mi compañero y solo reporto mi parte.", score: 5 },
            { answer: "No reporto a mi compañero y busco una forma de encubrirlo.", score: 2 }
        ]
    },
    {
        id: 'b3',
        general: "¿Cómo decides cuándo es necesario informar a otros sobre un error?",
        options: [
            { answer: "Siempre informo si existe algún riesgo para los demás.", score: 10 },
            { answer: "Solo informo si no puedo corregir el error por mí mismo.", score: 7 },
            { answer: "Informo si creo que el error es demasiado grave.", score: 5 },
            { answer: "Prefiero no informar a menos que sea absolutamente necesario.", score: 2 }
        ]
    }
];

export default questions;
