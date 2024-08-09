import { useRouter } from "next/router";

const { VStack, Button, Heading } = require("@chakra-ui/react");

const LoginPage = () => {
	const router = useRouter();

	const handleLogin = () => {
		router.push("/ProfileEntryPage");
	};

	return (
		<VStack h='100vh' justify='center' align='center' spacing={8}>
			<Heading size='xl'>Welcome to ZK Job Board</Heading>
			<Button colorScheme='teal' size='lg' onClick={handleLogin}>
				Log in
			</Button>
		</VStack>
	);
};

export default LoginPage;
