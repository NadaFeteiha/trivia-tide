import { Link } from "react-router-dom";
import { useState } from "react";
import categories from "../data/categories";

export default function HomePage() {
    const [amount, setAmount] = useState(10);
    const [category, setCategory] = useState("9");
    const [difficulty, setDifficulty] = useState("easy");
    const [type, setType] = useState("multiple");

    const handleAmountChange = (e) => {
        const value = Math.min(Math.max(parseInt(e.target.value) || 1, 50));
        setAmount(value);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
                <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
                    Quiz Setup
                </h2>

                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="block font-semibold text-gray-700 mb-1">
                            Number of Questions (1-50):
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="50"
                            value={amount}
                            onChange={handleAmountChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block font-semibold text-gray-700 mb-1">
                            Select Category:
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block font-semibold text-gray-700 mb-1">
                            Select Difficulty:
                        </label>
                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block font-semibold text-gray-700 mb-1">
                            Question Type:
                        </label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="multiple">Multiple Choice</option>
                            <option value="boolean">True/False</option>
                        </select>
                    </div>
                </div>

                <Link
                    to={`/quiz/${amount}/${category}/${difficulty}/${type}`}
                    className="mt-8 bg-indigo-700 hover:bg-indigo-800 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 inline-block w-full text-center"
                >
                    Start Quiz Now
                </Link>
            </div>
        </main>
    );
}