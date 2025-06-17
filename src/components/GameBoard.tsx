// Zone principale du jeu
import { Paper, Text } from "@mantine/core"
import '@mantine/core/styles/Paper.css';
//import { useState, useEffect } from "react"


type GameBoardTypes={
	msg: string;
}

export function GameBoard(props: GameBoardTypes) {
	// let response: any;
	// const [msg, setMsg] = useState("");

	// useEffect(() => {
	// 	async function startFetching() {
	// 		const res = await fetch('https://api.adviceslip.com/advice', {method: 'GET', cache: 'no-cache'});
	// 		const json = await res.json();
	// 		setMsg(json.slip.advice);		
	// 		console.log(msg);
	// 	}
	// 	startFetching();
	// }, []);

	return (
		<Paper shadow="xs" mt="sm" p="md" radius="md" withBorder>
			{/* <p>GameBoard</p> */}
			<Text ta="center" size="lg" fw={500}>{props.msg}</Text>
		</Paper>
	)
}

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful