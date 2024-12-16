export interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface MatchingGameState {
  cards: Card[];
  flippedCards: number[];
  currentPlayer: 1 | 2;
  scores: {
    player1: number;
    player2: number;
  };
  gameOver: boolean;
}