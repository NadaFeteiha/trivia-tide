import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Quiz from './pages/QuizPage'

function App() {

  return (
    <>
      <h1>Trivia Tide</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:amount/:category/:difficulty/:type" element={<Quiz />} />
      </Routes>

    </>
  )
}

export default App
