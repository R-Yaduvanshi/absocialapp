import { Box, Container, Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PostCard from "../Cards/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../redux/action";

const PostList = () => {
  const dispatch = useDispatch();
  const { allPosts, isLoading, isError } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  if (isLoading) {
    return (
      <Grid placeItems={"center"} mt="12vh" h="88vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Grid>
    );
  }
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
      {allPosts?.map((el) => {
        return (
          <PostCard
            user_id={el.user_id}
            content={el.content}
            likes={el.likes}
            id={el._id}
            name={el.name}
            key={el._id}
          />
        );
      })}
    </Flex>
  );
};

export default PostList;
