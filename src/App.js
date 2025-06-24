import React from 'react';
import './App.css';

const groups = [
  {
    name: "Inder Von Berlin 🏳️‍🌈🌈",
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
    url: "https://chat.whatsapp.com/ERpUJNxVfh0F9AmneGs9Xj"
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
    url: "https://chat.whatsapp.com/HcpRV4WhIdH7duDmu7fe35"
  },
  {
    name: "The shayari club",
    url: "https://chat.whatsapp.com/IMASOorpeiEFZ76JqJetr3"
  },
  {
    name: "Finance and Investments",
    url: "https://chat.whatsapp.com/EeMJH1AEvQfKRY9tQHNQVh"
  },
  {
    name: "Part Time Work and Student Jobs",
    url: "https://chat.whatsapp.com/KvRJbclWpFf6cnKebuxCmM"
  },
  {
    name: "Quizzing & Trivia",
    url: "https://chat.whatsapp.com/Dd69g78EbGmEI6IocuuXwx"
  },
  {
    name: "Deutsch Lernen",
    url: "https://chat.whatsapp.com/FvWeNuUwXZkFkv7Ph9RuMR"
  },
  {
    name: "Parties and Events",
    url: "https://chat.whatsapp.com/DmthwCQqKWmDjN7nqXqMRZ"
  },
  {
    name: "Berliners' Book Club",
    url: "https://chat.whatsapp.com/Gar8WS5fLYn9Vw0g2KObey"
  },
  {
    name: "Hiking and Camping Club",
    url: "https://chat.whatsapp.com/HJ0iix2AZAhCozCMdfXk0u"
  },
  {
    name: "Parenting 101",
    url: "https://chat.whatsapp.com/F83DoQbIa6Z3gP4xNWjEqd"
  },
  {
    name: "ADHD Support",
    url: "https://chat.whatsapp.com/BuAVkZclmJdLFzXkkxQszk"
  },
  {
    name: "Health and Fitness",
    url: "https://chat.whatsapp.com/D6TQK3S7zBpBRKMp9KGVwy"
  },
  {
    name: "Sports",
    url: "https://chat.whatsapp.com/IoYdZapiPsYJAyX6P3EpKc"
  },
  {
    name: "Travel",
    url: "https://chat.whatsapp.com/LCLppmw4i9IF8PI9km2HKp"
  },
  {
    name: "Berlin Culinary Reviews and Recommendations",
    url: "https://chat.whatsapp.com/JYC1a90Ot4c0QWdBrosq8Q"
  },
  {
    name: "Gaming PS/XBox/PC",
    url: "https://chat.whatsapp.com/D8ylTzjmJ2qLoE3pxocPrr"
  },
  {
    name: "Dance Berlin",
    url: "https://chat.whatsapp.com/KGSMK0EMQJE9tS4RNi63KN"
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