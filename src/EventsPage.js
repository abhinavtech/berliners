import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { events } from './Events';
import { useLongPress } from './hooks/useLongPress';
import { formatDateShort, generateShareableLink } from './utils/formatters';
import { EVENT_CATEGORIES } from './utils/constants';
import Layout from './components/Layout';

function EventsPage() {
  const { copiedId, wasLongPress, getLongPressHandlers } = useLongPress();

  const eventLinkGenerator = (eventId) => generateShareableLink(`/events/${eventId}`);

  // Sort events by date (memoized for performance)
  const sortedEvents = useMemo(() =>
    [...events].sort((a, b) => new Date(a.date) - new Date(b.date)),
    []
  );

  const handleEventClick = () => {
    // Reset long press state - navigation handled by Link component
    wasLongPress();
  };

  return (
    <Layout>
      <header className="profile-section">
        <div className="glass-header">
          <h1 className="profile-title">Upcoming Events</h1>
          <p className="profile-subtitle">Join us at community events across Berlin</p>
          <Link to="/" className="nav-link header-nav-link" aria-label="Go back to groups">
            ← Back to Groups
          </Link>
        </div>
      </header>

      <main>
        {EVENT_CATEGORIES.map((cat, idx) => {
          const catEvents = sortedEvents.filter(e => e.category === cat);
          if (!catEvents.length) return null;

          return (
            <section key={cat} className="category-section" aria-labelledby={`event-category-${cat}`}>
              {idx !== 0 && <hr className="category-separator" />}
              <h2 id={`event-category-${cat}`} className="category-heading">{cat}</h2>
              <div className="links-section grid-tiles">
                {catEvents.map((event) => (
                  <Link
                    key={event.id}
                    to={`/events/${event.id}`}
                    onClick={handleEventClick}
                    {...getLongPressHandlers(event.id, eventLinkGenerator)}
                    className={`tile-button event-tile ${copiedId === event.id ? 'copied' : ''}`}
                    aria-label={`${event.name.replace(event.emoji, '').trim()} on ${formatDateShort(event.date)}`}
                  >
                    <span className="tile-emoji" aria-hidden="true">{event.emoji}</span>
                    <span className="tile-name">{event.name.replace(event.emoji, '').trim()}</span>
                    <span className="event-date">{formatDateShort(event.date)}</span>
                    {copiedId === event.id && <span className="copied-indicator">Copied!</span>}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </Layout>
  );
}

export default EventsPage;
