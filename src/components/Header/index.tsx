import {useState, useEffect, useContext} from 'react';
import {
	Box,
	Flex,
	Button,
	useColorModeValue,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import {IoLanguageOutline} from 'react-icons/io5';
import ReactCountryFlag from 'react-country-flag';
import {
	MdOutlineDarkMode,
	MdOutlineLightMode,
	MdOutlineFormatPaint,
} from 'react-icons/md';

import {AppContext} from '../../context';
import {ContextType} from '../../types';

import {HeaderButton} from '../HeaderButton';
import {Dropdown} from '../Dropdown';

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

export const Header = () => {
	const {
		toggleTransitionTheme,
		toggleColorMode,
		colorMode,
		isMobile,
		toggleTransitionText,
		transitionText,
	} = useContext(AppContext) as ContextType;

	const [isOpenTheme, setIsOpenTheme] = useState(false);
	const [isOpenLanguage, setIsOpenLanguage] = useState(false);

	const scrollDirection = useScrollDirection();

	const bgColor = useColorModeValue('alterPrimary', 'primaryDark');

	const {t, i18n} = useTranslation();

	useEffect(() => {
		if (scrollDirection === 'down') {
			setIsOpenTheme(false);
			setIsOpenLanguage(false);
		}
	}, [scrollDirection]);

	const handleDarkTheme = () => {
		if (colorMode === 'light') {
			setTimeout(() => {
				toggleTransitionTheme();
				toggleColorMode();
			}, 500);
			toggleTransitionTheme();
		}
	};

	const handleLightTheme = () => {
		if (colorMode === 'dark') {
			setTimeout(() => {
				toggleTransitionTheme();
				toggleColorMode();
			}, 500);
			toggleTransitionTheme();
		}
	};

	const handleLanguagePTBR = () => {
		if (i18n.language !== 'pt-BR') {
			setTimeout(() => {
				toggleTransitionText();
				i18n.changeLanguage('pt-BR');
			}, 100);
			toggleTransitionText();
		}
	};

	const handleLanguageENUS = () => {
		if (i18n.language !== 'en-US') {
			setTimeout(() => {
				toggleTransitionText();
				i18n.changeLanguage('en-US');
			}, 100);
			toggleTransitionText();
		}
	};

	return (
		<Flex
			zIndex="10"
			w="full"
			h="5rem"
			backgroundColor={bgColor}
			position="fixed"
			top={scrollDirection === 'down' ? '-5rem' : '0rem'}
			transition="all 0.3s linear"
			justifyContent="space-between"
			opacity="0.9"
			boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
		>
			<Button //icon logo
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
				bg={bgColor}
				fontFamily="Raleway"
				fontSize="1.5rem"
				fontWeight="700"
				color="secondary"
				transition="all 0.5s ease"
				_hover={{
					bg: 'secondary',
					color:
						colorMode === 'light'
							? 'alterPrimary'
							: 'primaryDark',
				}}
				_active={{
					bg: 'secondary',
					opacity: '0.8',
					transform: 'scale(1.5)',
				}}
			>
				GE
			</Button>
			{isMobile ? (
				<Dropdown
					bgColor={bgColor}
					colorMode={colorMode}
					handleDarkTheme={handleDarkTheme}
					handleLightTheme={handleLightTheme}
					handleLanguagePTBR={handleLanguagePTBR}
					handleLanguageENUS={handleLanguageENUS}
					scrollDirection={scrollDirection}
				/>
			) : (
				<Box mt="1rem">
					<HeaderButton
						colorMode={colorMode}
						title={t('about')}
						transitionText={transitionText}
					/>
					<HeaderButton
						colorMode={colorMode}
						title={t('abilities')}
						transitionText={transitionText}
					/>
					<HeaderButton
						colorMode={colorMode}
						title={t('contact')}
						transitionText={transitionText}
					/>

					<Menu
						onOpen={() => setIsOpenTheme(true)}
						onClose={() => setIsOpenTheme(false)}
						isOpen={isOpenTheme}
					>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							variant="outline"
							icon={<MdOutlineFormatPaint />}
							marginRight="0.5rem"
							color="#0288d1"
							border="1px"
							_hover={{
								border: '1px',
								color: 'secondary',
							}}
							_active={{
								bg: 'secondary',
								color:
									colorMode === 'light'
										? 'alterPrimary'
										: 'primaryDark',
								opacity: '0.8',
								transition: 'all 0.05s linear',
							}}
							transition="all 0.3s linear"
						/>
						<MenuList bg={bgColor}>
							<MenuItem
								onClick={handleDarkTheme}
								icon={<MdOutlineDarkMode />}
								fontSize="0.9rem"
								color="#0288d1"
							>
								{t('darkMode')}
							</MenuItem>
							<MenuItem
								onClick={handleLightTheme}
								icon={<MdOutlineLightMode />}
								fontSize="0.9rem"
								color="#0288d1"
							>
								{t('lightMode')}
							</MenuItem>
						</MenuList>
					</Menu>

					<Menu
						onOpen={() => setIsOpenLanguage(true)}
						onClose={() => setIsOpenLanguage(false)}
						isOpen={isOpenLanguage}
					>
						<MenuButton
							marginRight="2rem"
							as={IconButton}
							aria-label="Options"
							icon={<IoLanguageOutline />}
							variant="outline"
							color="#0288d1"
							border="1px"
							_hover={{
								border: '1px',
								color: 'secondary',
							}}
							_active={{
								bg: 'secondary',
								color:
									colorMode === 'light'
										? 'alterPrimary'
										: 'primaryDark',
								opacity: '0.8',
								transition: 'all 0.05s linear',
							}}
							transition="all 0.3s linear"
						/>
						<MenuList bg={bgColor}>
							<MenuItem
								onClick={handleLanguageENUS}
								icon={
									<ReactCountryFlag
										countryCode="US"
										svg
										style={{
											width: '1.5em',
											height: '1.5em',
										}}
										title="US"
									/>
								}
								fontSize="0.9rem"
								color="#0288d1"
							>
								English
							</MenuItem>
							<MenuItem
								onClick={handleLanguagePTBR}
								icon={
									<ReactCountryFlag
										countryCode="BR"
										svg
										style={{
											width: '1.5em',
											height: '1.5em',
										}}
										title="BR"
									/>
								}
								fontSize="0.9rem"
								color="#0288d1"
							>
								Português
							</MenuItem>
						</MenuList>
					</Menu>
				</Box>
			)}
		</Flex>
	);
};
