import { useState } from 'react'
import './App.css'
import DataFetchingComponent from './components/DataFetchingComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Memory card game - Pokemon</h1>
      <DataFetchingComponent/>
    </>
  )
}

export default App
