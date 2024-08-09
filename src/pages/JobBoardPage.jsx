import {
	VStack,
	Text,
	Box,
	Button,
	Heading,
	HStack,
	Icon,
	Checkbox,
	Divider,
	Spacer,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
const JobBoardPage = () => {
	const name = "John Doe";
	const isGraduate = true;
	const roles = ["Software Engineer", "Web Developer", "Data Analyst"];
	const compenyNames = ["Google", "Facebook", "Amazon"];
	const locations = ["Mountain View", "Menlo Park", "Seattle"];

	return (
		<VStack h='100vh' justify='center' align='center' spacing={20}>
			<VStack w='40%' spacing={4}>
				<Heading>Welcome, {name}!</Heading>
				<HStack>
					<CheckCircleIcon color='green' w={7} h={7} />
					<Text fontSize='20px' fontWeight='bold'>
						{" "}
						You are verified as a graduate.
					</Text>
				</HStack>
			</VStack>

			<VStack w='40%'>
				{roles.map((role, index) => (
					<HStack
						bg='gray.50'
						key={index}
						w='100%'
						display='flex'
						justifyContent='space-between'
						border='1px'
						borderRadius='md'
						p={4}
						_hover={{ bg: "gray.100" }}
						borderColor='gray.200'
					>
						<VStack align='start' spacing={0}>
							<Text fontSize='18px' fontWeight='bold' color='gray.800'>
								{roles[index]}
							</Text>
							<Text fontWeight='semibold' color='gray.600'>
								{compenyNames[index]}
							</Text>
							<Text fontSize='12px' color='gray.600'>
								{locations[index]}
							</Text>
						</VStack>
						<Button colorScheme='teal'>Easy Apply</Button>
					</HStack>
				))}
			</VStack>
		</VStack>
	);
};

export default JobBoardPage;
