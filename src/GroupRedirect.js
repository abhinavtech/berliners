import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const groups = [
  {
    id: 'inder-von-berlin',
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