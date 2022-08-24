import {Box, Spinner} from '@chakra-ui/react';
import Profile from '../../assets/profile.jpg';
type Props = {
	loading: boolean;
};

export const Loading = ({loading}: Props) => {
	return (
		<>
			{loading && (
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
