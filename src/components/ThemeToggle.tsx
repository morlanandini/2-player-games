import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 
                 text-indigo-900 dark:text-indigo-100 shadow-lg"
    >
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </motion.button>
  );
};