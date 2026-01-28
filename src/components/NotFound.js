import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

/**
 * 404 Not Found page component
 * Displayed when users navigate to a non-existent route
 */
function NotFound() {
  return (
    <Layout>
      <div className="profile-section">
        <div className="glass-header">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
          <h1 className="profile-title">Page Not Found</h1>
          <p className="profile-subtitle">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/"
              className="nav-link"
              aria-label="Go to home page"
            >
              🏠 Go Home
            </Link>
            <Link
              to="/events"
              className="nav-link"
              aria-label="View upcoming events"
            >
              📅 View Events
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
