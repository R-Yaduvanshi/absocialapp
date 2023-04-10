import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import PostCard from "../Cards/PostCard";

const PostList = () => {
  return (
    <Flex
      p="10px"
      minH={"88vh"}
      border={"1px"}
      w="100%"
      justifyContent={"center"}
      maxH={"auto"}
      bg={"black"}
    >
      <PostCard />
    </Flex>
  );
};

export default PostList;
