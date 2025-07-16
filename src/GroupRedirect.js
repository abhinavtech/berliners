import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { groups } from './groups';

function GroupRedirect() {
  const { id } = useParams();
  
  useEffect(() => {
    const group = groups.find(g => g.id === id);
    
    if (group) {
      window.location.href = group.url;
    }
  }, [id]);

  const group = groups.find(g => g.id === id);
  
  if (!group) {
    return <Navigate to="/" replace />;
  }

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
        <p>If you're not redirected automatically, <a href={group.url} target="_blank" rel="noopener noreferrer">click here</a>.</p>
      </div>
    </div>
  );
}

export default GroupRedirect;