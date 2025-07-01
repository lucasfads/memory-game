import { useState } from 'react'
import './App.css'

import Board from './models/Board'
import BoardView from './components/BoardView'

function App() {
  const emojiSets = {
    animals: ["🐸", "🐼", "🐞", "🦁", "🐯", "🐨", "🐰", "🦊", "🐺", "🐮", "🐷", "🐵"],
    fruits: ["🍎", "🍌", "🍊", "🍇", "🍓", "🥝", "🍑", "🥭", "🍍", "🥥", "🍒", "🍉"],
    sports: ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏓", "🏸", "🥍", "🏒", "🏑", "🎱"],
    vehicles: ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚"]
  }
  const [emojiSet, setEmojiSet] = useState(emojiSets.animals);
  const [numberOfPairs, setNumberOfPairs] = useState(3);
  const [board, setBoard] = useState(() => new Board(emojiSet, numberOfPairs));
  
  const [renderTrigger, setRenderTrigger] = useState(0);

  const createNewGame = () => {
    const newBoard = new Board(emojiSet, numberOfPairs);
    setBoard(newBoard);
    setRenderTrigger(prev => prev + 1);
  };

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
           <select onChange={(e) => setEmojiSet(JSON.parse(e.target.value))}>
            { Object.entries(emojiSets).map(([key, emojis]) => (
              <option key={key} value={JSON.stringify(emojis)}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            )) }
          </select>
          <select
            value={numberOfPairs}
            onChange={(e) => setNumberOfPairs(Number(e.target.value))}
          >
            <option value="3">Easy (3 Pairs)</option>
            <option value="6">Medium (6 Pairs)</option>
            <option value="12">Hard (12 Pairs)</option>
          </select>
          <button onClick={createNewGame}>New Game</button>
        </div>
      </header>
      <section>
        <div className="container">
          <BoardView board={board} onCardClick={handleCardClick} key={renderTrigger}/>
        </div>
      </section>
    </>
  )
}

export default App
