import {
	useColorModeValue,
	Box,
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Text,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	Image,
	Link,
} from '@chakra-ui/react';
import {useContext} from 'react';

import {AppContext} from '../../../context';
import {experienceData} from '../../../services/data';
import Thumbnail from '../../../assets/thumbnail.jpg';

import {ContextType} from '../../../types';
import {TextAnimation} from '../../atoms/TextAnimation';

export const Social = () => {
	const bgColor = useColorModeValue('alterPrimary', 'primaryDark');
	const {isMobile, transitionText, colorMode} = useContext(
		AppContext
	) as ContextType;

	return (
		<Box bgGradient="linear(to-b, alterSecondaryLight, alterSecondary)">
			<Box
				display="flex"
				justifyContent="center"
				flexDirection="column"
				backgroundColor={bgColor}
				alignItems="center"
				mt="2rem"
				mb="2rem"
				borderRadius="1rem"
				marginX={isMobile ? '5rem' : '25rem'}
				minWidth={isMobile ? '0rem' : '25rem'}
				minHeight="10rem"
			>
				<TextAnimation
					transition={transitionText}
					text="Social"
					props={{
						fontFamily: 'Raleway',
						mb: '1rem',
						mt: '1rem',
						color: 'secondary',
						fontWeight: 'bold',
					}}
				/>
				<Box
					display="flex"
					justifyContent="space-around"
					flexDirection={isMobile ? 'column' : 'row'}
				>
					<Link
						href="https://www.linkedin.com/in/gustavo-eug%C3%AAnio-567867180/"
						mx="1rem"
						_hover={{
							textDecoration: 'none',
						}}
					>
						<Button
							mb="1rem"
							width="7rem"
							height="3rem"
							bg="secondary"
							borderRadius="5"
							display="flex"
							justifyContent="center"
							alignItems="center"
							fontFamily="Raleway"
							fontWeight="bold"
							color="white"
							_hover={{
								bg: 'secondaryDark',
							}}
						>
							LinkedIn
						</Button>
					</Link>
					<Link
						href="https://github.com/ghoeugenio"
						mx="1rem"
						_hover={{
							textDecoration: 'none',
						}}
					>
						<Button
							mb="1rem"
							width="7rem"
							height="3rem"
							bg="secondary"
							borderRadius="5"
							display="flex"
							justifyContent="center"
							alignItems="center"
							fontFamily="Raleway"
							fontWeight="bold"
							color="white"
							_hover={{
								bg: 'secondaryDark',
							}}
						>
							Github
						</Button>
					</Link>
					<Link
						href="mailto:ghoeugenio@gmail.com"
						mx="1rem"
						_hover={{
							textDecoration: 'none',
						}}
					>
						<Button
							mb="1rem"
							width="7rem"
							height="3rem"
							bg="secondary"
							borderRadius="5"
							display="flex"
							justifyContent="center"
							alignItems="center"
							fontFamily="Raleway"
							fontWeight="bold"
							color="white"
							_hover={{
								bg: 'secondaryDark',
							}}
						>
							E-mail
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};
