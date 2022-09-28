import {Text, Fade, TextProps} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';

type Props = {
	text: string;
	transition: boolean;
	props?: TextProps;
	children?: React.ReactNode;
};

export const TextAnimation = ({text, transition, props, children}: Props) => {
	const {t} = useTranslation();

	return (
		<Fade
			in={!transition}
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			{children}
			<Text {...props}>{t(text)}</Text>
		</Fade>
	);
};
