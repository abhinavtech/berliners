import React, { useState, useRef } from 'react';
import './App.css';
import { groups } from './groups';

function extractEmojiAndName(name) {
  const emojiMatch = name.match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|\p{Extended_Pictographic})+/u);
  if (emojiMatch) {
    const emoji = emojiMatch[0];
    const rest = name.replace(emoji, '').trim();
    return { emoji, rest };
  }
  return { emoji: '', rest: name };
}

function HomePage() {
  const [copiedGroupId, setCopiedGroupId] = useState(null);
  const longPressTimer = useRef(null);
  const isLongPress = useRef(false);

  const handleGroupClick = (groupUrl, groupName) => {
    if (!isLongPress.current) {
      setTimeout(() => {
        window.open(groupUrl, '_blank', 'noopener,noreferrer');
      }, 150);
    }
    isLongPress.current = false;
  };

  const handleLongPressStart = (groupId) => {
    isLongPress.current = false;
    longPressTimer.current = setTimeout(() => {
      isLongPress.current = true;
      const baseUrl = window.location.origin + window.location.pathname;
      const groupLink = `${baseUrl}#/group/${groupId}`;
      
      navigator.clipboard.writeText(groupLink).then(() => {
        setCopiedGroupId(groupId);
        setTimeout(() => setCopiedGroupId(null), 2000);
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

  const categories = ['Work', 'Housing', 'Social', 'Regional'];
  const socialSubcategories = ['Activities', 'General'];

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
            <h1 className="profile-title">Berliners Community</h1>
            <p className="profile-subtitle">Connect with fellow Berliners through WhatsApp groups</p>
          </div>
        </div>
        {categories.map((cat, idx) => {
          if (cat !== 'Social') {
            const catGroups = groups.filter(g => g.category === cat);
            if (!catGroups.length) return null;
            return (
              <div key={cat} style={{marginBottom: '2.5rem'}}>
                {idx !== 0 && <hr className="category-separator" />}
                <h2 style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, margin: '1.5rem 0 1rem 0', color: '#222', letterSpacing: '-0.5px'}}>{cat}</h2>
                <div className="links-section grid-tiles">
                  {catGroups.map((group) => {
                    const { emoji, rest } = extractEmojiAndName(group.name);
                    return (
                      <button
                        key={group.id}
                        onClick={() => handleGroupClick(group.url, group.name)}
                        onMouseDown={() => handleLongPressStart(group.id)}
                        onMouseUp={handleLongPressEnd}
                        onMouseLeave={handleLongPressEnd}
                        onTouchStart={() => handleLongPressStart(group.id)}
                        onTouchEnd={handleLongPressEnd}
                        className={`tile-button ${copiedGroupId === group.id ? 'copied' : ''}`}
                        type="button"
                      >
                        <span className="tile-emoji">{emoji}</span>
                        <span className="tile-name">{rest}</span>
                        {copiedGroupId === group.id && <span className="copied-indicator">Copied!</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div key={cat} style={{marginBottom: '2.5rem'}}>
                {idx !== 0 && <hr className="category-separator" />}
                <h2 style={{textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, margin: '1.5rem 0 1rem 0', color: '#222', letterSpacing: '-0.5px'}}>{cat}</h2>
                {socialSubcategories.map((subcat) => {
                  const subcatGroups = groups.filter(g => g.category === 'Social' && g.subcategory === subcat);
                  if (!subcatGroups.length) return null;
                  return (
                    <div key={subcat} style={{marginBottom: '1.5rem'}}>
                      <h3 className="subcategory-heading" style={{textAlign: 'center', fontSize: '1.1rem', fontWeight: 600, margin: '1rem 0 0.5rem 0', color: '#444', letterSpacing: '-0.5px'}}>{subcat}</h3>
                      <div className="links-section grid-tiles">
                        {subcatGroups.map((group) => {
                          const { emoji, rest } = extractEmojiAndName(group.name);
                          return (
                            <button
                              key={group.id}
                              onClick={() => handleGroupClick(group.url, group.name)}
                              onMouseDown={() => handleLongPressStart(group.id)}
                              onMouseUp={handleLongPressEnd}
                              onMouseLeave={handleLongPressEnd}
                              onTouchStart={() => handleLongPressStart(group.id)}
                              onTouchEnd={handleLongPressEnd}
                              className={`tile-button ${copiedGroupId === group.id ? 'copied' : ''}`}
                              type="button"
                            >
                              <span className="tile-emoji">{emoji}</span>
                              <span className="tile-name">{rest}</span>
                              {copiedGroupId === group.id && <span className="copied-indicator">Copied!</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
        <div className="footer">
          <p>Built with ❤️ for the Berlin community by Abhinav</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;