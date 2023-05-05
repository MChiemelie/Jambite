import { env } from 'process';

async function getQuestions() {
  const res = await fetch("https://questions.aloc.com.ng/api/v2/m?subject=chemistry", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'AccessToken': env.API_TOKEN as string,
    },
    method: "GET"
  });

  return res.json();
}
 
export default async function Page () {
  const questions = await getQuestions();
  const questionsData = JSON.stringify(questions);
  const { subject, status, total, data } = JSON.parse(questionsData);

  return (
    <>
      <h1>Subject: {subject}</h1>
      {data.map((question: { id: number, question: string, option: string }) => (
        <div key={question.id}>
        <p>{question.question}</p>
        <ul>
          {Object.values(question.option).map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        </div>
        ))}
    </>
  );
}