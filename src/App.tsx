import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importing the BoardView component
import BoardView from './components/BoardView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Memory Game</h1>
      <BoardView />
    </>
  )
}

export default App
