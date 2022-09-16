import {Box, Spinner} from '@chakra-ui/react';
import {useContext} from 'react';
import {AppContext} from '../../context';
import {ContextType} from '../../types';

export const Loading = () => {
	const {transitionTheme} = useContext(AppContext) as ContextType;

	return (
		<>
			{transitionTheme && (
				<Box
					zIndex="100"
					position="fixed"
					display="flex"
					flex="1"
					justifyContent="center"
					alignItems="center"
					opacity="0.7"
					width="100%"
					height="100vh"
					bg="black"
				>
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="secondary"
						size="xl"
					/>
				</Box>
			)}
		</>
	);
};
