import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GroupRedirect from './GroupRedirect';
import EventsPage from './EventsPage';
import EventPage from './EventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group/:id" element={<GroupRedirect />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App; 
