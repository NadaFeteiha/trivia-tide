import { Link } from "react-router-dom";
import { useState } from "react";
import categories from "../data/categories";

export default function HomePage() {
    const [amount, setAmount] = useState(10);
    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState("easy");
    const [type, setType] = useState("multiple");

    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center border border-gray-200">
                <h2 className="text-2xl font-bold text-[#30386f] mb-4">Quiz Setup</h2>

                <div className="mb-4 text-left">
                    <label className="block font-semibold text-gray-700 mb-1">
                        Number of Questions:
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="50"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30386f]"
                    />
                </div>

                <div className="mb-4 text-left">
                    <label className="block font-semibold text-gray-700 mb-1">
                        Select Category:
                    </label>
                    <select
                        value={category}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setCategory(e.target.value)
                        }
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30386f]"
                    >
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4 text-left">
                    <label className="block font-semibold text-gray-700 mb-1">
                        Select Difficulty:
                    </label>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30386f]"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="mb-6 text-left">
                    <label className="block font-semibold text-gray-700 mb-1">
                        Select Type:
                    </label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30386f]"
                    >
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True/False</option>
                    </select>
                </div>

                <Link
                    to={`/quiz/${amount}/${category}/${difficulty}/${type}`}
                    className="bg-[#30386f] text-white text-xl font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#1e275d] transition duration-300 inline-block w-full"
                >
                    Start Quiz
                </Link>
            </div>
        </div>
    );
}