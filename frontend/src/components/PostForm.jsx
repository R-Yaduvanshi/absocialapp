import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomIndex } from "../utils/randomIndex";
import { getAllUsers, getRandomUser } from "../redux/action";

const PostForm = () => {
  const { allUsers } = useSelector((store) => store);
  const [flag, setFlag] = useState(false);
  const [buttonFlag, setButtonFlag] = useState(false);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const { currentUser } = useSelector((store) => store);
  // console.log(!currentUser);
  const handleRandomLogin = () => {
    setFlag(!flag);
    toast({
      title: "User Fetch",
      description: "You Logged in Successfully",
      status: "success",
      duration: 8000,
      isClosable: true,
      position: "top",
    });
    setButtonFlag(true);
  };

  const handleCreatePost = () => {
    if (content.length == 0) {
      return toast({
        title: "Content cannot be blank",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (content.length > 300) {
      return toast({
        title: "Content should be less than 301 words",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    const payload = {
      user_id: currentUser._id,
      content: content,
    };
    console.log(payload);
    toast({
      title: "Post Created",
      description: "Yoy have created your Post.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    if (allUsers.length == 0) {
      dispatch(getAllUsers());
    }
  }, []);

  useEffect(() => {
    let index = null;
    if (allUsers?.length > 0) {
      const min = 0;
      const max = allUsers?.length - 1;
      const ind = getRandomIndex(min, max);
      index = ind;
    }
    if (index !== null) {
      let payload = allUsers[index];
      dispatch(getRandomUser(payload));
    }
  }, [flag]);

  return (
    <Box p="10px" minHeight={"88vh"}>
      <Flex justifyContent={"center"}>
        <Button colorScheme={"whatsapp"} onClick={handleRandomLogin}>
          Please Click To Login a Random User
        </Button>
      </Flex>
      <Container
        mt="15px"
        border={"3px solid #ccff33"}
        p="20px"
        bgColor={"#000814"}
        borderRadius={"20px"}
      >
        <Text
          fontSize={"16px"}
          fontWeight={"600"}
          textAlign={"center"}
          color={"#ffffff"}
        >
          Create Your Post
        </Text>
        <Textarea
          placeholder="Write Here"
          mt="15px"
          bgColor={"#ffffff"}
          minH={"25vh"}
          border={"3px solid #ccff33"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Flex justifyContent={"center"} mt={"15px"}>
          <Button
            w="60%"
            colorScheme="orange"
            isDisabled={buttonFlag ? false : true}
            onClick={handleCreatePost}
          >
            Create
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default PostForm;
