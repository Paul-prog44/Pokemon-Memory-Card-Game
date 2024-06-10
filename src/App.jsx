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
      <h3>Get points by selecting an image on which you have never clicked before, if you pick the same image twice, you loose !</h3>
      <div className="scoreBoard">
        <h3>Score: {score}</h3>
        <h3>Best score: {bestScore}</h3>
      </div>
      <DataFetchingComponent 
        setScore={setScore} 
        score={score} 
        selectedPokemons={selectedPokemons} 
        setSelectedPokemons={setSelectedPokemons}
        setBestScore={setBestScore}
        bestScore={bestScore}
      />
    </>
  )
}

export default App
