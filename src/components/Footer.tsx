import React from 'react';
import { Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg 
                       shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 text-gray-600 
                dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 
                transition-colors duration-300 text-lg">
  <span>Made with</span>
  <Heart className="w-5 h-5 text-red-500 animate-pulse" />
  <span>by</span>

  <a 
    href="https://www.linkedin.com/in/morla-nandini/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-2"
  >
    <span>Nandini Morla</span>
    <Linkedin className="w-5 h-5" />
  </a>
</div>

      </div>
    </footer>
  );
};
