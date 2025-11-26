import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import './App.css';
import { events } from './Events';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });
}

function EventPage() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  
  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const handleRsvpClick = () => {
    window.open(event.rsvpUrl, '_blank', 'noopener,noreferrer');
  };

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
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="profile-section">
          <div className="glass-header">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{event.emoji}</div>
            <h1 className="profile-title" style={{ fontSize: '1.8rem' }}>
              {event.name.replace(event.emoji, '').trim()}
            </h1>
            <div className="event-meta" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginTop: '1.5rem',
              textAlign: 'center'
            }}>
              <div className="event-detail" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#4a5568',
                fontWeight: 500
              }}>
                <span>📅</span>
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="event-detail" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#4a5568',
                fontWeight: 500
              }}>
                <span>🕐</span>
                <span>{event.time}</span>
              </div>
              <div className="event-detail" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#4a5568',
                fontWeight: 500
              }}>
                <span>📍</span>
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '16px',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <h3 style={{ 
            color: '#222', 
            marginBottom: '0.75rem',
            fontSize: '1.1rem',
            fontWeight: 600
          }}>About this event</h3>
          <p style={{ 
            color: '#4a5568', 
            lineHeight: 1.6,
            fontSize: '0.95rem'
          }}>{event.description}</p>
        </div>

        <button
          onClick={handleRsvpClick}
          className="rsvp-button"
          style={{
            width: '100%',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#fff',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            marginBottom: '1.5rem'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
          }}
        >
          💬 RSVP on WhatsApp
        </button>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link 
            to="/events" 
            style={{
              color: '#4a5568',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '8px',
              transition: 'background 0.2s'
            }}
          >
            ← All Events
          </Link>
          <Link 
            to="/" 
            style={{
              color: '#4a5568',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '8px',
              transition: 'background 0.2s'
            }}
          >
            🏠 Home
          </Link>
        </div>
        
        <div className="footer" style={{ marginTop: '2rem' }}>
          <p>Built with ❤️ for the Berlin community by Abhinav</p>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
