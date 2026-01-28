import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { groups } from './groups';
import { isValidExternalUrl } from './utils/constants';
import Layout from './components/Layout';

/**
 * Component that handles redirecting to external group URLs
 * Includes URL validation to prevent open redirect vulnerabilities
 */
function GroupRedirect() {
  const { id } = useParams();
  const [isValidating, setIsValidating] = useState(true);
  const [isUrlSafe, setIsUrlSafe] = useState(false);

  const group = groups.find(g => g.id === id);

  useEffect(() => {
    if (group) {
      // Validate the URL before redirecting
      const isSafe = isValidExternalUrl(group.url);
      setIsUrlSafe(isSafe);
      setIsValidating(false);

      if (isSafe) {
        // Small delay to show the redirect message
        const timer = setTimeout(() => {
          window.location.href = group.url;
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      setIsValidating(false);
    }
  }, [group]);

  // Group not found - redirect to home
  if (!group) {
    return <Navigate to="/" replace />;
  }

  // URL validation failed - show error
  if (!isValidating && !isUrlSafe) {
    return (
      <Layout>
        <div className="profile-section">
          <div className="glass-header">
            <h1 className="profile-title">Invalid Link</h1>
            <p className="profile-subtitle">
              This group link appears to be invalid or has been modified.
            </p>
            <Link
              to="/"
              className="nav-link"
              style={{ display: 'inline-block', marginTop: '1rem' }}
              aria-label="Return to home page"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Show loading/redirect state
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h2>Redirecting to {group.name}...</h2>
        <p>
          If you're not redirected automatically,{' '}
          <a
            href={isUrlSafe ? group.url : '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!isUrlSafe) {
                e.preventDefault();
              }
            }}
          >
            click here
          </a>.
        </p>
      </div>
    </div>
  );
}

export default GroupRedirect;