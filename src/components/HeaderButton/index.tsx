import {Button} from '@chakra-ui/react';

type Props = {
	title: string;
};

export const HeaderButton = ({title}: Props) => {
	return (
		<Button
			marginX="0.75rem"
			bg="transparent"
			color="secondary"
			border="1px"
			borderColor="transparent"
			_hover={{
				border: '1px',
				color: 'secondary',
			}}
			_active={{
				bg: 'secondary',
				opacity: '0.8',
				color: 'primary',
				transition: 'all 0.05s linear',
			}}
			transition="all 0.3s linear"
		>
			{title}
		</Button>
	);
};
