// Common game utilities
export const createInitialGameState = (players: number = 2) => ({
  currentPlayer: 1,
  players: Array(players).fill(null).map((_, i) => ({
    name: `Player ${i + 1}`,
    score: 0
  })),
  isGameOver: false,
  winner: null
});

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));