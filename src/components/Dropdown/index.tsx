import {
	Box,
	MenuGroup,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	IconButton,
} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import {IoLanguageOutline} from 'react-icons/io5';
import {
	MdOutlineDarkMode,
	MdOutlineLightMode,
	MdOutlineFormatPaint,
	MdMenu,
} from 'react-icons/md';

import {HeaderButton} from '../HeaderButton';

type Props = {
	bgColor: string;
	colorMode: string;
	handleDarkTheme: () => void;
	handleLightTheme: () => void;
	handleLanguageENUS: () => void;
	handleLanguagePTBR: () => void;
};

export const Dropdown = ({
	bgColor,
	colorMode,
	handleDarkTheme,
	handleLightTheme,
	handleLanguageENUS,
	handleLanguagePTBR,
}: Props) => {
	const {t} = useTranslation();
	return (
		<Box mt="1rem">
			<Menu>
				<MenuButton
					fontFamily="Raleway"
					as={IconButton}
					aria-label="Options"
					variant="outline"
					icon={<MdMenu />}
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
					<MenuGroup style={{fontWeight: '300'}}>
						<MenuItem
							fontFamily="Raleway"
							fontSize="0.9rem"
							fontWeight="600"
						>
							{t('about')}
						</MenuItem>
						<MenuItem
							fontFamily="Raleway"
							fontSize="0.9rem"
							fontWeight="600"
						>
							{t('abilities')}{' '}
						</MenuItem>
						<MenuItem
							fontFamily="Raleway"
							fontSize="0.9rem"
							fontWeight="600"
						>
							{t('contact')}{' '}
						</MenuItem>
					</MenuGroup>
					<MenuDivider />
					<MenuGroup title={t('theme')} fontFamily="Raleway">
						<MenuItem
							onClick={handleDarkTheme}
							icon={<MdOutlineDarkMode />}
							fontSize="0.9rem"
							fontFamily="Raleway"
						>
							{t('darkMode')}
						</MenuItem>
						<MenuItem
							onClick={handleLightTheme}
							icon={<MdOutlineLightMode />}
							fontSize="0.9rem"
							fontFamily="Raleway"
						>
							{t('lightMode')}
						</MenuItem>
					</MenuGroup>
					<MenuGroup title={t('language')}>
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
							fontFamily="Raleway"
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
							fontFamily="Raleway"
						>
							Português
						</MenuItem>
					</MenuGroup>
				</MenuList>
			</Menu>
		</Box>
	);
};
