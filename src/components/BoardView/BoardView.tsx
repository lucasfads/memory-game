import Board from '../../models/Board';

const BoardView = () => {
    const board = new Board(['A', 'B', 'C', 'D'], 4);

    return (
        <div className="board">
            {board.cards.map((card) => (
                <div key={`${card.pairId}-${card.id}`}>
                    { card.content }
                </div>
            ))}
        </div>
    );
}

export default BoardView;