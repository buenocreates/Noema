# Noema - Akinator Game Powered by Claude

A web-based guessing game similar to Akinator, powered by Claude Opus. Think of a person (real or fictional), and Claude will try to guess who you're thinking of by asking you questions!

## Features

- 🎮 Akinator-like gameplay experience
- 🤖 Powered by Claude Opus AI
- 🎨 Beautiful orange and white color scheme
- 📱 Responsive design for mobile and desktop
- 🌍 Can guess ANYONE - real people, fictional characters, historical figures, celebrities, etc.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up your API key:**
   
   Create a `.env` file in the root directory:
   ```
   ANTHROPIC_API_KEY=your_api_key_here
   PORT=3000
   ```
   
   **Important:** The `.env` file is ignored by git for security. You must create it locally with your API key.

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   
   Navigate to `http://localhost:3000`

## How to Play

1. Click "Start Game" to begin
2. Think of a person (real or fictional)
3. Answer Claude's questions with:
   - **Yes** - Definitely yes
   - **Probably** - Most likely yes
   - **Don't know** - Not sure
   - **Probably not** - Most likely no
   - **No** - Definitely no
4. Claude will ask questions and eventually make a guess
5. Confirm if the guess is correct or continue playing

## Project Structure

```
noema/
├── server.js          # Express server with Claude API integration
├── package.json       # Dependencies
├── public/           # Frontend files
│   ├── index.html    # Main HTML file
│   ├── style.css     # Styling (orange & white theme)
│   ├── script.js     # Frontend game logic
│   └── noema.png     # Logo
└── README.md         # This file
```

## Technologies Used

- **Backend:** Node.js, Express
- **AI:** Anthropic Claude API
- **Frontend:** HTML, CSS, JavaScript
- **Styling:** Custom CSS with orange and white theme

## Notes

- The game uses Claude Opus 4.5 model for intelligent question-asking and guessing
- Game sessions are stored in memory (will reset when server restarts)
- API key must be set via `.env` file (never commit API keys to git)

## License

MIT
