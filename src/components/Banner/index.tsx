import {
	Box,
	Text,
	Flex,
	Image,
	useColorMode,
	useColorModeValue,
	Fade,
	ScaleFade,
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
					display="flex"
					flexFlow={isMobile ? 'column' : 'row'}
					minWidth="23.6rem" //width of all subtitle
					mt="1.5rem"
					mb="1rem"
					alignItems="center"
					ml={isMobile ? '0rem' : '2rem'}
				>
					<Text
						fontFamily="Raleway"
						fontSize="1.5rem"
						fontWeight="700"
						mr="0.5rem"
					>
						Desenvolvedor
					</Text>
					<Box ref={hoverRef}>
						{isHovered && !isMobile ? (
							<Fade in={isHovered} unmountOnExit>
								<Text
									fontFamily="Raleway"
									fontSize="1.5rem"
									fontWeight="700"
									color="alterSecondary"
								>
									Back & Front End
								</Text>
							</Fade>
						) : (
							<ScaleFade in={!isHovered || isMobile}>
								<Text
									fontFamily="Raleway"
									fontSize="1.5rem"
									fontWeight="700"
									color="alterSecondary"
								>
									Full Stack
								</Text>
							</ScaleFade>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
