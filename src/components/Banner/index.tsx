import {
	Box,
	Text,
	Flex,
	Image,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import {useHover} from '../../hooks';
import Background from '../../assets/background.jpg';
//import './styles.css';

type Props = {
	isMobile: boolean;
};

export const Banner = ({isMobile}: Props) => {
	const bgBannerColor = useColorModeValue(
		'opacityBackgroundWhite',
		'opacityBackgroundDark'
	);

	const [hoverRef, isHovered] = useHover();

	return (
		<Box
			backgroundImage={Background}
			backgroundPosition="center"
			minHeight="700"
			display="flex"
			flex="1"
			justifyContent="center"
			alignItems="center"
			transition="background-color 200ms linear"
		>
			<Box
				bg={bgBannerColor}
				borderRadius="20"
				justifyContent="center"
				width={isMobile ? '25rem' : '40rem'}
				display="flex"
				flexDirection="column"
				alignItems="center"
				whiteSpace="nowrap"
			>
				<Text fontFamily="Raleway" pt="2rem">
					Olá, boas vindas ao meu website
				</Text>
				<Text
					fontFamily="Raleway"
					fontSize={{
						base: '2.5rem',
						md: '3rem',
						lg: '4rem',
					}}
					fontWeight="700"
					color="secondaryDark"
					lineHeight={isMobile ? '2.5rem' : 'initial'}
				>
					Gustavo{isMobile ? <br /> : ' '}Eugênio
				</Text>

				<Box
					ref={hoverRef}
					display="flex"
					flexFlow={isMobile ? 'column' : 'row'}
					bg="red"
					minWidth="23.6rem" //width of all subtitle
					mt="1.5rem"
					mb="1rem"
				>
					<Text
						fontFamily="Raleway"
						fontSize="1.5rem"
						fontWeight="700"
						mr="0.5rem"
					>
						Desenvolvedor
					</Text>
					{isHovered ? (
						<Text
							fontFamily="Raleway"
							fontSize="1.5rem"
							fontWeight="700"
						>
							Full Stack
						</Text>
					) : (
						<Text
							fontFamily="Raleway"
							fontSize="1.5rem"
							fontWeight="700"
							transition="all 0.5s ease"
						>
							Back & Front End
						</Text>
					)}
				</Box>
			</Box>
		</Box>
	);
};
