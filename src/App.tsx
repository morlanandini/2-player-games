import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import MatchingCards from './pages/MatchingCards';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/matching" element={<MatchingCards />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;