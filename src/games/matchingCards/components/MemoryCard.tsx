import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../types';

interface MemoryCardProps {
  card: Card;
  onClick: () => void;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ card, onClick }) => {
  const variants = {
    flipped: { rotateY: 180, transition: { duration: 0.6 } },
    unflipped: { rotateY: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.05 } : {}}
      whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.95 } : {}}
      animate={card.isFlipped || card.isMatched ? "flipped" : "unflipped"}
      variants={variants}
      className="w-full aspect-square perspective-1000 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-full transform-style-3d">
        {/* Card Back */}
        <div 
          className={`absolute inset-0 backface-hidden bg-gradient-to-br 
                     from-violet-500 to-fuchsia-500 rounded-xl shadow-lg 
                     flex items-center justify-center transform ${
            card.isFlipped || card.isMatched ? 'rotate-y-180 opacity-0' : 'opacity-100'
          }`}
        >
          <div className="text-white text-4xl font-bold">?</div>
        </div>
        
        {/* Card Front */}
        <div 
          className={`absolute inset-0 backface-hidden bg-white 
                     dark:bg-gray-800 rounded-xl shadow-lg
                     transform rotate-y-180 ${
            card.isFlipped || card.isMatched ? 'rotate-y-360 opacity-100' : 'opacity-0'
          } ${card.isMatched ? 'ring-4 ring-green-500 dark:ring-green-400' : ''}
                     flex items-center justify-center`}
        >
          <span className="text-6xl select-none">
            {(card.isFlipped || card.isMatched) ? card.value : ''}
          </span>
        </div>
      </div>
    </motion.div>
  );
}