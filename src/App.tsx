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
    "score": 10,
    "status": 'waiting' // waiting | playing | won | lost
  });

  function handleWin(){
    setPlayer({
      ...player, 
      score: player.score + 1, 
      status: "won"});
   }

   function handleLost(){
    setPlayer({
      ...player,
      score: player.score - 1,
      status: "lost"
    });
   }

  return (
    <>
      <Container>
        <Stack>
          <Header />
          <PlayerStatus name={player.name} score={player.score} status={player.status}/>
          <GameBoard />
          <ActionButtons onWin={handleWin} onLost={handleLost}/>
        </Stack>
      </Container>
    </>
  )
}

export default App
