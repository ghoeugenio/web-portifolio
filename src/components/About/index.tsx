import {
	Box,
	Button,
	Image,
	useDisclosure,
	Collapse,
	useColorModeValue,
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

import {AppContext} from '../../context';
import {ContextType} from '../../types';

import {TextAnimation} from '../TextAnimation';

import Profile from '../../assets/profile.jpg';

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
		<Box
			display="flex"
			flex="1"
			bg={bgColor}
			marginX={isMobile ? '5rem' : '15rem'}
			mt="2rem"
			borderRadius="1rem"
			flexDirection={isMobile ? 'column' : 'row'}
			alignItems={isMobile ? 'center' : 'stretch'}
			minWidth={isMobile ? '0rem' : '27rem'}
		>
			<Image
				src={Profile}
				w={isMobile ? '8rem' : '12rem'}
				h={isMobile ? '8rem' : '12rem'}
				ml="2rem"
				mt="2rem"
				borderRadius="1rem"
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
						<TextAnimation
							text="work"
							transition={transitionText}
							props={{
								fontFamily: 'Raleway',
								pt: '1rem',
								color: color,
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
						<TextAnimation
							text="course"
							transition={transitionText}
							props={{
								fontFamily: 'Raleway',
								pt: '1rem',
								color: color,
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
								}}
							/>
						</Box>
					</Collapse>
				</Box>
			</Box>
		</Box>
	);
};
