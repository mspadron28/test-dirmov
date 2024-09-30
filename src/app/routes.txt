import { db } from '@vercel/postgres';
import { questions } from '../lib/placeholder-data';

const client = await db.connect();

async function seedQuestions() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS questions (
      id SERIAL PRIMARY KEY,
      general TEXT NOT NULL,
      question_type VARCHAR(50) NOT NULL
    );
  `;

  await client.sql`
    CREATE TABLE IF NOT EXISTS options (
      id SERIAL PRIMARY KEY,
      answer TEXT NOT NULL,
      score INT NOT NULL,
      question_id INT REFERENCES questions(id) ON DELETE CASCADE,
      next_question_id INT REFERENCES questions(id) ON DELETE SET NULL
    );
  `;

  const insertedQuestions = await Promise.all(
    questions.map(async (question) => {
      const insertedQuestion = await client.sql`
        INSERT INTO questions (general, question_type)
        VALUES (${question.general}, ${question.question_type})
        RETURNING id;
      `;

      const questionId = insertedQuestion.rows[0].id;

      await Promise.all(
        question.options.map(async (option) => {
          return client.sql`
            INSERT INTO options (answer, score, question_id, next_question_id)
            VALUES (
              ${option.answer},
              ${option.score},
              ${questionId},
              ${'next_question_id' in option ? option.next_question_id : null}
            );
          `;
        })
      );
    })
  );

  return insertedQuestions;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedQuestions();
    await client.sql`COMMIT`;

    return new Response(JSON.stringify({ message: 'Database seeded successfully' }), { status: 200 });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
