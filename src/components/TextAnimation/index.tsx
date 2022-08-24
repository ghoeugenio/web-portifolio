import {Text, Fade, TextProps} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';

type Props = {
	text: string;
	transition: boolean;
	props?: TextProps;
};

export const TextAnimation = ({text, transition, props}: Props) => {
	const {t} = useTranslation();

	return (
		<Fade in={!transition}>
			<Text {...props}>{t(text)}</Text>
		</Fade>
	);
};
