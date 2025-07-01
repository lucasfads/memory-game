import { useState } from 'react'
import './App.css'

// Importing the BoardView component
import BoardView from './components/BoardView'

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Memory Game</h1>
          <p>Flip the cards to find matching pairs!</p>
        </div>
      </header>
      <section>
        <div className="container">
          <BoardView />
        </div>
      </section>
      
    </>
  )
}

export default App
