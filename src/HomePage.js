import React from 'react';
import { Link } from 'react-router-dom';
import { groups } from './groups';
import { useLongPress } from './hooks/useLongPress';
import { extractEmojiAndName, generateShareableLink } from './utils/formatters';
import { GROUP_CATEGORIES, SOCIAL_SUBCATEGORIES } from './utils/constants';
import Layout from './components/Layout';

function HomePage() {
  const { copiedId, wasLongPress, getLongPressHandlers } = useLongPress();

  const handleGroupClick = (groupUrl) => {
    if (!wasLongPress()) {
      setTimeout(() => {
        window.open(groupUrl, '_blank', 'noopener,noreferrer');
      }, 150);
    }
  };

  const groupLinkGenerator = (groupId) => generateShareableLink(`/group/${groupId}`);

  const renderGroupButton = (group) => {
    const { emoji, rest } = extractEmojiAndName(group.name);
    return (
      <button
        key={group.id}
        onClick={() => handleGroupClick(group.url)}
        {...getLongPressHandlers(group.id, groupLinkGenerator)}
        className={`tile-button ${copiedId === group.id ? 'copied' : ''}`}
        type="button"
        aria-label={`Join ${rest} WhatsApp group`}
      >
        <span className="tile-emoji" aria-hidden="true">{emoji}</span>
        <span className="tile-name">{rest}</span>
        {copiedId === group.id && <span className="copied-indicator">Copied!</span>}
      </button>
    );
  };

  return (
    <Layout>
      <header className="profile-section">
        <div className="glass-header">
          <h1 className="profile-title">Berliners Community</h1>
          <p className="profile-subtitle">Connect with fellow Berliners through WhatsApp groups</p>
          <Link to="/events" className="nav-link header-nav-link" aria-label="View upcoming events">
            📅 View Upcoming Events →
          </Link>
        </div>
      </header>

      <main>
        {GROUP_CATEGORIES.map((cat, idx) => {
          if (cat !== 'Social') {
            const catGroups = groups.filter(g => g.category === cat);
            if (!catGroups.length) return null;
            return (
              <section key={cat} className="category-section" aria-labelledby={`category-${cat}`}>
                {idx !== 0 && <hr className="category-separator" />}
                <h2 id={`category-${cat}`} className="category-heading">{cat}</h2>
                <div className="links-section grid-tiles">
                  {catGroups.map(renderGroupButton)}
                </div>
              </section>
            );
          } else {
            return (
              <section key={cat} className="category-section" aria-labelledby={`category-${cat}`}>
                {idx !== 0 && <hr className="category-separator" />}
                <h2 id={`category-${cat}`} className="category-heading">{cat}</h2>
                {SOCIAL_SUBCATEGORIES.map((subcat) => {
                  const subcatGroups = groups.filter(g => g.category === 'Social' && g.subcategory === subcat);
                  if (!subcatGroups.length) return null;
                  return (
                    <div key={subcat} className="subcategory-section">
                      <h3 className="subcategory-heading">{subcat}</h3>
                      <div className="links-section grid-tiles">
                        {subcatGroups.map(renderGroupButton)}
                      </div>
                    </div>
                  );
                })}
              </section>
            );
          }
        })}
      </main>
    </Layout>
  );
}

export default HomePage;