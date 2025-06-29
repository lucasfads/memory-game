import type Card from '../types/card';

export default class Board {
    cards: Card[];
    pairsCount: number;
    matchedPairs: number;
    isGameOver: boolean;

    constructor(contents: string[], pairsCount: number) {
        if (pairsCount < 1 || pairsCount > contents.length) {
            throw new Error('Invalid pairs count');
        }
        this.cards = [];
        this.pairsCount = pairsCount;
        this.matchedPairs = 0;
        this.isGameOver = false;

        for (let i = 0; i < pairsCount; i++) {
            const contentIndex = Math.floor(Math.random() * contents.length);
            const content = contents[contentIndex];
            contents.splice(contentIndex, 1);
            this.addPair(content, i);
        }
        this.cards.sort(() => Math.random() - 0.5);
    }

    addPair(content: string, pairId: number = Math.floor(this.cards.length / 2)) {
        for (let i = 0; i < 2; i++) {
            this.cards.push({
                pairId,
                id: this.cards.length,
                content,
                isFlipped: false,
                isMatched: false,
            });
        }
    }
}