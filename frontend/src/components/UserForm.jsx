import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/action";
const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();
  const handleCreateForm = async () => {
    // Form Validation
    let payload = { name, email, bio };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (payload.name.length == 0) {
      return toast({
        title: "Name Cannot be blank",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (name.length > 50) {
      return toast({
        title: "Name should be less than 50 words",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (payload.email.length == 0) {
      return toast({
        title: "Email cannot be blank",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (!regex.test(email)) {
      return toast({
        title: "Please provide valid email",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (payload.bio.length == 0) {
      return toast({
        title: "Bio cannot be blank",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (bio.length > 400) {
      return toast({
        title: "Bio should be less than 400 words",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }

    let output = await dispatch(createUser(payload));

    if (output == "SUCCESS") {
      setName("");
      setEmail("");
      setBio("");
      toast({
        title: "Account Created",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Box
      p="10px"
      minH={"100vh"}
      display={"grid"}
      placeItems={"center"}
      mt="12vh"
    >
      <Flex
        w={["100%", "80%", "", "60%", "60%"]}
        minH={"82vh"}
        maxH={"auto"}
        bgImage={""}
        flexDir={"column"}
        p="10px"
        bgColor={"#e8e8e4"}
        rounded={"md"}
        gap={"10px"}
      >
        <Text
          p="10px"
          textAlign={"center"}
          fontWeight={"500"}
          fontSize={"28px"}
          boxShadow="lg"
          rounded={"md"}
          bgColor={"#ffffff"}
        >
          Create User
        </Text>
        <Flex h="100vh" justifyContent={"center"}>
          <Flex
            w={["90%", "90%", "85%", "60%", "60%"]}
            h={["60vh", "60vh", "60vh", "auto", "88vh"]}
            p="5px"
            flexDir={"column"}
            gap={["25px", "", "", "10px", "10px"]}
            bgColor={"#ffffff"}
            rounded={"10px"}
          >
            <Input
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              placeholder="Bio in 0-400 words"
              maxH={"150px"}
              minH={"150px"}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <Button onClick={handleCreateForm}>Submit</Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserForm;
