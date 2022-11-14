import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import {useContext} from 'react';

import {AppContext} from '../../../context';
import {
	expertData,
	languageData,
	othersData,
	skillsData,
} from '../../../services/data';
import {ContextType} from '../../../types';
import {TextAnimation} from '../../atoms/TextAnimation';
import {Rating} from '../../molecules/Rating';

export const Skills = () => {
	const bgColor = useColorModeValue('alterPrimary', 'primaryDark');
	const {isMobile, transitionText} = useContext(AppContext) as ContextType;

	return (
		<Box bgGradient="linear(to-b, primary, primaryLight)">
			<Box
				display="flex"
				justifyContent="center"
				flexDirection="column"
				backgroundColor={bgColor}
				alignItems="center"
				mt="2rem"
				mb="2rem"
				borderRadius="1rem"
				marginX={isMobile ? '5rem' : '25rem'}
				minWidth={isMobile ? '0rem' : '27rem'}
			>
				<TextAnimation
					transition={transitionText}
					text="skills"
					props={{
						fontFamily: 'Raleway',
						mb: '1rem',
						mt: '1rem',
						color: 'secondary',
						fontWeight: 'bold',
					}}
				/>
				<Box>
					<Accordion
						defaultIndex={[0]}
						minWidth={isMobile ? '17rem' : '27rem'}
					>
						<AccordionItem>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									<TextAnimation
										text="Expert"
										transition={transitionText}
										props={{
											fontFamily: 'Raleway',
											color: 'secondary',
											fontWeight: 'bold',
										}}
									/>
								</Box>
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel pb={4}>
								{expertData.map((item) => (
									<Box
										my="1rem"
										display="flex"
										flexDirection="row"
										justifyContent="space-between"
										alignItems="center"
									>
										<Box
											display="flex"
											flexDirection="row"
										>
											<Box
												width="2rem"
												mr="1rem"
											>
												<img
													src={item.src}
												/>
											</Box>
											<Text
												fontFamily="Raleway"
												fontWeight="medium"
											>
												{item.skill}
											</Text>
										</Box>
										<Box mt="-1.5rem">
											<Rating
												size={item.rating}
											/>
										</Box>
									</Box>
								))}
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									<TextAnimation
										text="Frameworks"
										transition={transitionText}
										props={{
											fontFamily: 'Raleway',
											color: 'secondary',
											fontWeight: 'bold',
										}}
									/>
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={4}>
								{skillsData.map((item) => (
									<Box
										my="1rem"
										display="flex"
										flexDirection="row"
										justifyContent="space-between"
										alignItems="center"
									>
										<Box
											display="flex"
											flexDirection="row"
										>
											<Box
												width="2rem"
												mr="1rem"
											>
												<img
													src={item.src}
												/>
											</Box>
											<Text
												fontFamily="Raleway"
												fontWeight="medium"
											>
												{item.skill}
											</Text>
										</Box>
										<Box mt="-1.5rem">
											<Rating
												size={item.rating}
											/>
										</Box>
									</Box>
								))}
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									<TextAnimation
										text="languages"
										transition={transitionText}
										props={{
											fontFamily: 'Raleway',
											color: 'secondary',
											fontWeight: 'bold',
										}}
									/>
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={4}>
								{languageData.map((item) => (
									<Box
										my="1rem"
										display="flex"
										flexDirection="row"
										justifyContent="space-between"
										alignItems="center"
									>
										<Box
											display="flex"
											flexDirection="row"
										>
											<Box
												width="2rem"
												mr="1rem"
											>
												<img
													src={item.src}
												/>
											</Box>
											<Text
												fontFamily="Raleway"
												fontWeight="medium"
											>
												{item.skill}
											</Text>
										</Box>
										<Box mt="-1.5rem">
											<Rating
												size={item.rating}
											/>
										</Box>
									</Box>
								))}
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									<TextAnimation
										text="others"
										transition={transitionText}
										props={{
											fontFamily: 'Raleway',
											color: 'secondary',
											fontWeight: 'bold',
										}}
									/>
								</Box>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel pb={4}>
								{othersData.map((item) => (
									<Box
										my="1rem"
										display="flex"
										flexDirection="row"
										justifyContent="space-between"
										alignItems="center"
									>
										<Box
											display="flex"
											flexDirection="row"
										>
											<Box
												width="2rem"
												mr="1rem"
											>
												<img
													src={item.src}
												/>
											</Box>
											<Text
												fontFamily="Raleway"
												fontWeight="medium"
											>
												{item.skill}
											</Text>
										</Box>
										<Box mt="-1.5rem">
											<Rating
												size={item.rating}
											/>
										</Box>
									</Box>
								))}
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Box>
			</Box>
		</Box>
	);
};
