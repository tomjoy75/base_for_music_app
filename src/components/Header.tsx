// Gestion du titre du jeu

import { Stack, Text, Title } from '@mantine/core';
import '@mantine/core/styles/Text.css';
import '@mantine/core/styles/Title.css';

export function Header() {
	return (
	<Stack gap={0} mb="lg">
		<Title order={1} ta="center" c="gray.2">
			The No Nonsense Music Game
		</Title>

		<Text 
		 	ta="center"
			size="md"
			fw={600}
			variant="gradient"
			gradient={{ from: 'blue', to: 'lime', deg: 90}}
			mt="xs"
			>Where 42 is not the answer to all your questions...</Text>
	</Stack>
);}