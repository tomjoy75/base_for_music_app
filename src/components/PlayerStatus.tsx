// Affichage joueur courant, score ...
type PlayerStatusProps= {
	name: string;
	score: number;
	status: "waiting" | "playing" | "won" | "lost";
}

// export function PlayerStatus({name, score, status}: PlayerStatusProps ) {
export function PlayerStatus(props: PlayerStatusProps ) {
	return (
		<div>
			<p>Player: {props.name}</p>
			<p>Score: {props.score}</p>
			<p>Status: {props.status}</p>
		</div>
	)
}