import { Badge } from "@mantine/core";

// Affichage joueur courant, score ...
type PlayerStatusProps= {
	name: string;
	score: number;
	status: "waiting" | "playing" | "won" | "lost";
}

// export function PlayerStatus({name, score, status}: PlayerStatusProps ) {
export function PlayerStatus(props: PlayerStatusProps ) {
	console.log(props.status);
	const colors = {
		"waiting": "cyan",
		"playing": "violet",
		"won": "lime",
		"lost": "red"
	}
	return (
		<div>
			<p>Player: {props.name}</p>
			<p>Score: {props.score}</p>
			<Badge size="xl" color={colors[props.status]}>{props.status}</Badge>
		</div>
	)
}