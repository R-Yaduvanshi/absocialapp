import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/action";
const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const dispatch = useDispatch();
  const handleCreateForm = async () => {
    // Form Validation
    let payload = { name, email, bio };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (payload.name.length == 0) {
      return alert("Name cannot be blank");
    }
    if (name.length > 50) {
      return alert("Name should be less than 50 words");
    }
    if (payload.email.length == 0) {
      return alert("Email cannot be blank");
    }
    if (!regex.test(email)) {
      return alert("Please provide valid email");
    }
    if (payload.bio.length == 0) {
      return alert("Bio cannot be blank");
    }
    if (bio.length > 400) {
      return alert("Bio should be less than 400 words");
    }

    let output = await dispatch(createUser(payload));

    if (output == "SUCCESS") {
      setName("");
      setEmail("");
      setBio("");
      return alert("User Created Successfully");
    } else {
      return alert("Something went wrong");
    }
  };
  return (
    <Box p="10px" minH={"88vh"} display={"grid"} placeItems={"center"}>
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
