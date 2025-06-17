# The No Nonsense Music Game

## 🚀 Installation & Launch

```bash
git clone <repo_url>
cd base_for_music_app
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧠 Technical Overview

* **Framework**: React with TypeScript
* **UI Library**: Mantine for layout 
* **Styling**: Mantine themes + custom `App.css`
* **Animations**: Framer Motion (basic fade-in on advice text)
* **Game Logic**:

  * One advice per round (real from API or fake from local JSON)
  * Player chooses if it’s true or false
  * Score increases/decreases accordingly
  * Win at 20 points, lose at 0
* **State Management**: `useState` + `useEffect`
* **Components**: Separated (Header, Status, Buttons, GameBoard)

---

## 🔧 What Could Be Improved

* Enhance game feedback with sounds or visual cues
* Better transitions between states (start, end, feedback)
* Improve mobile responsiveness and layout scaling
* Add light/dark mode toggle

