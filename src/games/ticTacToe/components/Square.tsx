import React from 'react';
import { motion } from 'framer-motion';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-24 h-24 bg-white dark:bg-gray-700 rounded-xl shadow-lg 
               text-4xl font-bold flex items-center justify-center
               transition-colors duration-300"
    onClick={onClick}
  >
    {value === 'X' && (
      <img 
        src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/x.svg" 
        alt="X"
        className="w-12 h-12 text-violet-600 dark:text-violet-400"
      />
    )}
    {value === 'O' && (
      <div className="w-12 h-12 rounded-full border-4 border-fuchsia-600 
                      dark:border-fuchsia-400" />
    )}
  </motion.button>
);