import {
	Box,
	Text,
	Flex,
	Image,
	useColorMode,
	useColorModeValue,
	Spinner,
} from '@chakra-ui/react';
import {useMediaQuery} from 'react-responsive';

import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {About} from './components/About';

import {useToggle} from './hooks';
import {Loading} from './components/Loading';

function App() {
	const {colorMode, toggleColorMode} = useColorMode();
	const bgColor = useColorModeValue('alterPrimaryLight', 'primary');

	const [transitionText, toogleTransitionText] = useToggle();
	const [transitionTheme, toogleTransitionTheme] = useToggle();

	const isMobile = useMediaQuery({
		query: '(max-width: 786px)',
	});

	return (
		<Flex w="full" flexDirection="column" bg={bgColor} transition="fade">
			<Loading loading={transitionTheme} />
			<Header
				toggle={toggleColorMode}
				colorMode={colorMode}
				isMobile={isMobile}
				toogleTransitionText={toogleTransitionText}
				transitionText={transitionText}
				toogleTransitionTheme={toogleTransitionTheme}
			/>
			<Banner isMobile={isMobile} transitionText={transitionText} />
			<About />
		</Flex>
	);
}

export default App;
