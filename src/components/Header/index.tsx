import {useState, useEffect} from 'react';
import {Box, Text, Flex, Button, Switch} from '@chakra-ui/react';
import {HeaderButton} from '../HeaderButton';

type Props = {
	toggle: () => void;
};

const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState<string>('');

	useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			const direction = scrollY > lastScrollY ? 'down' : 'up';
			if (
				direction !== scrollDirection &&
				(scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
			) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};
		window.addEventListener('scroll', updateScrollDirection); // add event listener
		return () => {
			window.removeEventListener('scroll', updateScrollDirection); // clean up
		};
	}, [scrollDirection]);

	return scrollDirection;
};

export const Header = ({toggle}: Props) => {
	const scrollDirection = useScrollDirection();
	return (
		<Flex
			w="full"
			h="5rem"
			backgroundColor="mBlack"
			position="fixed"
			top={scrollDirection === 'down' ? '-5rem' : '0rem'}
			transition="all 0.3s linear"
			justifyContent="space-between"
			opacity="0.9"
		>
			<Button
				mt="1rem"
				ml="1rem"
				w="3rem"
				h="3rem"
				display="flex"
				borderRadius="50%"
				justifyContent="center"
				alignItems="center"
				borderWidth="1px"
				borderColor="secondary"
				bg="mBlack"
				fontFamily="Roboto"
				fontSize="1.5rem"
				fontWeight="700"
				color="secondary"
				transition="all 0.5s linear"
				_hover={{
					bg: 'secondary',
					color: 'mBlack',
				}}
				_active={{
					bg: 'secondary',
					opacity: '0.8',
					transform: 'scale(1.5)',
				}}
			>
				GE
			</Button>
			<Box mt="1rem">
				<HeaderButton title="Sobre" />
				<HeaderButton title="Habilidades" />
				<HeaderButton title="Projeto" />
				<HeaderButton title="Contato" />
				<Switch onChange={toggle} />
			</Box>
		</Flex>
	);
};
