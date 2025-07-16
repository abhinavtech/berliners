import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GroupRedirect from './GroupRedirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group/:id" element={<GroupRedirect />} />
      </Routes>
    </Router>
  );
}

export default App; 
