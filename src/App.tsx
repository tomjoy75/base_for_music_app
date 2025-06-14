import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { PlayerStatus } from './components/PlayerStatus'
import { ActionButtons } from './components/ActionButtons'
import { GameBoard } from './components/GameBoard'
import { Container, Stack } from '@mantine/core'

function App() {
  const [player, setPlayer] = useState<{
    name: string;
    score:number;
    status:"waiting" | "playing" | "won" | "lost";
  }>
    ({
    "name": "Player 1",
    "score": 0,
    "status": 'waiting' // waiting | playing | won | lost
  })

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Container>
        <Stack>
          <Header />
          <PlayerStatus name={player.name} score={player.score} status={player.status}/>
          <GameBoard />
          <ActionButtons />
        </Stack>
      </Container>
    </>
  )
}

export default App
