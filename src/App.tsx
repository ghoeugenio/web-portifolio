import {Container} from './components/organisms/Container';
import {Header} from './components/molecules/Header';
import {Home} from './components/organisms/Home';
import {About} from './components/organisms/About';
import {Loading} from './components/atoms/Loading';
import {Skills} from './components/organisms/Skills';
import {Experience} from './components/organisms/Experience';
import {AspectRatio, Box} from '@chakra-ui/react';
import {Social} from './components/organisms/Social';
import {Footer} from './components/molecules/Footer';

function App() {
	return (
		<Container>
			<Loading />
			<Header />
			<Home />
			<About />
			<Skills />
			<Experience />
			<Social />
			<Footer />
		</Container>
	);
}

export default App;
