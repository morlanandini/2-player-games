export interface Player {
  name: string;
  score: number;
}

export interface GameState {
  currentPlayer: number;
  players: Player[];
  isGameOver: boolean;
  winner: number | null;
}