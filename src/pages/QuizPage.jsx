import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";
import styles from '../styles/QuizPage.module.css';

export default function QuizPage() {
  const { amount, category, difficulty, type } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([])
  const score = useRef(0);

  // to display first time to call the api 
  useEffect(() => {
    console.log("useEffect called");
    const getTriviaQuestions = async () => {
      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
        const data = await response.json();
        if (response.ok && data.results) {
          setQuestions(data.results);
          setCurrentQuestion(0);
        }
        console.log(`Data = ${data.results}`);
      } catch (error) {
        console.error("Error fetching trivia questions:", error);
      }
    };

    getTriviaQuestions();
  }, [amount, category, difficulty, type])

  if (!questions || questions.length === 0) return <h1>Loading...</h1>;

  return (
    <main className={styles.container}>
      <h1>Quiz Page</h1>
      <h2>Your score= {score.current}</h2>

      <MultipleChoiceQuestion
        index={currentQuestion}
        question={questions[currentQuestion]?.question}
        choices={shuffle(questions[currentQuestion])}
        correctAnswer={questions[currentQuestion]?.correct_answer}
        score={score}
        setCurrentQuestion={setCurrentQuestion}
        isLastQuestion={currentQuestion === questions.length - 1}
      />
    </main>
  );
}

function shuffle(question) {
  const correctAnswer = question.correct_answer;
  const incorrectAnswers = question.incorrect_answers;
  const allAnswers = [...incorrectAnswers, correctAnswer];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  return shuffledAnswers;
}

