import React from 'react';
import { motion } from 'framer-motion';

interface ScoreBoardProps {
  currentPlayer: 1 | 2;
  scores: {
    player1: number;
    player2: number;
  };
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ currentPlayer, scores }) => (
  <div className="flex justify-center gap-8 mb-8">
    <motion.div
      animate={{
        scale: currentPlayer === 1 ? 1.1 : 1,
        y: currentPlayer === 1 ? -5 : 0
      }}
      className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
        currentPlayer === 1 
          ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' 
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      <div className="text-lg font-bold">Player 1</div>
      <div className="text-3xl font-bold">{scores.player1}</div>
    </motion.div>
    
    <motion.div
      animate={{
        scale: currentPlayer === 2 ? 1.1 : 1,
        y: currentPlayer === 2 ? -5 : 0
      }}
      className={`p-6 rounded-xl shadow-lg transition-colors duration-300 ${
        currentPlayer === 2 
          ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white' 
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      <div className="text-lg font-bold">Player 2</div>
      <div className="text-3xl font-bold">{scores.player2}</div>
    </motion.div>
  </div>
);