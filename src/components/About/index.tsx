import {Box, Text, Image} from '@chakra-ui/react';
import Profile from '../../assets/profile.jpg';
type Props = {};

export const About = () => {
	return (
		<Box
			display="flex "
			flex="1"
			justifyContent="center"
			bg="primaryDark"
			marginX="10rem"
			mt="2rem"
			borderRadius="1rem"
		>
			<Image
				src={Profile}
				w="16rem"
				h="16rem"
				ml="2rem"
				mt="2rem"
				borderRadius="1rem"
			/>
			<Text ml="2rem">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Donec ut ultricies massa. Quisque faucibus ante vel sagittis
				iaculis. Morbi id scelerisque orci. Nunc ut mi erat. Vivamus
				quam neque, gravida vel pharetra vitae, tempor tincidunt
				neque. Nullam quis efficitur nunc, a laoreet arcu. Mauris
				tempor est quis arcu tempus condimentum. Maecenas accumsan
				ornare orci, sed venenatis ex condimentum vitae. Vestibulum
				ut massa ante. Nunc nec finibus lacus. Aenean dapibus ex ac
				dolor hendrerit facilisis. Nunc a dignissim sapien, in
				tempor metus. Quisque suscipit ac quam at vulputate. Fusce
				pharetra tellus id libero dapibus, tempor aliquam risus
				posuere. Aliquam volutpat posuere malesuada. Sed posuere
				magna quis eros facilisis, eu tincidunt lacus venenatis.
				Cras vulputate id nunc ut suscipit. Proin quis velit sapien.
				Praesent sed magna tincidunt, consequat sapien id,
				pellentesque felis. Pellentesque lorem elit, bibendum vel
				nulla ut, dignissim rutrum ligula. Ut dignissim arcu nec
				lectus rutrum sodales. Pellentesque rhoncus auctor sem, quis
				pulvinar quam porttitor vitae. In vestibulum nunc elit, in
				imperdiet quam tempus eu. Integer luctus elit lacus, at
				bibendum erat efficitur vel. Phasellus aliquam commodo quam
				eget interdum. Class aptent taciti sociosqu ad litora
				torquent per conubia nostra, per inceptos himenaeos.
				Pellentesque rutrum nibh urna, vel feugiat ante finibus nec.
				Donec venenatis nisi sed aliquam rhoncus. Aliquam nec lectus
				urna. Suspendisse eleifend eros at vehicula facilisis.
				Pellentesque et lacinia tortor. Sed neque purus, accumsan
				quis rhoncus eget, fermentum ac nisl. In ullamcorper ipsum
				magna, ut consectetur justo tempor et. Vivamus purus nisi,
				fermentum eu nisl vitae, egestas finibus nisi. Ut feugiat,
				eros vel pellentesque molestie, enim felis semper nisl,
				efficitur lobortis nibh nisl ut nibh. Curabitur tempor
				turpis ac tortor consectetur sodales.
			</Text>
		</Box>
	);
};
