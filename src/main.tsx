import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react';
import App from './App';
import {extendTheme} from '@chakra-ui/react';
import './i18n/index';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
	colors: {
		primary: '#424242',
		primaryLight: '#6d6d6d',
		primaryDark: '#1b1b1b',
		secondary: '#0288d1',
		secondaryLight: '#5eb8ff',
		secondaryDark: '#005b9f',
		alterPrimary: '#f5f5f5',
		alterPrimaryLight: '#ffffff',
		alterPrimaryDark: '#c2c2c2',
		alterSecondary: '#01579b',
		alterSecondaryLight: '#4f83cc',
		alterSecondaryDark: '#002f6c',
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
