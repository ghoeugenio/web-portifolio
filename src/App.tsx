import {Container} from './components/Container';
import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {About} from './components/About';
import {Loading} from './components/Loading';

function App() {
	return (
		<Container>
			<Loading />
			<Header />
			<Banner />
			<About />
		</Container>
	);
}

export default App;
