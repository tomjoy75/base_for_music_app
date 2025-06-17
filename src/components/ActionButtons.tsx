// Gestion des boutons pour interragir 
type ActionButtonsType={
	// status: "waiting" | "playing" | "won" | "lost";
	// onWin: () => void;
	onKeyPressed: (value: boolean) => void;
	// onLost: () => void;
	onStart: () => void;
}

// export function ActionButtons(status: ActionButtonsType) {
export function ActionButtons(props: ActionButtonsType) {
	return (
		<div>
			<p>ActionButtons</p>
			{/* <h1>status : {props.status}</h1> */}
			<button onClick={()=>props.onKeyPressed(true)}>True</button>
			<button onClick={()=>props.onKeyPressed(false)}>False</button>
			<button onClick={props.onStart}>Start</button>
			{/* <button>Lost</button> */}
		</div>
	)
}
