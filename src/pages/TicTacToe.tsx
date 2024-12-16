import React, { useState } from 'react';
import { WinnerModal } from '../components/WinnerModal';
import { PageContainer } from '../components/layout/PageContainer';
import { Board } from '../games/ticTacToe/components/Board';
import { getGameStatus } from '../games/ticTacToe/TicTacToeLogic';
import { useSoundEffects } from '../utils/soundEffects';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const { playMove, playWin } = useSoundEffects();

  const handleClick = (i: number) => {
    const gameStatus = getGameStatus(board);
    if (gameStatus.isGameOver || board[i]) return;

    const newBoard = board.slice();
    newBoard[i] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    playMove();

    const newGameStatus = getGameStatus(newBoard);
    if (newGameStatus.isGameOver) {
      playWin();
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const gameStatus = getGameStatus(board);
  const currentPlayerText = `Next Player: ${isXNext ? 'X' : 'O'}`;

  return (
    <PageContainer title="Tic Tac Toe">
      <div className="flex flex-col items-center gap-8">
        {!gameStatus.isGameOver && (
          <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            {currentPlayerText}
          </div>
        )}
        <Board squares={board} onSquareClick={handleClick} />
        {gameStatus.isGameOver && (
          <WinnerModal
            winner={gameStatus.winner ? `Player ${gameStatus.winner} Wins!` : "It's a Tie!"}
            onPlayAgain={resetGame}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default TicTacToe;