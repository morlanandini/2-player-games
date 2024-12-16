export const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6] // diagonals
];

export const calculateWinner = (squares: Array<string | null>): string | null => {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const isBoardFull = (squares: Array<string | null>): boolean => {
  return squares.every(square => square !== null);
};

export const getGameStatus = (squares: Array<string | null>) => {
  const winner = calculateWinner(squares);
  if (winner) {
    return { isGameOver: true, winner };
  }
  
  const isTie = isBoardFull(squares);
  if (isTie) {
    return { isGameOver: true, winner: null };
  }
  
  return { isGameOver: false, winner: null };
};