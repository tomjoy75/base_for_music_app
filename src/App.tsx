import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { PlayerStatus } from './components/PlayerStatus'
import { ActionButtons } from './components/ActionButtons'
import { GameBoard } from './components/GameBoard'
import { Container, Paper, Stack } from '@mantine/core'
import fakeAdvices from './data/fake-advices.json'
import { motion } from 'framer-motion'

function App() {
  const [player, setPlayer] = useState<{
    name: string;
    score:number;
    status:"waiting" | "playing" | "won" | "lost";
    isPlaying:boolean;
    }>
    ({
    "name": "Player 1",
    "score": 10,
    "status": 'waiting', // waiting | playing | won | lost
    isPlaying:false
  });

  // const [game, setGame] = useState({
  //   "message": ""
  // })

	const [msg, setMsg] = useState<{
    message: string;
    isRealAdvice: boolean;
  }>
  ({
    "message": "Click on start to begin",
    "isRealAdvice": false
  });

  useEffect(() => {
    if (player.score >= 20) {
      setMsg({ ...msg, message: "You Win!"});
      setPlayer({...player, isPlaying:false
      });
    } else if (player.score <= 0) {
      setMsg({...msg, message:" You lost!"});
      setPlayer({...player, isPlaying:false
      })
    } else {
      if (player.isPlaying === true)
       startRound();
    }
  }, [player.score]);

  function delay(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

  //  function handlePlay(){
	// 	async function startFetching() {
  //     startRound();
	// 		const res = await fetch('https://api.adviceslip.com/advice', {method: 'GET', cache: 'no-cache'});
	// 		const json = await res.json();
	// 		setMsg(json.slip.advice);		
	// 		console.log(msg);
  //     setPlayer({
  //       ...player,
  //       status: "playing"
  //     })
	// 	}
	// 	startFetching();
  //  }
   
  async function handleAnswer(isTrue:boolean){
    setPlayer({
      ...player,
      isPlaying: false
    })
    if(msg.isRealAdvice)
      setMsg({...msg, message:"This was a correct message"});
    else
      setMsg({...msg, message:"This message was not correct"});
    await delay(1000);
    setPlayer({
      ...player,
      isPlaying: true
    })
    if (isTrue === msg.isRealAdvice){
      handleWin();
    }
    else {
      handleLost();
    }
    // if (player.score >= 20){
    //   setMsg({
    //     ...msg,
    //     message: "You Win!"
    //   })
    // }
    // else if (player.score <=0 ){
    //   setMsg({
    //     ...msg,
    //     message: "You Lost!"
    //   })

    // }
    // else {
    //   startRound();
    // }
  }

  function getRandomInt(max: number){
  return Math.floor(Math.random() * max);
  }
  
  async function startFetching() {
    // startRound();
    const res = await fetch('https://api.adviceslip.com/advice', {method: 'GET', cache: 'no-cache'});
    const json = await res.json();
    setMsg({message: json.slip.advice, isRealAdvice:true});		
    console.log(msg);
    // setPlayer({
    //   ...player,
    //   status: "playing"
    // })
  }

  function randBadAdvice(){
    const num = getRandomInt(10) + 1;
    for (let row of fakeAdvices){
      if (+row.id === num)
        setMsg({message: row.advice, isRealAdvice:false});
    }
    // setPlayer({
    //   ...player,
    //   status: "playing"
    // })
  }

  function startRound(){
    if (getRandomInt(2)){
      startFetching();
    }
    else
      randBadAdvice();
  }

  function handleStart(){
    setPlayer({
      ...player,
      score: 10,
      status: "playing",
      isPlaying: true
    })
    startRound();
  }

  return (
    <>
      <Container size="xs">
        <Paper bg="dark.6" shadow="md" radius="md" p="xl" withBorder> 
          <Stack gap="md">
            <Header />
            <PlayerStatus name={player.name} score={player.score} status={player.status}/>
            <motion.div key={msg.message} initial={{opacity:0, y: 0}} animate={{opacity:1, y: 0}} transition={{duration:0.4}}>
              <GameBoard msg={msg.message}/>
            </motion.div>
            <ActionButtons onKeyPressed={handleAnswer} onStart={handleStart} isPlaying={player.isPlaying}/>
          </Stack>
        </Paper>

      </Container>
    </>
  )
}

export default App
