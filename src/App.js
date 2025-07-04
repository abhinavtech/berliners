import React from 'react';
import './App.css';

const groups = [
  {
    id: 'inder-berlin',
    name: "🇮🇳 Inder Von Berlin 🏳️‍🌈",
    url: "https://chat.whatsapp.com/KECbkstsurP7p8xWujTkDn"
  },
  {
    id: 'job-referrals',
    name: "💼 Job Referrals",
    url: "https://chat.whatsapp.com/LuYWUwKItuQH7JxlXehYiw"
  },
  {
    id: 'apartments',
    name: "🏠 Apartments",
    url: "https://chat.whatsapp.com/DE968pJqGy1FCVgRzYe2MN"
  },
  {
    id: 'tech-scene',
    name: "💻 Berlin Tech Scene",
    url: "https://chat.whatsapp.com/IPgGlJEoRTMKtYTIplHXoq"
  },
  {
    id: 'cricket',
    name: "🏏 Cricket",
    url: "https://chat.whatsapp.com/BJfYygj5dU44gy2qX7IEW0"
  },
  {
    id: 'swimming',
    name: "🏊‍♂️ Swimming & Watersports Club",
    url: "https://chat.whatsapp.com/IbshS8hGcUyCoa9ChA7UB8"
  },
  {
    id: 'bengaluru-brigade',
    name: "🥂 Bengaluru Berlin Brigade 🥂",
    url: "https://chat.whatsapp.com/KBhF0fmuYtl4eO3pGl68xZ"
  },
  {
    id: 'sublets',
    name: "🏘️ Sublets",
    url: "https://chat.whatsapp.com/E21hpIbP7ABBokBPh4nQ6r"
  },
  {
    id: 'sell-stuff',
    name: "🛍️ Sell and Free Your Stuff",
    url: "https://chat.whatsapp.com/DqaUC0nNLwa800kMhCUTIb"
  },
  {
    id: 'shayari',
    name: "📝 The shayari club",
    url: "https://chat.whatsapp.com/IMASOorpeiEFZ76JqJetr3"
  },
  {
    id: 'wallstrasse',
    name: "📈 Wallstraße Bets",
    url: "https://chat.whatsapp.com/DdUWFU4JwwX52Wonbb0UCk"
  },
  {
    id: 'part-time',
    name: "👨‍💼 Part Time Work and Student Jobs",
    url: "https://chat.whatsapp.com/ES04wAnUHoo5aBiGT7SopB"
  },
  {
    id: 'quizzing',
    name: "🧠 Quizzing & Trivia",
    url: "https://chat.whatsapp.com/Dd69g78EbGmEI6IocuuXwx"
  },
  {
    id: 'deutsch',
    name: "🇩🇪 Deutsch Lernen",
    url: "https://chat.whatsapp.com/DF0FcxshVcQ6TEmmd8IGQb"
  },
  {
    id: 'parties',
    name: "🎉 Parties and Events",
    url: "https://chat.whatsapp.com/Gzhl5xqom0n3hZkYW6sXkX"
  },
  {
    id: 'book-club',
    name: "📚 Berliners' Book Club",
    url: "https://chat.whatsapp.com/LtNoaQNBeGl3nodRXkBeZr"
  },
  {
    id: 'hiking',
    name: "🥾 Hiking and Camping Club",
    url: "https://chat.whatsapp.com/FX4Kd04n61aFOJpwX9hGjl"
  },
  {
    id: 'parenting',
    name: "👶 Parenting 101",
    url: "https://chat.whatsapp.com/BODiF5DIZdlD9AQTmIPnrZ"
  },
  {
    id: 'adhd',
    name: "🧠 ADHD Support",
    url: "https://chat.whatsapp.com/E8Z3YltP2jA4y2JOAtfi2u"
  },
  {
    id: 'fitness',
    name: "💪 Health and Fitness",
    url: "https://chat.whatsapp.com/Gfc5Ji3DhDuEvUbZWCFvHo"
  },
  {
    id: 'sports',
    name: "⚽ Sports",
    url: "https://chat.whatsapp.com/L4TAL37NloP8Sxb0vAfXRO"
  },
  {
    id: 'travel',
    name: "✈️ Travel",
    url: "https://chat.whatsapp.com/IaNlOS4g6ibLcJx6hrERo5"
  },
  {
    id: 'culinary',
    name: "🍽️ Berlin Culinary Reviews and Recommendations",
    url: "https://chat.whatsapp.com/IHf6w0v6f6s8lGue49gCuM"
  },
  {
    id: 'gaming',
    name: "🎮 Gaming PS/XBox/PC",
    url: "https://chat.whatsapp.com/EEIbGI8Ep7LGYoE7U2WBv5"
  },
  {
    id: 'dance',
    name: "💃 Dance Berlin",
    url: "https://chat.whatsapp.com/CTKS7eeobrD83Nm2kHoD6n"
  }
];

function App() {
  const handleGroupClick = (groupUrl, groupName) => {
    // Add a small delay to make it feel more interactive
    setTimeout(() => {
      window.open(groupUrl, '_blank', 'noopener,noreferrer');
    }, 150);
  };

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
        
        <div className="links-section">
          {groups.map((group) => (
            <button
              key={group.id}
              onClick={() => handleGroupClick(group.url, group.name)}
              className="link-button"
              type="button"
            >
              <span className="link-text">{group.name}</span>
              <span className="link-icon">↗</span>
            </button>
          ))}
        </div>
        
        <div className="footer">
          <p>Built with ❤️ for the Berlin community</p>
        </div>
      </div>
    </div>
  );
}

export default App; 
