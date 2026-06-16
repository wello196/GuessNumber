# Guess My Number!

A fun, retro-style browser game where the player tries to guess a hidden random number between 1 and 20. The game features dynamic visual feedback, tracking for current scores, and highscore retention.

---

## 🛠️ Tech Stack

*   **Structure:** HTML5
*   **Styling:** CSS3 (Featuring a retro arcade 'Press Start 2P' font layout)
*   **Logic:** Vanilla JavaScript (ES6+)

---

## ✨ Key Features

*   **Random Number Generation:** Automatically creates a fresh secret number between 1 and 20 for every new game round.
*   **Live Score Tracking:** Players start out with 20 points. Every incorrect guess automatically drops the current score by 1 point.
*   **Highscore Retention:** System automatically updates and saves the highest score achieved across multiple rounds.
*   **Dynamic Visual Hints:** Provides direct hint alerts showing if your guess was "too High!" or "too Low!" to guide your next turn.
*   **Smart Input Validation:** Safely checks to make sure you actually typed a number before using up a guess.
*   **Interactive Theme Changes:** Turns the entire background green upon winning, or dark red if the score runs out to 0.
*   **Instant Reset System:** Clicking the "Again!" button quickly resets the game board, picks a new number, and restores your score without wiping your highscore.

---

## 📂 File Structure

```text
├── index.html       # The HTML framework and UI elements
├── style.css        # The retro CSS layout design definitions
└── script.js        # The game's interactive state engine logic
