import { Card } from './types';

const CARD_EMOJIS = [
  '🎮', '🎲', '🎯', '🎪',
  '🎨', '🎭', '🎪', '🎢'
];

export const createInitialCards = (): Card[] => {
  const pairs = [...CARD_EMOJIS, ...CARD_EMOJIS];
  return pairs
    .sort(() => Math.random() - 0.5)
    .map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
};

export const checkForMatch = (cards: Card[], firstId: number, secondId: number): boolean => {
  const firstCard = cards.find(card => card.id === firstId);
  const secondCard = cards.find(card => card.id === secondId);
  return firstCard?.value === secondCard?.value;
};

export const isGameComplete = (cards: Card[]): boolean => {
  return cards.every(card => card.isMatched);
};