'use client'

import React, { useState, useEffect } from 'react';

type Question = {
  id: number;
  question: string;
  option: { [key: string]: string };
  answer: string;
};

type QuizProps = {
  subject: string;
  data: Question[];
};

const Quiz = ({ subject, data }: QuizProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswerSelection = (questionId: number, selectedOption: string) => {
    setSelectedAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: selectedOption }));
  };

  const checkAnswer = (questionId: number) => {
    const selectedOption = selectedAnswers[questionId];
    if (selectedOption === undefined) {
      return 'Please select an option';
    }
    const correctAnswer = data.find((question) => question.id === questionId)?.answer;
    if (correctAnswer === selectedOption) {
      return 'Correct!';
    } else {
      return 'Incorrect';
    }
  };

  return (
    <>
      <h1 className='font-bold text-center text-4xl'>Subject: {subject}</h1>
      {data?.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          <ul>
            {Object.entries(question.option).map(([key, value]) => (
              <li key={key} onClick={() => handleAnswerSelection(question.id, key)}>
                {value} {selectedAnswers[question.id] === key ? '✅' : ''}
              </li>
            ))}
          </ul>
          <p>{selectedAnswers[question.id] !== undefined ? checkAnswer(question.id) : ''}</p>
        </div>
      ))}
    </>
  );
};

export default function Page() {
  const [quizData, setQuizData] = useState<QuizProps | null>(null);

  const fetchData = async () => {
    const accessToken = process.env.ACCESS_TOKEN;
    const res = await fetch('https://questions.aloc.com.ng/api/v2/m?subject=chemistry', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccessToken': accessToken as string,
      },
      method: 'GET',
    });
    const json = await res.json();
    const { subject, data } = json;
    setQuizData({ subject, data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {quizData ? <Quiz subject={quizData.subject} data={quizData.data} /> : <p>Loading..</p>}
    </>
  );
}
