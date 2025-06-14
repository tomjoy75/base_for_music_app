// Affichage joueur courant, score ...
type PlayerStatusProps= {
	name: string;
	score: number;
	status: "waiting" | "playing" | "won" | "lost";
}

export function PlayerStatus({name, score, status}: PlayerStatusProps ) {
	return (
		<div>
			<p>Player: {name}</p>
			<p>Score: {score}</p>
			<p>Status: {status}</p>
		</div>
	)
}