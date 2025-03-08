import { useState } from 'react';
import getTriviaQuestions from '../services/TriviaApi.js'

export default function QuizPage() {

  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    const data = await getTriviaQuestions({ amount: 10, category: 9, difficulty: 'easy', type: 'multiple' })
    setQuestions(data)
  }

  console.log(questions)

  return (
    <div>
      <h1>Quiz Page</h1>

      <button onClick={getQuestions}>Get Questions</button>
    </div>
  );
}