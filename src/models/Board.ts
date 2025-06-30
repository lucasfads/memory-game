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

    flipCard(cardId: number) {
        const card = this.cards.find(c => c.id === cardId);
        if (card && !card.isFlipped && !card.isMatched) {
            card.isFlipped = true;
        }

        const flippedCards = this.cards.filter(c => c.isFlipped && !c.isMatched);
        if (flippedCards.length === 2) {
            const [card1, card2] = flippedCards;
            if (card1.pairId === card2.pairId) {
                card1.isMatched = true;
                card2.isMatched = true;
                this.matchedPairs++;
                if (this.matchedPairs === this.pairsCount) {
                    this.isGameOver = true;
                }
                return 1;
            } else {
                setTimeout(() => {
                    card1.isFlipped = false;
                    card2.isFlipped = false;
                }, 1000);
                return -1;
            }
        }
        return 0;
    }
}