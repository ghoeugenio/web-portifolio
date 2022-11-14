import {Box, Icon} from '@chakra-ui/react';
import {StarIcon} from '@chakra-ui/icons';
type Props = {
	size: number;
};

export const Rating = ({size}: Props) => {
	const renderStars = () => {
		let stars = [];
		for (var i = 0; i < size; i++) {
			stars.push(<Icon as={StarIcon} color="secondary" />);
		}
		return stars;
	};

	return (
		<Box display="flex" alignItems="center" mt="1rem">
			{renderStars()}
		</Box>
	);
};
