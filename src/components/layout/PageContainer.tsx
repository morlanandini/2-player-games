import React from 'react';
import { Footer } from '../Footer';

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, title }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{title}</h1>
      {children}
    </div>
    <Footer />
  </div>
);