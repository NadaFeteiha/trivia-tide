import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Quiz from './pages/QuizPage'
import bg from './assets/bg.webp'
import { FaGamepad } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import ResultsPage from './pages/ResultsPage'

function App() {

  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <div className="flex items-center justify-center text-4xl text-white font-bold p-4  bg-indigo-950 gap-5">
        <FaGamepad />
        <h1>Trivia Tide</h1>
        <MdOutlineQuiz />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:amount/:category/:difficulty/:type" element={<Quiz />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>

    </div>
  )
}

export default App
