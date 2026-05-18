# JustOneMore 🎮

A browser-based rage platformer built with Phaser 3 and Vite.  
Three levels. Increasingly evil. Technically beatable.

> "Just one more try." — everyone, forever

---

## Play It

🔗 [Live Demo](#) 

---

## What Is This

A precision platformer designed to make you question your decisions.  
Every level introduces new troll mechanics — fake exits, silent control  
swaps, disappearing tiles — wrapped in a game that always feels  
*almost* clearable.

Death counter tracks your suffering. The game has opinions about it.

---

## Levels

| Level | Theme | Troll Mechanics |
|---|---|---|
| 1 | False Hope | Fake exit, fake shortcut |
| 2 | Getting Spicy | Fake checkpoint, reverse platforms, bait coins |
| 3 | We're Done Here | Disappearing tiles, silent control swap, fake skip button |

---

## Tech Stack

### Frontend
- [Phaser 3](https://phaser.io/) — game engine
- [Vite](https://vitejs.dev/) — dev server + bundler
- Vanilla JS — no frameworks

### Backend
- Go + [chi](https://github.com/go-chi/chi) — REST API
- PostgreSQL — score storage
- [Railway](https://railway.app/) — backend hosting

### Deploy
- Frontend → [Netlify](https://netlify.com)
- Backend → [Railway](https://railway.app)

---

## Run Locally

### Frontend
```bash
git clone https://github.com/yourname/justonemore
cd justonemore/frontend
npm install
npm run dev
```
Open `http://localhost:5173`

### Backend
```bash
cd justonemore/backend
cp .env.example .env  
go mod tidy
go run main.go
```

---

## Project Structure

```
justonemore/
├── frontend/
│   ├── src/
│   │   ├── main.js
│   │   ├── config/
│   │   │   ├── gameConfig.js
│   │   │   └── trollConfig.js
│   │   ├── scenes/
│   │   │   ├── BootScene.js
│   │   │   ├── MenuScene.js
│   │   │   ├── GameScene.js
│   │   │   └── GameOverScene.js
│   │   ├── entities/
│   │   │   └── Player.js
│   │   ├── systems/
│   │   │   ├── DeathSystem.js
│   │   │   ├── TrollSystem.js
│   │   │   └── InputSystem.js
│   │   └── ui/
│   │       └── HUD.js
│   └── public/assets/
└── backend/
    ├── main.go
    ├── config/
    ├── db/
    ├── handlers/
    ├── models/
    └── middleware/
```

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| POST | `/scores` | Submit a run |
| GET | `/leaderboard` | Top 10 by fewest deaths |
| GET | `/stats` | Avg deaths per level |
| GET | `/health` | Health check |

---

## Environment Variables

Create a `.env` file in `/backend`:

```env
PORT=8080
DATABASE_URL=postgres://user:password@host:5432/justonemore
FRONTEND_ORIGIN=https://mysite.netlify.app
```

---

## Built By

Shubham Bhadra — built to learn Phaser, Go, and why rage games are addictive.

---

## License

MIT
