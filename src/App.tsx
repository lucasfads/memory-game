import { useState } from 'react'
import './App.css'

import Board from './models/Board'
import BoardView from './components/BoardView'

function App() {
  const [board, _setBoard] = useState(() => new Board(['🐸', '🐼', '🐞', '🦁'], 4));
  const [_renderTrigger, setRenderTrigger] = useState(0);

  const handleCardClick = (cardId: number) => {
      const matched = board.flipCard(cardId);
      setRenderTrigger(prev => prev + 1);
      if (matched === -1) {
          setTimeout(() => {
              setRenderTrigger(prev => prev + 1);
          }, 1000);
      }
  };

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
          <BoardView board={board} onCardClick={handleCardClick}/>
        </div>
      </section>
    </>
  )
}

export default App
