import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { events } from './Events';
import { formatDateLong } from './utils/formatters';
import { isValidExternalUrl } from './utils/constants';
import Layout from './components/Layout';

function EventPage() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const handleRsvpClick = () => {
    // Validate URL before opening
    if (isValidExternalUrl(event.rsvpUrl)) {
      window.open(event.rsvpUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.error('Invalid RSVP URL');
    }
  };

  const eventName = event.name.replace(event.emoji, '').trim();

  return (
    <Layout maxWidth="600px">
      <header className="profile-section">
        <div className="glass-header">
          <div className="event-emoji-large" aria-hidden="true">{event.emoji}</div>
          <h1 className="profile-title event-title">{eventName}</h1>
          <dl className="event-meta">
            <div className="event-detail">
              <dt className="sr-only">Date</dt>
              <dd>
                <span aria-hidden="true">📅</span>
                <span>{formatDateLong(event.date)}</span>
              </dd>
            </div>
            <div className="event-detail">
              <dt className="sr-only">Time</dt>
              <dd>
                <span aria-hidden="true">🕐</span>
                <span>{event.time}</span>
              </dd>
            </div>
            <div className="event-detail">
              <dt className="sr-only">Location</dt>
              <dd>
                <span aria-hidden="true">📍</span>
                <span>{event.location}</span>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <main>
        <article className="event-description-card">
          <h2 className="event-description-title">About this event</h2>
          <p className="event-description-text">{event.description}</p>
        </article>

        <button
          onClick={handleRsvpClick}
          className="rsvp-button"
          aria-label={`RSVP for ${eventName}`}
        >
          RSVP Here
        </button>

        <nav className="event-nav" aria-label="Event navigation">
          <Link to="/events" className="nav-link-secondary" aria-label="View all events">
            ← All Events
          </Link>
          <Link to="/" className="nav-link-secondary" aria-label="Go to home page">
            🏠 Home
          </Link>
        </nav>
      </main>
    </Layout>
  );
}

export default EventPage;
