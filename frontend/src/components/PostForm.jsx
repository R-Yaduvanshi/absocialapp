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
import { createPost, getAllUsers } from "../redux/action";
import useRandomLogin from "../hooks/useRandomLogin";

const PostForm = () => {
  const { allUsers } = useSelector((store) => store);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const { currentUser, isAuthorized } = useSelector((store) => store);

  const handleRandomLogin = useRandomLogin();

  const handleCreatePost = async () => {
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
      name: currentUser.name,
      content: content,
    };
    let res = await dispatch(createPost(payload));
    if (res == "SUCCESS") {
      toast({
        title: "Post Created",
        description: "Yoy have created your Post.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      setContent("");
    } else {
      toast({
        description: "Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    if (allUsers.length == 0) {
      dispatch(getAllUsers());
    }
  }, []);
  return (
    <Box p="10px" minHeight={"100vh"} mt="15vh">
      <Flex justifyContent={"center"}>
        <Button colorScheme={"whatsapp"} onClick={handleRandomLogin}>
          {currentUser.name
            ? currentUser.name + " CLICK TO CHANGE"
            : "Please Click To Login a Random User"}
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
            isDisabled={isAuthorized ? false : true}
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
