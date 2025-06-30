import { useState } from 'react'
import './App.css'

// Importing the BoardView component
import BoardView from './components/BoardView'

function App() {
  return (
    <>
      <h1>Memory Game</h1>
      <BoardView />
    </>
  )
}

export default App
