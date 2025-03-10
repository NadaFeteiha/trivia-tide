import { useState } from 'react';

function MultipleChoiceQuestion({ index, question, choices, correctAnswer, score, setCurrentQuestion, isLastQuestion }) {
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
            if (selectedAnswer === correctAnswer) {
                score.current += 1;
            }
        }
    };

    const handleNext = () => {
        setIsSubmitted(false);
        setSelectedAnswer(null);

        if (!isLastQuestion) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    const getChoiceButtonClasses = (choice) => {
        if (isSubmitted) {
            if (choice === correctAnswer) {
                return "bg-green-500 text-white border-green-500";
            }
            if (choice === selectedAnswer) {
                return "bg-red-500 text-white border-red-500";
            }
            return "bg-white border-gray-300";
        }

        if (choice === selectedAnswer) {
            return "bg-[#b4bace] text-white border-[#b4bace]";
        }

        return "hover:bg-[#fcd447] hover:text-white border-gray-300";
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto ">
            <h2 className="text-lg font-semibold mb-4 text-[#30386f]">{index + 1}. {question}</h2>
            <div className="flex flex-col space-y-2">
                {choices.map((choice, index) => (
                    <button
                        key={index}
                        className={`w-full text-left p-3 border rounded-lg transition-all ${getChoiceButtonClasses(choice)}`}
                        onClick={() => handleAnswer(choice)}
                        disabled={isSubmitted}
                    >
                        {choice}
                    </button>
                ))}
            </div>

            <button
                className="w-full bg-[#30386f] text-white p-3 rounded-lg mt-4 disabled:bg-gray-400"
                onClick={isSubmitted ? handleNext : handleSubmit}
                disabled={!selectedAnswer && !isSubmitted}
            >
                {isSubmitted ? (isLastQuestion ? "Finish" : "Next") : "Submit"}
            </button>
        </div>
    );
}

export default MultipleChoiceQuestion;
