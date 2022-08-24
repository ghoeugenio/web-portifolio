import {Box, Text, Image} from '@chakra-ui/react';
import Profile from '../../assets/profile.jpg';
type Props = {};

export const About = () => {
	return (
		<Box
			display="flex "
			flex="1"
			justifyContent="center"
			bg="primaryDark"
			marginX="10rem"
			mt="2rem"
			borderRadius="1rem"
		>
			<Image
				src={Profile}
				w="12rem"
				h="12rem"
				ml="2rem"
				mt="2rem"
				borderRadius="1rem"
			/>
			<Box ml="2rem" mt="5rem">
				<Text>Gustavo Eugênio</Text>
				<Text>Luby software - O software do seu jeito</Text>
				<Text>Egenharia de Computação - UFBA</Text>
				<Text>25 anos</Text>
				<Text>Boquira - Bahia</Text>
			</Box>
		</Box>
	);
};
