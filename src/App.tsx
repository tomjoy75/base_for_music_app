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

  // const [game, setGame] = useState({
  //   "message": ""
  // })

	const [msg, setMsg] = useState("");


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

   function handlePlay(){
		async function startFetching() {
			const res = await fetch('https://api.adviceslip.com/advice', {method: 'GET', cache: 'no-cache'});
			const json = await res.json();
			setMsg(json.slip.advice);		
			console.log(msg);
      setPlayer({
        ...player,
        status: "playing"
      })
		}
		startFetching();
   }

  return (
    <>
      <Container>
        <Stack>
          <Header />
          <PlayerStatus name={player.name} score={player.score} status={player.status}/>
          <GameBoard msg={msg}/>
          <ActionButtons onWin={handleWin} onLost={handleLost} onStart={handlePlay}/>
           
        </Stack>
      </Container>
    </>
  )
}

export default App
