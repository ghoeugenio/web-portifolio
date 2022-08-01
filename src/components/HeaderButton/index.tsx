import {Button} from '@chakra-ui/react';

type Props = {
	title: string;
	colorMode: string;
};

export const HeaderButton = ({title, colorMode}: Props) => {
	return (
		<Button
			mr="0.75rem"
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
				color:
					colorMode === 'light' ? 'alterPrimary' : 'primaryDark',
				transition: 'all 0.05s linear',
			}}
			transition="all 0.3s linear"
		>
			{title}
		</Button>
	);
};
