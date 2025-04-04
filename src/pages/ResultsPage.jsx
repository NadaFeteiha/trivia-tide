import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { score = 0, totalQuestions = 0 } = location.state || {};
    const percentage = Math.round((score / totalQuestions) * 100);

    const getResultMessage = () => {
        if (percentage >= 80) return "🎉 Excellent! You're a trivia master!";
        if (percentage >= 60) return "👍 Good job! You know your stuff!";
        if (percentage >= 40) return "🤔 Not bad! Keep practicing!";
        return "😅 Keep learning! You'll do better next time!";
    };

    const getResultColor = () => {
        if (percentage >= 80) return "bg-gradient-to-r from-green-400 to-teal-500";
        if (percentage >= 60) return "bg-gradient-to-r from-blue-400 to-indigo-500";
        if (percentage >= 40) return "bg-gradient-to-r from-yellow-400 to-orange-500";
        return "bg-gradient-to-r from-red-400 to-pink-500";
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Quiz Results</h1>

                <div className={`${getResultColor()} text-white rounded-lg p-6 text-center mb-6`}>
                    <div className="text-5xl font-bold mb-2">{percentage}%</div>
                    <div className="text-xl">{getResultMessage()}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">{score}</div>
                        <div className="text-gray-600">Correct</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-gray-600">{totalQuestions - score}</div>
                        <div className="text-gray-600">Incorrect</div>
                    </div>
                </div>

                <div className="flex flex-col space-y-3">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition"
                    >
                        Start New Quiz
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-white hover:bg-gray-100 text-indigo-600 py-3 rounded-lg font-medium border border-indigo-600 transition"
                    >
                        Review Answers
                    </button>
                </div>
            </div>
        </div>
    );
}