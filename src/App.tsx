import {
	Box,
	Text,
	Flex,
	Image,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import {Header} from './components/Header';
import {useMediaQuery} from 'react-responsive';
import Background from './assets/background.jpg';
import {useEffect} from 'react';
import {Banner} from './components/Banner';

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
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>

			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>

			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>

			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
			<Text> Hello world</Text>
		</Flex>
	);
}

export default App;
