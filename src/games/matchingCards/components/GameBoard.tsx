import React from 'react';
import { Card } from '../types';
import { MemoryCard } from './MemoryCard';

interface GameBoardProps {
  cards: Card[];
  onCardClick: (cardId: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ cards, onCardClick }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl w-full">
    {cards.map((card) => (
      <MemoryCard
        key={card.id}
        card={card}
        onClick={() => onCardClick(card.id)}
      />
    ))}
  </div>
);