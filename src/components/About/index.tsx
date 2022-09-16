import {Box, Button, Image, useDisclosure, Collapse} from '@chakra-ui/react';
import {useContext} from 'react';
import {
	MdAccountCircle,
	MdArrowDropDown,
	MdLocationOn,
	MdSchool,
	MdWork,
} from 'react-icons/md';

import {AppContext} from '../../context';
import {ContextType} from '../../types';

import {TextAnimation} from '../TextAnimation';

import Profile from '../../assets/profile.jpg';

export const About = () => {
	const {isMobile, transitionText} = useContext(AppContext) as ContextType;

	const {isOpen, onToggle} = useDisclosure();
	return (
		<Box
			display="flex "
			flex="1"
			bg="primaryDark"
			marginX={isMobile ? '2rem' : '15rem'}
			mt="2rem"
			borderRadius="1rem"
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
							text="biographyHide"
							transition={transitionText}
							props={{
								fontFamily: 'Raleway',
							}}
						/>
					</Button>
				)}
				{!isOpen && (
					<Box transition="text 0s opacity">
						<TextAnimation
							text="Gustavo Eugênio"
							transition={transitionText}
							props={{
								fontFamily: 'Raleway',
								pt: '2rem',
							}}
						>
							<MdAccountCircle
								size={24}
								style={{
									marginTop: '1.75rem',
									marginRight: '0.5rem',
								}}
							/>
						</TextAnimation>
						<TextAnimation
							text="Luby software"
							transition={transitionText}
							props={{
								fontFamily: 'Raleway',
								pt: '1rem',
							}}
						>
							<MdWork
								size={24}
								style={{
									marginTop: '0.75rem',
									marginRight: '0.5rem',
								}}
							/>
						</TextAnimation>
						<TextAnimation
							text="Engenharia de Computação"
							transition={transitionText}
							props={{
								fontFamily: 'Raleway',
								pt: '1rem',
							}}
						>
							<MdSchool
								size={24}
								style={{
									marginTop: '0.75rem',
									marginRight: '0.5rem',
								}}
							/>
						</TextAnimation>
						<TextAnimation
							text="Boquira - Bahia"
							transition={transitionText}
							props={{
								fontFamily: 'Raleway',
								pt: '1rem',
							}}
						>
							<MdLocationOn
								size={24}
								style={{
									marginTop: '0.75rem',
									marginRight: '0.5rem',
								}}
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
								}}
							/>
						</Box>
					</Collapse>
				</Box>
			</Box>
		</Box>
	);
};
