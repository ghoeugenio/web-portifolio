import {useColorMode, useColorModeValue} from '@chakra-ui/react';
import React from 'react';
import {useMediaQuery} from 'react-responsive';

import {useToggle} from '../hooks';
import {ContextType, Props} from '../types';

export const AppContext = React.createContext<ContextType | null>(null);

const AppProvider = ({children}: Props) => {
	const {colorMode, toggleColorMode} = useColorMode();
	const bgColor = useColorModeValue('alterPrimaryLight', 'primary');

	const [transitionText, toggleTransitionText] = useToggle();
	const [transitionTheme, toggleTransitionTheme] = useToggle();

	const isMobile = useMediaQuery({
		query: '(max-width: 786px)',
	});

	return (
		<AppContext.Provider
			value={{
				isMobile,
				transitionText,
				toggleTransitionText,
				transitionTheme,
				toggleTransitionTheme,
				bgColor,
				toggleColorMode,
				colorMode,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
