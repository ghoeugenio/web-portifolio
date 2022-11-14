import {Box, Text} from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons';
import {TextAnimation} from '../../atoms/TextAnimation';
import {useContext} from 'react';
import {AppContext} from '../../../context';
import {ContextType} from '../../../types';

export const Footer = () => {
	const {isMobile, transitionText} = useContext(AppContext) as ContextType;
	return (
		<Box
			display="flex"
			alignItems="center"
			width="100%"
			justifyContent="center"
			py="1rem"
			bg="alterSecondaryDark"
		>
			<TextAnimation
				text="by"
				transition={transitionText}
				props={{
					fontWeight: 'bold',
					color: 'white',
				}}
			/>
		</Box>
	);
};
