import { VStack, Heading, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
const ProfileEntryPage = (props) => {
	const router = useRouter();
	const handleVerify = () => {
		console.log("Verifying...");
		router.push("/JobBoardPage");
	};
	return (
		<VStack h='100vh' justify='center' align='center' spacing={8}>
			<VStack>
				<Heading size='lg'>Profile Entry</Heading>
				<Text>
					Enter your information below & Prove you are a graduate to access the
					Job Board
				</Text>
			</VStack>
			<VStack spacing={4}>
				<Input placeholder='First Name' />
				<Input placeholder='Last Name' />
				<Input placeholder='Email' />
				<Input placeholder='Phone Number' />

				<Button colorScheme='teal' size='lg' onClick={handleVerify}>
					Prove you're a graduate student
				</Button>
			</VStack>
		</VStack>
	);
};

export default ProfileEntryPage;
