import { VStack, Heading, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
const { useState } = React;

const ProfileEntryPage = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const router = useRouter();

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		switch (name) {
			case "firstName":
				setFirstName(value);
				break;
			case "lastName":
				setLastName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "phoneNumber":
				setPhoneNumber(value);
				break;
		}
	};
	const handleVerify = () => {
		console.log("Verifying...");
		// Verify the user's information
		if (
			firstName === "" ||
			lastName === "" ||
			email === "" ||
			phoneNumber === ""
		) {
			alert("Please enter all fields");
			return;
		}
		if (!email.includes("@") || !email.includes(".")) {
			alert("Please enter a valid email address");
			return;
		}
		if (phoneNumber.length !== 10) {
			alert("Please enter a valid phone number");
			return;
		}

		try {
			// If the user is verified, save the user's information to the local storage
			localStorage.setItem("firstName", firstName);
			localStorage.setItem("lastName", lastName);
			localStorage.setItem("email", email);
			localStorage.setItem("phoneNumber", phoneNumber);

			// Redirect the user to the Verification Page

			router.push("/VerificationPage/ProveGraduate");
		} catch (error) {
			alert(`Error: ${error}`);
		}
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
				<Input
					placeholder='First Name'
					onChange={handleChange}
					name='firstName'
					value={firstName}
				/>
				<Input
					placeholder='Last Name'
					onChange={handleChange}
					name='lastName'
					value={lastName}
				/>
				<Input
					placeholder='Email'
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<Input
					placeholder='Phone Number'
					onChange={handleChange}
					name='phoneNumber'
					value={phoneNumber}
				/>

				<Button colorScheme='teal' size='lg' onClick={handleVerify} name=''>
					Prove you're a graduate student
				</Button>
			</VStack>
		</VStack>
	);
};

export default ProfileEntryPage;
