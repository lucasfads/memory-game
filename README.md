# Memory Game

A fun and interactive memory card game built with React and TypeScript. Test your memory by flipping cards to find matching pairs!

[**Play it!**](https://lucasfads.github.io/memory-game/)

## 🎮 Features

- **Multiple Difficulty Levels**: Choose from Easy (3 pairs), Medium (6 pairs), or Hard (12 pairs)
- **Themed Card Sets**: Play with different emoji themes:
  - 🐸 Animals
  - 🍎 Fruits  
  - ⚽ Sports
  - 🚗 Vehicles
- **Responsive Design**: Optimized for different screen sizes
- **Smooth Animations**: Cards with CSS transitions
- **Game State Management**: Tracks matched pairs and game completion
- **Auto-flip Back**: Non-matching cards automatically flip back after 1 second

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lucasfads/memory-game.git
cd memory-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 How to Play

1. Select your preferred emoji theme from the dropdown
2. Choose a difficulty level (number of pairs)
3. Click "New Game" to start
4. Click on cards to flip them over
5. Try to find matching pairs by remembering card positions
6. When you find a match, those cards stay flipped
7. Complete the game by matching all pairs!

## 🛠️ Built With

- **React 19** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── components/
│   └── BoardView/          # Game board component
│       ├── BoardView.tsx
│       ├── BoardView.css
│       └── index.ts
├── models/
│   └── Board.ts           # Game logic and state management
├── types/
│   └── card.ts           # TypeScript interfaces
├── App.tsx               # Main application component
├── App.css              # Global styles
├── main.tsx             # Application entry point
└── index.css            # Base styles
```

## 🎨 Architecture

The game follows a clean architecture pattern:

- **[`Card`](src/types/card.ts)** interface defines the card data structure
- **[`Board`](src/models/Board.ts)** class handles all game logic and state
- **[`BoardView`](src/components/BoardView/BoardView.tsx)** component renders the UI
- **[`App`](src/App.tsx)** component manages the overall application state

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Development

The project uses modern development tools:

- **Vite** for fast development and building
- **TypeScript** for type safety
- **ESLint** with React and TypeScript rules
- **CSS Grid** for responsive card layout

## 👨‍💻 Author

Developed with by [Lucas Fads](https://lucasfads.com/)

---

Enjoy playing the Memory Game! 🧠✨