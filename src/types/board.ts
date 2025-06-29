import type Card from './card';

export class Board {
    cards: Card[];
    pairsCount: number;
    flippedCards: Card[];
    matchedPairs: number;
    isGameOver: boolean;

    constructor(contents: string[], pairsCount: number) {
        // example contents: ['A', 'B', 'C', 'D']
        // create pairs of cards
        const cards: Card[] = [];
        contents.forEach((content, index) => {
            const pairId = Math.floor(index / 2);
            const id = index % 2;
            cards.push({
                pairId,
                id,
                content,
                isFlipped: false,
                isMatched: false,
            });
        });

        this.cards = cards;
        this.pairsCount = pairsCount;
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.isGameOver = false;
    }
}