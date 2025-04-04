import { useState } from 'react';

function MultipleChoiceQuestion({
    question, choices, correctAnswer, onAnswerSelected, onNextQuestion, isLastQuestion
}) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswer = (choice) => {
        if (!isSubmitted) {
            setSelectedAnswer(choice);
        }
    };

    const handleSubmit = () => {
        if (selectedAnswer) {
            setIsSubmitted(true);
            onAnswerSelected(selectedAnswer === correctAnswer);
        }
    };

    const handleNext = () => {
        setIsSubmitted(false);
        setSelectedAnswer(null);
        onNextQuestion();
    };

    const getChoiceButtonClasses = (choice) => {
        if (!isSubmitted) {
            return choice === selectedAnswer
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'hover:bg-indigo-100 border-gray-300';
        }

        if (choice === correctAnswer) {
            return 'bg-green-500 text-white border-green-500';
        }
        if (choice === selectedAnswer && choice !== correctAnswer) {
            return 'bg-red-500 text-white border-red-500';
        }
        return 'bg-white border-gray-300';
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">{question}</h2>
            <div className="flex flex-col space-y-2 mb-4">
                {choices.map((choice, idx) => (
                    <button
                        key={idx}
                        className={`w-full text-left p-3 border rounded-lg transition-all ${getChoiceButtonClasses(choice)}`}
                        onClick={() => handleAnswer(choice)}
                        disabled={isSubmitted}
                    >
                        {choice}
                    </button>
                ))}
            </div>

            <button
                className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400"
                onClick={isSubmitted ? handleNext : handleSubmit}
                disabled={!selectedAnswer && !isSubmitted}
            >
                {isSubmitted ? (isLastQuestion ? 'Finish Quiz' : 'Next Question') : 'Submit Answer'}
            </button>
        </div>
    );
};

export default MultipleChoiceQuestion;