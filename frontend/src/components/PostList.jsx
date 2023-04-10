import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PostCard from "../Cards/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../redux/action";

const PostList = () => {
  const dispatch = useDispatch();
  const { allPosts } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  return (
    <Flex
      p="10px"
      minH={"88vh"}
      border={"1px"}
      w="100%"
      justifyContent={"center"}
      alignItems={"center"}
      maxH={"auto"}
      bg={"black"}
      flexDir={"column"}
      gap="15px"
    >
      {allPosts?.map((el) => {
        return (
          <PostCard
            user_id={el.user_id}
            content={el.content}
            likes={el.likes}
            id={el._id}
            name={el.name}
          />
        );
      })}
    </Flex>
  );
};

export default PostList;
