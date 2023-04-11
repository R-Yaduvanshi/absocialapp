import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PostCard from "../Cards/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, getAllUsers, getRandomUser } from "../redux/action";
import { getRandomIndex } from "../utils/randomIndex";

const PostList = () => {
  const [flag, setFlag] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const { allPosts, allUsers, isLoading, isError } = useSelector(
    (store) => store
  );

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
  };

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

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

  if (isError) {
    return (
      <Grid placeItems={"center"} mt="12vh" h="88vh">
        <Text fontWeight={"600"} fontSize={"28px"}>
          Oops... Something went wrong
        </Text>
      </Grid>
    );
  }
  return (
    <Flex
      p="10px"
      minH={"100vh"}
      border={"1px"}
      w="100%"
      justifyContent={"center"}
      alignItems={"center"}
      maxH={"auto"}
      bg={"black"}
      flexDir={"column"}
      gap="15px"
      mt="12vh"
    >
      <Flex justifyContent={"center"}>
        <Button colorScheme={"whatsapp"} onClick={handleRandomLogin}>
          Please Click To Login a Random User
        </Button>
      </Flex>
      {allPosts?.map((el) => {
        return (
          <PostCard
            user_id={el.user_id}
            content={el.content}
            likes={el.likes}
            id={el._id}
            name={el.name}
            key={el._id}
            zoom={"zoom-in"}
            width={"sm"}
          />
        );
      })}
    </Flex>
  );
};

export default PostList;
