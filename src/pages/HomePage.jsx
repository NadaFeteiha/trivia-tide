import { Link } from "react-router-dom";

export default function HomePage() {

    const amount = 10;
    const category = 9;
    const difficulty = "easy";
    const type = "multiple";

    return (
        <div>
            <Link to={`/quiz/${amount}/${category}/${difficulty}/${type}`} >
                <h2>Start Quiz</h2>
            </Link>

        </div>
    );
}