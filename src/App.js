import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import GroupRedirect from './GroupRedirect';
import EventsPage from './EventsPage';
import EventPage from './EventPage';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/group/:id" element={<GroupRedirect />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App; 
