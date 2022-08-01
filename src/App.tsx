import {
	Box,
	Text,
	Flex,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import {Header} from './components/Header';

function App() {
	const {colorMode, toggleColorMode} = useColorMode();
	const bgColor = useColorModeValue('alterPrimaryLight', 'primary');
	return (
		<Flex w="full" flexDirection="column" bg={bgColor}>
			<Header toggle={toggleColorMode} colorMode={colorMode} />
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
