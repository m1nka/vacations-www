# Mehr Urlaub — Landing Page

The official landing page for **Mehr Urlaub**, a free vacation planner app for iOS and Android.  
Maximize your vacation days by intelligently combining public holidays and weekends.

🌐 **Live:** [mehr-urlaub.de](https://mehr-urlaub.de) · [GitHub Pages preview](https://m1nka.github.io/vacations-www/)

---

## About the App

**Mehr Urlaub** helps you:
- 📅 Find ideal vacation windows using public holidays and bridge days
- 🗓️ Manage your vacation balance with an integrated calendar
- ⏳ Count down to your next trip
- 🌙 Plan comfortably with full dark mode support

Available free, no ads, on iOS and Android.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Templates | [Pug](https://pugjs.org/) |
| Styles | [SCSS](https://sass-lang.com/) + [Bootstrap 5](https://getbootstrap.com/) |
| Fonts | [Mulish](https://fonts.google.com/specimen/Mulish), [Kanit](https://fonts.google.com/specimen/Kanit) (via Google Fonts) |
| Icons | [Bootstrap Icons](https://icons.getbootstrap.com/) |
| Build | Node.js scripts (pug, sass, autoprefixer) |
| Hosting | GitHub Pages via GitHub Actions |

---

## Development

**Prerequisites:** Node.js ≥ 18

```bash
# Install dependencies
npm install

# Start dev server with live reload
npm start

# Build for production
npm run build
```

Output is written to `dist/`. The GitHub Actions workflow automatically builds and deploys on every push to `main`.

### npm Scripts

| Command | Description |
|---|---|
| `npm start` | Build + live-reload dev server |
| `npm run build` | Full production build into `dist/` |
| `npm run build:pug` | Compile Pug → HTML |
| `npm run build:scss` | Compile SCSS → CSS |
| `npm run build:scripts` | Copy JS |
| `npm run build:assets` | Copy static assets |
| `npm run clean` | Remove `dist/` |

---

## Project Structure

```
src/
├── pug/
│   ├── index.pug           # Main page template
│   └── includes/           # Reusable Pug partials
├── scss/
│   ├── styles.scss          # Entry point
│   ├── _global.scss         # Utilities & base styles
│   ├── _variables.scss      # Variable imports
│   ├── variables/
│   │   ├── _colors.scss     # Color palette
│   │   └── _typography.scss # Font settings
│   ├── components/
│   │   ├── _navbar.scss
│   │   └── _device-mockup.scss
│   └── sections/
│       ├── _masthead.scss   # Hero section
│       ├── _features.scss   # Features section
│       ├── _slider.scss     # Screenshots slider
│       ├── _cta.scss        # CTA sections
│       └── _footer.scss
├── js/
│   └── scripts.js           # Page interactivity
└── assets/
    ├── img/                 # Screenshots, badges, logo
    └── favicon.ico
```

---

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that:
1. Installs dependencies (`npm ci`)
2. Runs `npm run build`
3. Deploys `dist/` to GitHub Pages

No manual deployment needed.

---

## License

MIT — see [LICENSE](LICENSE)
