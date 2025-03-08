import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Nav from './components/Navbar'
import Quiz from './pages/QuizPage'
import About from './pages/AboutPage'

function App() {

  return (
    <>
      <h1>Trivia Tide </h1>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  )
}

export default App
