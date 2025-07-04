# Berliners Community Links

A React-based web application for the Berlin community to share WhatsApp group links with **click-based protection**.

## 🛡️ Click-Based Protection

This application uses a simple client-side approach to make link scraping more difficult:

### How it works:
1. **No Direct Links**: The HTML doesn't contain `<a>` tags with `href` attributes
2. **Click Handlers**: URLs are handled through JavaScript click functions
3. **Button-Based**: All links are implemented as buttons that require user interaction
4. **JavaScript Required**: Links only work when JavaScript is enabled

### Limitations:
- **URLs still in JavaScript**: The URLs are visible in the source code
- **Basic Protection**: Sophisticated bots can still access the URLs
- **Not foolproof**: This provides limited protection compared to server-side solutions

### Technical Implementation:
- **Frontend Only**: Pure React app with no backend required
- **Click Handlers**: JavaScript functions handle the redirects
- **Button Elements**: Uses `<button>` instead of `<a>` tags
- **Window.open**: Opens WhatsApp links in new tabs/windows

## 🚀 Running the Application

### Development Mode

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the React app:**
   ```bash
   npm start
   ```
   
   The app will be available at `http://localhost:3000`

### Production Deployment

1. **Build the React app:**
   ```bash
   npm run build
   ```

2. **Deploy the build folder:**
   - Deploy the `build/` folder to any static hosting service
   - GitHub Pages, Netlify, Vercel, etc.

## 📁 Project Structure

```
berliners/
├── public/                 # Static assets
├── src/
│   ├── App.js             # Main React component with click handlers
│   ├── App.css            # Styling
│   └── ...
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🔧 How Click Protection Works

### The JavaScript Function
```javascript
const handleGroupClick = (groupUrl, groupName) => {
  // Add a small delay to make it feel more interactive
  setTimeout(() => {
    window.open(groupUrl, '_blank', 'noopener,noreferrer');
  }, 150);
};
```

### Button Implementation
```jsx
<button onClick={() => handleGroupClick(group.url, group.name)}>
  {group.name}
</button>
```

## 🛠️ Customization

### Adding New Groups
1. Add the group to the `groups` array in `src/App.js`
2. Include `id`, `name`, and `url` fields
3. The app will automatically render the new group

### Enhancing Protection
If you want better protection, consider:
- **Server-side solution**: Store URLs on a backend server
- **Obfuscation**: Encode URLs in JavaScript
- **Rate limiting**: Add delays between clicks
- **User verification**: Add CAPTCHA or similar

## 🔒 Security Considerations

### What This Approach Provides:
- ✅ **No direct href links** in HTML
- ✅ **JavaScript required** for functionality
- ✅ **Button-based interaction** needed
- ✅ **Simple to implement and maintain**

### What This Approach Doesn't Provide:
- ❌ **URLs are still visible** in JavaScript source
- ❌ **Sophisticated bots can still access** URLs
- ❌ **View-source reveals** all URLs
- ❌ **Developer tools expose** all links

## 🎨 Features

- **Responsive design**: Works on desktop and mobile
- **Clean UI**: Modern glass-morphism design
- **Hover effects**: Interactive button animations
- **Fast loading**: No server dependencies
- **Easy deployment**: Static site hosting

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start the development server
npm start

# Build for production
npm run build
```

## 📊 Trade-offs

### Pros:
- ✅ **Simple**: No server infrastructure needed
- ✅ **Fast**: No API calls or delays
- ✅ **Cheap**: Can be hosted for free on static hosting
- ✅ **Easy to maintain**: Just one React app

### Cons:
- ❌ **Limited protection**: URLs still accessible in source
- ❌ **JavaScript dependent**: Doesn't work without JS
- ❌ **Not bot-proof**: Advanced bots can still scrape

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the functionality
5. Submit a pull request

## 📄 License

Built with ❤️ for the Berlin community

---

**Note**: This approach provides basic protection against simple scrapers but is not foolproof. For stronger protection against sophisticated bots, consider implementing a server-side solution.
