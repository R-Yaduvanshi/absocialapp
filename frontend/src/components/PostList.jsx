import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PostCard from "../Cards/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, getAllUsers } from "../redux/action";
import useRandomLogin from "../hooks/useRandomLogin";

const PostList = () => {
  const dispatch = useDispatch();
  const { allPosts, allUsers, currentUser, isError } = useSelector(
    (store) => store
  );

  const handleRandomLogin = useRandomLogin();
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  useEffect(() => {
    if (allUsers.length == 0) {
      dispatch(getAllUsers());
    }
  }, []);

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
          {currentUser.name
            ? currentUser.name + " CLICK TO CHANGE"
            : "Please Click To Login a Random User"}
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
