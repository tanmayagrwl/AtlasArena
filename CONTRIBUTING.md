# Contributing to AtlasArena

First off, thank you for considering contributing to AtlasArena! 🎉

It's people like you that make AtlasArena such a fun project. Whether you're fixing bugs, adding features, improving documentation, or spreading the word – every contribution matters.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. By participating, you agree to:

- **Be respectful** - Treat everyone with respect. Absolutely no harassment, discrimination, or offensive behavior.
- **Be constructive** - Offer helpful feedback and accept the same gracefully.
- **Be collaborative** - Work together, share knowledge, and help each other grow.
- **Be patient** - Remember that everyone has different skill levels and time commitments.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- Node.js 18 or higher
- pnpm (recommended) or npm
- Git
- A code editor (VS Code recommended)
- Redis (for local development)

### First-time Setup

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the [AtlasArena repository](https://github.com/tanmayagrwl/AtlasArena).

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/AtlasArena.git
   cd AtlasArena
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/tanmayagrwl/AtlasArena.git
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Set up environment**
   ```bash
   cp .env.example .env.local
   ```

6. **Start development server**
   ```bash
   pnpm dev
   ```

---

## 🤝 How Can I Contribute?

### 🐛 Reporting Bugs

Found a bug? Help us squash it!

Before creating a bug report, please:
- Check the [existing issues](https://github.com/tanmayagrwl/AtlasArena/issues) to avoid duplicates
- Collect information about the bug (steps to reproduce, expected vs actual behavior, screenshots)

**Create a bug report with:**
- A clear, descriptive title
- Detailed steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos if applicable
- Your environment (OS, browser, Node version)

### 💡 Suggesting Features

Have an idea to make AtlasArena better? We'd love to hear it!

**Before suggesting:**
- Check if the feature already exists
- Check if it's already been suggested in [issues](https://github.com/tanmayagrwl/AtlasArena/issues)

**When suggesting:**
- Use a clear, descriptive title
- Explain the problem this feature would solve
- Describe your proposed solution
- Include mockups/examples if possible

### 🔧 Contributing Code

#### Good First Issues

New to the project? Look for issues labeled:
- `good first issue` - Simple fixes, great for newcomers
- `help wanted` - We need your help!
- `documentation` - Help improve our docs

#### Areas We Need Help With

- **Frontend**: UI/UX improvements, animations, responsive design
- **Backend**: Game logic, WebSocket optimization, caching
- **Data**: Expanding place datasets, improving validation
- **Testing**: Unit tests, integration tests, e2e tests
- **DevOps**: CI/CD, Docker, deployment scripts
- **Documentation**: README, guides, inline comments

---

## 💻 Development Setup

### Project Structure

```
AtlasArena/
├── apps/
│   ├── web/           # Next.js frontend
│   └── server/        # WebSocket game server
├── packages/
│   ├── shared/        # Shared types & utilities
│   └── places-data/   # Geographic dataset
└── ...
```

### Running Locally

```bash
# Start all services in development mode
pnpm dev

# Start only the web app
pnpm dev:web

# Start only the game server
pnpm dev:server

# Run tests
pnpm test

# Run linting
pnpm lint

# Format code
pnpm format
```

### Debugging

- **Frontend**: Use React DevTools and browser console
- **Backend**: Use `DEBUG=atlas:*` environment variable for verbose logs
- **WebSocket**: Browser DevTools Network tab → WS

---

## 🎨 Style Guidelines

### Code Style

We use automated tools to maintain consistent code style:

- **ESLint** for JavaScript/TypeScript linting
- **Prettier** for code formatting
- **TypeScript** for type safety

```bash
# Check for lint errors
pnpm lint

# Auto-fix lint errors
pnpm lint:fix

# Format code
pnpm format
```

### TypeScript Guidelines

- Always define proper types (avoid `any`)
- Use interfaces for object shapes
- Export types from `packages/shared` for reuse
- Document complex types with JSDoc comments

### React Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use custom hooks for reusable logic
- Follow the container/presenter pattern where appropriate

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files (components) | PascalCase | `GameRoom.tsx` |
| Files (utilities) | camelCase | `validatePlace.ts` |
| Variables | camelCase | `playerCount` |
| Constants | SCREAMING_SNAKE | `MAX_PLAYERS` |
| Types/Interfaces | PascalCase | `GameState` |
| CSS classes | kebab-case | `game-room-container` |

---

## 📝 Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Code style (formatting, semicolons, etc.) |
| `refactor` | Code refactoring |
| `perf` | Performance improvement |
| `test` | Adding/updating tests |
| `chore` | Maintenance tasks |

### Examples

```bash
feat(game): add countdown timer to turns

fix(validation): handle places with apostrophes

docs(readme): add deployment instructions

refactor(server): extract room management to service
```

---

## 🔄 Pull Request Process

### Before Submitting

1. **Sync with upstream**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, documented code
   - Add tests for new functionality
   - Update documentation if needed

4. **Test your changes**
   ```bash
   pnpm test
   pnpm lint
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat(scope): description"
   ```

### Submitting

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request**
   - Use a clear, descriptive title
   - Reference any related issues
   - Fill out the PR template completely
   - Request reviews from maintainers

### PR Template

```markdown
## Description
Brief description of your changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Fixes #123

## Testing
- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed my code
- [ ] Added comments for complex logic
- [ ] Updated documentation
- [ ] No new warnings generated
```

### After Submitting

- Respond to review feedback promptly
- Make requested changes in new commits
- Be patient – maintainers are volunteers too!

---

## 🏆 Recognition

Contributors are recognized in:
- README.md contributors section
- Release notes
- Our eternal gratitude 🙏

---

## 💬 Community

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and general chat
- **Discord** (coming soon): Real-time community chat

---

## ❓ Questions?

Don't hesitate to ask! Open an issue with the `question` label or reach out to the maintainers.

---

<p align="center">
  Thank you for making AtlasArena better! 🌍🎮
</p>
