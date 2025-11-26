import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { events } from './Events';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

function EventsPage() {
  const [copiedEventId, setCopiedEventId] = useState(null);
  const longPressTimer = useRef(null);
  const isLongPress = useRef(false);

  const handleEventClick = (eventId) => {
    if (!isLongPress.current) {
      // Navigation handled by Link component
    }
    isLongPress.current = false;
  };

  const handleLongPressStart = (eventId, e) => {
    e.preventDefault();
    isLongPress.current = false;
    longPressTimer.current = setTimeout(() => {
      isLongPress.current = true;
      const baseUrl = window.location.origin + window.location.pathname;
      const eventLink = `${baseUrl}#/events/${eventId}`;
      
      navigator.clipboard.writeText(eventLink).then(() => {
        setCopiedEventId(eventId);
        setTimeout(() => setCopiedEventId(null), 2000);
      }).catch(err => {
        console.error('Failed to copy:', err);
      });
    }, 500);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  // Group events by category
  const categories = ['Social', 'Work', 'Activities'];

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div 
      className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/berliners.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div className="profile-section">
          <div className="glass-header">
            <h1 className="profile-title">Upcoming Events</h1>
            <p className="profile-subtitle">Join us at community events across Berlin</p>
            <Link to="/" className="nav-link" style={{
              display: 'inline-block',
              marginTop: '1rem',
              color: '#4a5568',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              ← Back to Groups
            </Link>
          </div>
        </div>
        
        {categories.map((cat, idx) => {
          const catEvents = sortedEvents.filter(e => e.category === cat);
          if (!catEvents.length) return null;
          
          return (
            <div key={cat} style={{marginBottom: '2.5rem'}}>
              {idx !== 0 && <hr className="category-separator" />}
              <h2 style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, margin: '1.5rem 0 1rem 0', color: '#222', letterSpacing: '-0.5px'}}>{cat}</h2>
              <div className="links-section grid-tiles">
                {catEvents.map((event) => (
                  <Link
                    key={event.id}
                    to={`/events/${event.id}`}
                    onClick={() => handleEventClick(event.id)}
                    onMouseDown={(e) => handleLongPressStart(event.id, e)}
                    onMouseUp={handleLongPressEnd}
                    onMouseLeave={handleLongPressEnd}
                    onTouchStart={(e) => handleLongPressStart(event.id, e)}
                    onTouchEnd={handleLongPressEnd}
                    className={`tile-button event-tile ${copiedEventId === event.id ? 'copied' : ''}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="tile-emoji">{event.emoji}</span>
                    <span className="tile-name">{event.name.replace(event.emoji, '').trim()}</span>
                    <span className="event-date">{formatDate(event.date)}</span>
                    {copiedEventId === event.id && <span className="copied-indicator">Copied!</span>}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        
        <div className="footer">
          <p>Built with ❤️ for the Berlin community by Abhinav</p>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
