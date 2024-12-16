import React, { useState, useEffect } from 'react';
import { WinnerModal } from '../components/WinnerModal';
import { PageContainer } from '../components/layout/PageContainer';
import { GameBoard } from '../games/matchingCards/components/GameBoard';
import { ScoreBoard } from '../games/matchingCards/components/ScoreBoard';
import { createInitialCards, checkForMatch, isGameComplete } from '../games/matchingCards/MatchingCardsLogic';
import { useSoundEffects } from '../utils/soundEffects';
import { delay } from '../utils/gameLogic';
import type { Card } from '../games/matchingCards/types';

const MatchingCards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const { playFlip, playMatch, playWin } = useSoundEffects();

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    setCards(createInitialCards());
    setFlippedCards([]);
    setScores({ player1: 0, player2: 0 });
    setCurrentPlayer(1);
    setGameOver(false);
    setIsProcessing(false);
  };

  const handleCardClick = async (cardId: number) => {
    if (
      isProcessing ||
      flippedCards.length === 2 ||
      flippedCards.includes(cardId) ||
      cards[cardId].isMatched
    ) {
      return;
    }

    playFlip();

    const newCards = cards.map(card =>
      card.id === cardId ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    
    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setIsProcessing(true);
      const [firstId, secondId] = newFlippedCards;
      
      if (checkForMatch(newCards, firstId, secondId)) {
        await handleMatch(newCards, firstId, secondId);
      } else {
        await handleMismatch(newCards, firstId, secondId);
      }
      setIsProcessing(false);
    }
  };

  const handleMatch = async (currentCards: Card[], firstId: number, secondId: number) => {
    await delay(500);
    playMatch();

    const updatedCards = currentCards.map(card =>
      card.id === firstId || card.id === secondId
        ? { ...card, isMatched: true }
        : card
    );

    const newScores = {
      ...scores,
      [`player${currentPlayer}`]: scores[`player${currentPlayer}` as keyof typeof scores] + 1
    };

    setCards(updatedCards);
    setScores(newScores);
    setFlippedCards([]);

    if (isGameComplete(updatedCards)) {
      setGameOver(true);
      playWin();
    }
  };

  const handleMismatch = async (currentCards: Card[], firstId: number, secondId: number) => {
    await delay(1000);

    const resetCards = currentCards.map(card =>
      card.id === firstId || card.id === secondId
        ? { ...card, isFlipped: false }
        : card
    );

    setCards(resetCards);
    setFlippedCards([]);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const getWinnerText = () => {
    if (scores.player1 === scores.player2) return "It's a Tie!";
    return `Player ${scores.player1 > scores.player2 ? '1' : '2'} Wins!`;
  };

  return (
    <PageContainer title="Memory Match">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
        <ScoreBoard currentPlayer={currentPlayer} scores={scores} />
        <GameBoard cards={cards} onCardClick={handleCardClick} />
        {gameOver && (
          <WinnerModal
            winner={getWinnerText()}
            onPlayAgain={initializeGame}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default MatchingCards;