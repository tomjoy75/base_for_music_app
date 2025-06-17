import { Badge, Card, Text } from "@mantine/core";
import '@mantine/core/styles/Card.css';
//import '@mantine/core/styles/Text.css';

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
		<Card p="md" mb="sm" radius="md" shadow="sm" withBorder>
			<Text size="sm" ta="center">Player: {props.name}</Text>
			<Text fw={700} ta="center" mb="xs">Score: {props.score}</Text>
			<Badge size="lg" color={colors[props.status]} variant="filled" fullWidth>{props.status}</Badge>
		</Card>
	)
}