# 🌍 AtlasArena

**Play Atlas with friends in real-time!**

AtlasArena is an online multiplayer word game where players take turns naming places (countries, cities, states) starting with the last letter of the previous place. Challenge your geography knowledge, compete with friends, and climb the leaderboards!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

## 🎮 How to Play

1. **Create or Join a Room** - Share a room code with friends or join a public game
2. **Take Turns** - Name a valid place starting with the last letter of the previous word
3. **Beat the Timer** - You have 15-20 seconds per turn
4. **Last One Standing Wins!** - Get eliminated if you timeout or give an invalid answer

### Game Rules

- First player can start with any valid place name
- Next player must start with the **last alphabetic character** of the previous place
  - Example: `New York` → next word must start with `K`
- Each place can only be used **once per game**
- Places must exist in our validated database
- Timeout = Elimination

---

## ✨ Features

### MVP (Current)
- [ ] Create/Join game rooms via link or code
- [ ] 2-4 players per room
- [ ] Real-time turn-based gameplay
- [ ] Server-side validation (last letter rule, no repeats, valid places)
- [ ] Countdown timer per turn
- [ ] Live game state updates

### Planned Features
- [ ] User accounts & authentication
- [ ] ELO-based ranking system
- [ ] Daily challenges & streaks
- [ ] In-game chat & reactions
- [ ] Map visualization of played places
- [ ] Multiple modes (Countries only, Cities only, Capitals)
- [ ] Tournament rooms
- [ ] Achievements & badges
- [ ] Mobile-responsive design

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js, TypeScript, Tailwind CSS, shadcn/ui |
| **Real-time** | WebSockets (Socket.IO) |
| **Backend** | Node.js / Express |
| **State Management** | Redis |
| **Database** | PostgreSQL (for user data) |
| **Place Data** | GeoNames / Natural Earth datasets |

---

## 🏗️ Architecture

```
┌─────────────────┐
│  Client (Next)  │
│   WebSocket     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Game Server   │
│  (Node + WS)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Redis       │
│ (Rooms, State)  │
└─────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Redis (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanmayagrwl/AtlasArena.git
   cd AtlasArena
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   NEXT_PUBLIC_WS_URL=ws://localhost:3001
   REDIS_URL=redis://localhost:6379
   ```

4. **Start Redis** (if running locally)
   ```bash
   redis-server
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
AtlasArena/
├── apps/
│   ├── web/                 # Next.js frontend
│   │   ├── app/             # App router pages
│   │   ├── components/      # React components
│   │   ├── hooks/           # Custom hooks
│   │   └── lib/             # Utilities
│   └── server/              # WebSocket game server
│       ├── handlers/        # Event handlers
│       ├── services/        # Business logic
│       └── validators/      # Place validation
├── packages/
│   ├── shared/              # Shared types & constants
│   └── places-data/         # Geographic dataset
├── docker-compose.yml
└── README.md
```

---

## 🔌 WebSocket Events

### Client → Server

| Event | Description |
|-------|-------------|
| `JOIN_ROOM` | Join a game room |
| `SUBMIT_WORD` | Submit a place name |
| `LEAVE_ROOM` | Leave current room |

### Server → Client

| Event | Description |
|-------|-------------|
| `ROOM_STATE` | Full room state update |
| `TURN_CHANGED` | Next player's turn |
| `WORD_ACCEPTED` | Valid submission |
| `WORD_REJECTED` | Invalid submission (with reason) |
| `GAME_OVER` | Game ended, winner announced |

---

## 🧪 Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run e2e tests
pnpm test:e2e
```

---

## 🐳 Docker

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

Quick start:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [GeoNames](https://www.geonames.org/) for geographic data
- [Natural Earth](https://www.naturalearthdata.com/) for map data
- Everyone who played Atlas during school/college breaks 🎒

---

## 📬 Contact

- **Author**: Tanmay Agarwal
- **GitHub**: [@tanmayagrwl](https://github.com/tanmayagrwl)

---

<p align="center">
  Made with ❤️ for geography nerds everywhere
</p>
