import React from 'react';
import { Square } from './Square';

interface BoardProps {
  squares: Array<string | null>;
  onSquareClick: (index: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => (
  <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
    <div className="grid grid-cols-3 gap-4">
      {squares.map((value, i) => (
        <Square key={i} value={value} onClick={() => onSquareClick(i)} />
      ))}
    </div>
  </div>
);