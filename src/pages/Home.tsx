import React from 'react';
import { GameCard } from '../components/GameCard';
import { Footer } from '../components/Footer';
import { ThemeToggle } from '../components/ThemeToggle';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-fuchsia-100 
                    dark:from-gray-900 dark:to-violet-950 transition-colors duration-300">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent 
                       bg-gradient-to-r from-violet-600 to-fuchsia-600 
                       dark:from-violet-400 dark:to-fuchsia-400 mb-4">
          Game Arena
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-xl">
          Choose your challenge and compete with friends!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <GameCard
            title="Tic Tac Toe"
            description="Strategic battle for victory! Make your mark and claim the win."
            to="/tictactoe"
            image="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80&w=2067"
          />
          <GameCard
            title="Memory Match"
            description="Test your memory in this exciting card-matching challenge!"
            to="/matching"
            image="https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&q=80&w=2067"
          />
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl 
                          bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 
                          dark:from-violet-600/20 dark:to-fuchsia-600/20 
                          backdrop-blur-lg border-2 border-dashed border-violet-300 
                          dark:border-violet-700">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="text-3xl font-bold text-violet-700 dark:text-violet-300 mb-4">
                More Games Coming Soon!
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Stay tuned for exciting new additions to our game collection!
              </p>
              <div className="mt-6 text-5xl animate-bounce">🎮</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};