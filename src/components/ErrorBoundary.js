import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

/**
 * Error Boundary component to catch JavaScript errors anywhere in the child component tree
 * Displays a fallback UI instead of crashing the whole app
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <div className="profile-section">
            <div className="glass-header">
              <h1 className="profile-title">Oops! Something went wrong</h1>
              <p className="profile-subtitle">
                We're sorry, but something unexpected happened.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => window.location.reload()}
                  className="nav-link-button"
                  aria-label="Reload the page"
                >
                  🔄 Reload Page
                </button>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => this.setState({ hasError: false, error: null })}
                >
                  🏠 Go Home
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
