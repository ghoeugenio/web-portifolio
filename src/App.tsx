import {Box, Text, Flex, useColorMode} from '@chakra-ui/react';
import {Header} from './components/Header';

function App() {
	const {toggleColorMode} = useColorMode();
	return (
		<Flex w="full" flexDirection="column" bg="primary">
			<Header toggle={toggleColorMode} />
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
