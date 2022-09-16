import {ColorMode} from '@chakra-ui/react';

export type ContextType = {
	isMobile: boolean;
	transitionText: boolean;
	toggleTransitionText: () => void;
	transitionTheme: boolean;
	toggleTransitionTheme: () => void;
	bgColor: string;
	toggleColorMode: () => void;
	colorMode: ColorMode;
};

export type Props = {
	children?: React.ReactNode;
};
