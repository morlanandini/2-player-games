import React from 'react';
import Lottie from 'lottie-react';
import confettiAnimation from '../assets/confetti.json';
import { motion } from 'framer-motion';

interface WinnerModalProps {
  winner: string;
  onPlayAgain: () => void;
}

export const WinnerModal: React.FC<WinnerModalProps> = ({ winner, onPlayAgain }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-75">
          <Lottie
            animationData={confettiAnimation}
            loop={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent 
                         bg-gradient-to-r from-violet-600 to-fuchsia-600 
                         dark:from-violet-400 dark:to-fuchsia-400">
            {winner}
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPlayAgain}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 
                       text-white px-6 py-2 rounded-lg hover:opacity-90 
                       transition-opacity shadow-lg"
          >
            Play Again
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};