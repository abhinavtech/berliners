import React from 'react';
import './App.css';

const groups = [
  {
    name: "Inder Von Berlin 🏳️‍🌈",
    url: "https://chat.whatsapp.com/KECbkstsurP7p8xWujTkDn"
  },
  {
    name: "Job Referrals 2",
    url: "https://chat.whatsapp.com/CZemDAeJcN46Wnq0D5nwoV"
  },
  {
    name: "Apartments 2",
    url: "https://chat.whatsapp.com/JRfW5oVWN21KlMoaKcpkXc"
  },
  {
    name: "Berlin Tech Scene",
    url: "https://chat.whatsapp.com/IPgGlJEoRTMKtYTIplHXoq"
  },
  {
    name: "Cricket",
    url: "https://chat.whatsapp.com/BJfYygj5dU44gy2qX7IEW0"
  },
  {
    name: "Swimming & Watersports Club",
    url: "https://chat.whatsapp.com/IbshS8hGcUyCoa9ChA7UB8"
  },
  {
    name: "Bengaluru Berlin Brigade 🥂",
    url: "https://chat.whatsapp.com/KBhF0fmuYtl4eO3pGl68xZ"
  },
  {
    name: "Sublets",
    url: "https://chat.whatsapp.com/E21hpIbP7ABBokBPh4nQ6r"
  },
  {
    name: "Sell and Free Your Stuff",
    url: "https://chat.whatsapp.com/DqaUC0nNLwa800kMhCUTIb"
  },
  {
    name: "The shayari club",
    url: "https://chat.whatsapp.com/IMASOorpeiEFZ76JqJetr3"
  },
  {
    name: "Wallstraße Bets",
    url: "https://chat.whatsapp.com/DdUWFU4JwwX52Wonbb0UCk"
  },
  {
    name: "Part Time Work and Student Jobs",
    url: "https://chat.whatsapp.com/ES04wAnUHoo5aBiGT7SopB"
  },
  {
    name: "Quizzing & Trivia",
    url: "https://chat.whatsapp.com/Dd69g78EbGmEI6IocuuXwx"
  },
  {
    name: "Deutsch Lernen",
    url: "https://chat.whatsapp.com/DF0FcxshVcQ6TEmmd8IGQb"
  },
  {
    name: "Parties and Events",
    url: "https://chat.whatsapp.com/Gzhl5xqom0n3hZkYW6sXkX"
  },
  {
    name: "Berliners' Book Club",
    url: "https://chat.whatsapp.com/LtNoaQNBeGl3nodRXkBeZr"
  },
  {
    name: "Hiking and Camping Club",
    url: "https://chat.whatsapp.com/FX4Kd04n61aFOJpwX9hGjl"
  },
  {
    name: "Parenting 101",
    url: "https://chat.whatsapp.com/BODiF5DIZdlD9AQTmIPnrZ"
  },
  {
    name: "ADHD Support",
    url: "https://chat.whatsapp.com/E8Z3YltP2jA4y2JOAtfi2u"
  },
  {
    name: "Health and Fitness",
    url: "https://chat.whatsapp.com/Gfc5Ji3DhDuEvUbZWCFvHo"
  },
  {
    name: "Sports",
    url: "https://chat.whatsapp.com/L4TAL37NloP8Sxb0vAfXRO"
  },
  {
    name: "Travel",
    url: "https://chat.whatsapp.com/IaNlOS4g6ibLcJx6hrERo5"
  },
  {
    name: "Berlin Culinary Reviews and Recommendations",
    url: "https://chat.whatsapp.com/IHf6w0v6f6s8lGue49gCuM"
  },
  {
    name: "Gaming PS/XBox/PC",
    url: "https://chat.whatsapp.com/EEIbGI8Ep7LGYoE7U2WBv5"
  },
  {
    name: "Dance Berlin",
    url: "https://chat.whatsapp.com/CTKS7eeobrD83Nm2kHoD6n"
  }
];

function App() {
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
          {groups.map((group, index) => (
            <a
              key={index}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <span className="link-text">{group.name}</span>
              <span className="link-icon">↗</span>
            </a>
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