import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import BooleanQuestion from '../components/BooleanQuestion';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';


export default function QuizPage() {

  const { amount, category, difficulty, type } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const score = useRef(0);

  useEffect(() => {
    const getTriviaQuestions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && data.results) {
          setQuestions(data.results);
        }

        setCurrentQuestionIndex(0);
        score.current = 0;
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getTriviaQuestions();
  }, [amount, category, difficulty, type]);

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      score.current += 1;
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/results', {
        state: {
          score: score.current,
          totalQuestions: questions.length,
        },
      });
    }
  };

  const shuffleAnswers = (question) => {
    if (!question) return [];
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    return allAnswers.sort(() => Math.random() - 0.5);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-lg text-gray-700">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (!Array.isArray(questions) || !questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">No Questions</h2>
          <p className="text-gray-700 mb-6">No questions available for these settings</p>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Try Different Settings
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-gray-800">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h1>
          <div className="bg-emerald-100 px-4 py-2 rounded-lg border border-emerald-300">
            <span className="font-semibold text-emerald-800">
              Score: {score.current}
            </span>
          </div>
        </div>

        {currentQuestion.type === 'boolean' ? (
          <BooleanQuestion
            question={currentQuestion.question}
            correctAnswer={currentQuestion.correct_answer}
            onAnswerSelected={handleAnswerSelected}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />
        ) : (
          <MultipleChoiceQuestion
            question={currentQuestion.question}
            choices={shuffleAnswers(currentQuestion)}
            correctAnswer={currentQuestion.correct_answer}
            onAnswerSelected={handleAnswerSelected}
            onNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />
        )}
      </div>
    </div>
  );
}