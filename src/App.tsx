import {
	Box,
	Text,
	Flex,
	Image,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import {useMediaQuery} from 'react-responsive';

import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {About} from './components/About';

function App() {
	const {colorMode, toggleColorMode} = useColorMode();
	const bgColor = useColorModeValue('alterPrimaryLight', 'primary');

	const isMobile = useMediaQuery({
		query: '(max-width: 786px)',
	});

	return (
		<Flex w="full" flexDirection="column" bg={bgColor} transition="fade">
			<Header
				toggle={toggleColorMode}
				colorMode={colorMode}
				isMobile={isMobile}
			/>
			<Banner isMobile={isMobile} />
			<About />
		</Flex>
	);
}

export default App;
