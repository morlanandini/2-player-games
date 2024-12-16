import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  description: string;
  to: string;
  image: string;
}

export const GameCard: React.FC<GameCardProps> = ({ title, description, to, image }) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl 
                   transition-all duration-300"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 
                     group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h3 className="text-3xl font-bold mb-3">{title}</h3>
          <p className="text-gray-200 text-lg">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};