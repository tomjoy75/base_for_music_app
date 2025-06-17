import { Button, Group, Stack, Text } from "@mantine/core";
import '@mantine/core/styles/Button.css';

// Gestion des boutons pour interragir 
type ActionButtonsType={
	// status: "waiting" | "playing" | "won" | "lost";
	// onWin: () => void;
	onKeyPressed: (value: boolean) => void;
	// onLost: () => void;
	onStart: () => void;
	isPlaying: boolean;
}

// export function ActionButtons(status: ActionButtonsType) {
export function ActionButtons(props: ActionButtonsType) {
	return (
		<Stack gap="xs" align="center" mt="md">
			<Text size="sm">Your move:</Text>
			<Group gap="sm" p="md">			{/* <h1>status : {props.status}</h1> */}
			<Button 
				color="teal" variant="filled" 
				disabled={!props.isPlaying} onClick={()=>props.onKeyPressed(true)}>True</Button>
			<Button
				color="red" variant="filled" 
				disabled={!props.isPlaying} onClick={()=>props.onKeyPressed(false)}>False</Button>
			</Group>
			<Button
				size="md" 
				variant="light"
				onClick={props.onStart}>Start</Button>
			{/* <button>Lost</button> */}
		</Stack>

	)
}
