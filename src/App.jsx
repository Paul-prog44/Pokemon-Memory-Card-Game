import { useState } from 'react'
import './App.css'
import DataFetchingComponent from './components/DataFetchingComponent'

function App() {
const [score, setScore] = useState(0)
const [bestScore, setBestScore] = useState(0)
const [selectedPokemons, setSelectedPokemons] = useState([])


  return (
    <>
      <h1>Memory card game - Pokemon</h1>
      <p>Get points by selecting an image on which you have never clicked before, if you pick the same image twice, you loose !</p>
      <div className="scoreBoard">
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
      </div>
      <DataFetchingComponent setScore={setScore} score={score} selectedPokemons={selectedPokemons} setSelectedPokemons={setSelectedPokemons}/>
    </>
  )
}

export default App
