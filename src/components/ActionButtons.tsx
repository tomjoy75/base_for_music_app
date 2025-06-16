// Gestion des boutons pour interragir 
type ActionButtonsType={
	// status: "waiting" | "playing" | "won" | "lost";
	onWin: () => void;
	onLost: () => void;
	onStart: () => void;
}

// export function ActionButtons(status: ActionButtonsType) {
export function ActionButtons(props: ActionButtonsType) {
	return (
		<div>
			<p>ActionButtons</p>
			{/* <h1>status : {props.status}</h1> */}
			<button onClick={props.onWin}>Win</button>
			<button onClick={props.onLost}>Lost</button>
			<button onClick={props.onStart}>Start</button>
			{/* <button>Lost</button> */}
		</div>
	)
}
