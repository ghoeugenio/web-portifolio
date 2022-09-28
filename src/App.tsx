import {Container} from './components/organisms/Container';
import {Header} from './components/molecules/Header';
import {Home} from './components/organisms/Home';
import {About} from './components/organisms/About';
import {Loading} from './components/atoms/Loading';

function App() {
	return (
		<Container>
			<Loading />
			<Header />
			<Home />
			<About />
		</Container>
	);
}

export default App;
