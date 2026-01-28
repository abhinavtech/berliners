import React from 'react';
import '../App.css';

/**
 * Shared layout component with background and container
 * Reduces duplication across page components
 */
function Layout({ children, maxWidth }) {
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
      <div className="container" style={maxWidth ? { maxWidth } : undefined}>
        {children}
        <Footer />
      </div>
    </div>
  );
}

/**
 * Shared footer component
 */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <p>Built with ❤️ for the Berlin community by Abhinav</p>
    </footer>
  );
}

export default Layout;
