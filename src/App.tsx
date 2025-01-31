import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Blackjack from './components/pages/Blackjack';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="blackjack" element={<Blackjack />} />
      </Routes>
    </Router>
  );
}

export default App;
