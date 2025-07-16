import React from 'react';
import './App.css';

const groups = [
  {
    id: 'ivb',
    name: "🇮🇳 Inder Von Berlin 🏳️‍🌈",
    url: "https://chat.whatsapp.com/KECbkstsurP7p8xWujTkDn",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'job-referrals',
    name: "💼 Job Referrals",
    url: "https://chat.whatsapp.com/LuYWUwKItuQH7JxlXehYiw",
    category: 'Work'
  },
  {
    id: 'apartments',
    name: "🏠 Apartments",
    url: "https://chat.whatsapp.com/DE968pJqGy1FCVgRzYe2MN",
    category: 'Housing'
  },
  {
    id: 'tech-scene',
    name: "💻 Berlin Tech Scene",
    url: "https://chat.whatsapp.com/GyZuQyRKSRaCYMztZRyuM8",
    category: 'Work'
  },
  {
    id: 'cricket',
    name: "🏏 Cricket",
    url: "https://chat.whatsapp.com/KEtOynoJcvSCzoXDpEuYJj",
    category: 'Social',
    subcategory: 'Activities'
  },
  {
    id: 'swimming',
    name: "🏊‍♂️ Swimming & Watersports Club",
    url: "https://chat.whatsapp.com/IbshS8hGcUyCoa9ChA7UB8",
    category: 'Social',
    subcategory: 'Activities'
  },
  {
    id: 'bengaluru-brigade',
    name: "🥂 Bengaluru Berlin Brigade 🥂",
    url: "https://chat.whatsapp.com/KBhF0fmuYtl4eO3pGl68xZ",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'sublets',
    name: "🏘️ Sublets",
    url: "https://chat.whatsapp.com/BBFBm8LYnfVA78lL5s1Hzf",
    category: 'Housing'
  },
  {
    id: 'sell-stuff',
    name: "🛍️ Sell and Free Your Stuff",
    url: "https://chat.whatsapp.com/GKVbX7GpyWK10TGK4clPrA",
    category: 'Housing'
  },
  {
    id: 'shayari',
    name: "📝 The shayari club",
    url: "https://chat.whatsapp.com/IMASOorpeiEFZ76JqJetr3",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'wallstrasse',
    name: "📈 Wallstraße Bets",
    url: "https://chat.whatsapp.com/LHWvF2UdaBoC33YwY7yGK6",
    category: 'Work'
  },
  {
    id: 'part-time',
    name: "👨‍💼 Part Time Work and Student Jobs",
    url: "https://chat.whatsapp.com/LbIoZqy76Ze6nnTaB6jvBu",
    category: 'Work'
  },
  {
    id: 'quizzing',
    name: "🧠 Quizzing & Trivia",
    url: "https://chat.whatsapp.com/Dd69g78EbGmEI6IocuuXwx",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'deutsch',
    name: "🇩🇪 Deutsch Lernen",
    url: "https://chat.whatsapp.com/EVgsSHhbb8m4PUNPyizAEl",
    category: 'Work',
  },
  {
    id: 'parties',
    name: "🎉 Parties and Events",
    url: "https://chat.whatsapp.com/D4nZIHEXal7BO9J7p4CYBW",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'book-club',
    name: "📚 Berliners' Book Club",
    url: "https://chat.whatsapp.com/FLskpdt8XVz09CIW3D0Ceo",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'hiking',
    name: "🥾 Hiking and Camping Club",
    url: "https://chat.whatsapp.com/FmWk9DhXJtwEVejYhEp7kE",
    category: 'Social',
    subcategory: 'Activities'
  },
  {
    id: 'parenting',
    name: "👶 Parenting 101",
    url: "https://chat.whatsapp.com/KlMuiIThyOL4zZP5EXeTzD",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'adhd',
    name: "🧠 ADHD Support",
    url: "https://chat.whatsapp.com/H0r462ZTo5dL2gXv9yhfVu",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'fitness',
    name: "💪 Health and Fitness",
    url: "https://chat.whatsapp.com/Gfc5Ji3DhDuEvUbZWCFvHo",
    category: 'Social',
    subcategory: 'Activities'
  },
  {
    id: 'sports',
    name: "⚽ Sports",
    url: "https://chat.whatsapp.com/D4Fz9qQ0r3y5ZfyvS8VL0l",
    category: 'Social',
    subcategory: 'Activities'
  },
  {
    id: 'travel',
    name: "✈️ Travel",
    url: "https://chat.whatsapp.com/HChlOnXWqajIJfiqZo8Ikt",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'culinary',
    name: "🍽️ Berlin Culinary Reviews and Recommendations",
    url: "https://chat.whatsapp.com/EQnLxwzOltJJoeD8cx9FaC",
    category: 'Social',
    subcategory: 'General'
  },
  {
    id: 'gaming',
    name: "🎮 Gaming PS/XBox/PC",
    url: "https://chat.whatsapp.com/DDK8xjDXZPn7ildDsEkKhz",
    category: 'Social',
    subcategory: 'Activities'
  },
  {
    id: 'dance',
    name: "💃 Dance Berlin",
    url: "https://chat.whatsapp.com/DHTpXw0C2HUJQN3lb7wfL2",
    category: 'Social',
    subcategory: 'Activities'
  },
  {
    id: 'kaffee',
    name: "☕️ Kaffee Cuppers",
    url: "https://chat.whatsapp.com/IbYS8KW9RYe2TTM6WWdY49",
    category: 'Social',
    subcategory: 'Activities'
  }
];

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
  const handleGroupClick = (groupUrl, groupName) => {
    setTimeout(() => {
      window.open(groupUrl, '_blank', 'noopener,noreferrer');
    }, 150);
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
                        className="tile-button"
                        type="button"
                      >
                        <span className="tile-emoji">{emoji}</span>
                        <span className="tile-name">{rest}</span>
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
                              className="tile-button"
                              type="button"
                            >
                              <span className="tile-emoji">{emoji}</span>
                              <span className="tile-name">{rest}</span>
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