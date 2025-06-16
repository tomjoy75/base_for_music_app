// Zone principale du jeu

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
		<>
			<p>GameBoard</p>
			<p>{props.msg}</p>
		</>
	)
}

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful