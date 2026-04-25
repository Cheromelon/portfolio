# Chervith Nannuru — Portfolio

A retro-brutalist React portfolio built with Vite.

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx          # Custom square cursor
│   ├── Navbar.jsx          # Fixed navigation
│   └── Navbar.module.css
├── pages/
│   ├── Home.jsx            # Landing page with hero + projects strip
│   ├── About.jsx           # Detailed profile page
│   ├── Projects.jsx        # Projects grid with filter
│   ├── ProjectDetail.jsx   # Individual project page
│   ├── Contact.jsx         # Contact form
│   └── *.module.css        # Page styles
├── data/
│   └── portfolio.js        # All your content lives here
├── styles/
│   └── global.css          # Design tokens + global styles
├── App.jsx                 # Router setup
└── main.jsx                # Entry point
```

---

## Customisation

### Adding your photo
1. Drop your photo into the `public/` folder as `profile.jpg`
2. In `src/pages/About.jsx`, replace the `imagePlaceholder` div with:
```jsx
<img src="/profile.jpg" alt="Chervith Nannuru" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

### Adding your resume
1. Drop your resume PDF into `public/` as `resume.pdf`
2. The download button in About.jsx already points to `/resume.pdf`

### Updating content
All portfolio content is in `src/data/portfolio.js` — edit that file to update your info, projects, skills, etc.

---

## Deploying

### GitHub Pages (free)
1. Push the code to a GitHub repo
2. Run `npm run build`
3. Push the `dist/` folder to a `gh-pages` branch, or use the `gh-pages` npm package

### Vercel / Netlify (easiest)
1. Push to GitHub
2. Connect repo on vercel.com or netlify.com
3. Set build command: `npm run build`, output: `dist`
4. Done — live in 60 seconds

---

Built with React + Vite · Fonts: Bebas Neue, Space Mono, IBM Plex Sans
