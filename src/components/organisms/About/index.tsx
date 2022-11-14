import {
	Box,
	Button,
	Image,
	useDisclosure,
	Collapse,
	useColorModeValue,
	Link,
} from '@chakra-ui/react';
import {useContext, useState, useEffect} from 'react';
import {
	MdAccountCircle,
	MdArrowDropDown,
	MdArrowDropUp,
	MdLocationOn,
	MdSchool,
	MdWork,
} from 'react-icons/md';

import {AppContext} from '../../../context';
import {ContextType} from '../../../types';
import {TextAnimation} from '../../atoms/TextAnimation';
import Profile from '../../../assets/profile.png';

export const About = () => {
	const {isMobile, transitionText, colorMode} = useContext(
		AppContext
	) as ContextType;

	const {isOpen, onToggle} = useDisclosure();

	const [color, setColor] = useState(
		colorMode === 'light' ? 'alterPrimary' : 'primaryDark'
	);
	const bgColor = useColorModeValue('alterPrimary', 'primaryDark');

	useEffect(() => {
		colorMode === 'light'
			? setColor('primaryDark')
			: setColor('alterPrimary');
	}, [colorMode]);

	return (
		<Box bgGradient="linear(to-b, primaryDark, primary)">
			<Box
				display="flex"
				bg={bgColor}
				marginX={isMobile ? '5rem' : '15rem'}
				mt="2rem"
				mb="2rem"
				borderRadius="1rem"
				flexDirection={isMobile ? 'column' : 'row'}
				alignItems={isMobile ? 'initial' : 'stretch'}
				minWidth={isMobile ? '10rem' : '27rem'}
				minHeight={isMobile ? '20rem' : '15rem'}
				maxHeight={
					isOpen ? '100rem' : !isMobile ? '15rem' : '30rem'
				}
				overflow={isOpen && isMobile ? 'none' : 'hidden'}
			>
				<Image
					src={Profile}
					w={isMobile ? '8rem' : '12rem'}
					h={isMobile ? '8rem' : '12rem'}
					ml="2rem"
					mt="2rem"
					borderRadius="1rem"
					alignSelf="center"
					minWidth={isMobile ? '8rem' : '12rem'}
				/>
				<Box ml="2rem">
					{isOpen && (
						<Button
							mt="2rem"
							onClick={onToggle}
							rightIcon={<MdArrowDropUp color={color} />}
							bg="transparent"
							_hover={{
								bg: 'transparent',
							}}
							_active={{
								bg: 'transparent',
							}}
						>
							<TextAnimation
								text="biographyHide"
								transition={transitionText}
								props={{
									fontFamily: 'Raleway',
									color: color,
									fontWeight: 'medium',
								}}
							/>
						</Button>
					)}
					{!isOpen && (
						<Box transition="text 0s opacity">
							<TextAnimation
								text="name"
								transition={transitionText}
								props={{
									fontFamily: 'Raleway',
									pt: '2rem',
									color: color,
									fontWeight: 'medium',
								}}
							>
								<MdAccountCircle
									size={24}
									style={{
										marginTop: '1.75rem',
										marginRight: '0.5rem',
									}}
									color={color}
								/>
							</TextAnimation>
							<Link href="https://luby.com.br/" isExternal>
								<TextAnimation
									text="work"
									transition={transitionText}
									props={{
										fontFamily: 'Raleway',
										pt: '1rem',
										color: color,
										fontWeight: 'medium',
									}}
								>
									<MdWork
										size={24}
										style={{
											marginTop: '0.75rem',
											marginRight: '0.5rem',
										}}
										color={color}
									/>
								</TextAnimation>
							</Link>
							<TextAnimation
								text="course"
								transition={transitionText}
								props={{
									fontFamily: 'Raleway',
									pt: '1rem',
									color: color,
									fontWeight: 'medium',
								}}
							>
								<MdSchool
									size={24}
									style={{
										marginTop: '0.75rem',
										marginRight: '0.5rem',
									}}
									color={color}
								/>
							</TextAnimation>
							<TextAnimation
								text="locale"
								transition={transitionText}
								props={{
									fontFamily: 'Raleway',
									pt: '1rem',
									color: color,
									fontWeight: 'medium',
								}}
							>
								<MdLocationOn
									size={24}
									style={{
										marginTop: '0.75rem',
										marginRight: '0.5rem',
									}}
									color={color}
								/>
							</TextAnimation>
						</Box>
					)}
					<Box transition="text 0s opacity">
						{!isOpen && (
							<Button
								onClick={onToggle}
								rightIcon={<MdArrowDropDown />}
								bg="transparent"
								_hover={{
									bg: 'transparent',
								}}
								_active={{
									bg: 'transparent',
								}}
							>
								<TextAnimation
									text="biographyShow"
									transition={transitionText}
									props={{
										fontFamily: 'Raleway',
										color: color,
										fontWeight: 'medium',
									}}
								/>
							</Button>
						)}
						<Collapse in={isOpen} animateOpacity>
							<Box>
								<TextAnimation
									text="biography"
									transition={transitionText}
									props={{
										fontFamily: 'Raleway',
										pt: '1.2rem',
										mr: '1rem',
										color: color,
										fontWeight: 'medium',
									}}
								/>
							</Box>
						</Collapse>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
