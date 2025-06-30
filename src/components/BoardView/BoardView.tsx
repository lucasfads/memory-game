import { useState } from 'react';
import Board from '../../models/Board';
import './BoardView.css';

const BoardView = () => {
    //const board = new Board(['A', 'B', 'C', 'D'], 4);
    const [board, _setBoard] = useState(() => new Board(['A', 'B', 'C', 'D'], 4));
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
        <div className="board">
            {board.cards.map((card) => (
                <div key={`${card.pairId}-${card.id}`} className={`card ${card.isFlipped ? 'flipped' : 'unflipped'}`} onClick={() => handleCardClick(card.id)}>
                   {card.isFlipped ? card.content : '?'}
                </div>
            ))}
        </div>
    );
}

export default BoardView;