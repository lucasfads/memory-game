import Board from '../../models/Board';
import './BoardView.css';

interface BoardViewProps {
    board: Board;
    onCardClick: (cardId: number) => void;
}

const BoardView = ({ board, onCardClick}: BoardViewProps) => {
    return (
        <div className="board">
            {board.cards.map((card) => (
                <div
                    key={`${card.pairId}-${card.id}`}
                    className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
                    onClick={() => onCardClick(card.id)}
                >
                   {card.isFlipped ? card.content : '?'}
                </div>
            ))}
        </div>
    );
}

export default BoardView;