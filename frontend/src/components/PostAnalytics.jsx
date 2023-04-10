import { Box, Container, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../redux/action";
import { FaLongArrowAltRight } from "react-icons/fa";
import PostCard from "../Cards/PostCard";
const PostAnalytics = () => {
  const { allPosts } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  return (
    <Box p="10px" minH={"88vh"} mt="12vh">
      {/* All Post Count */}
      <Container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          Total Number Of Posts
        </Text>
        <Icon as={FaLongArrowAltRight} color="red.500" h="7" w="7" />
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          {allPosts.length}
        </Text>
      </Container>
      {/* Top 5 Post */}
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="lg"
        fontWeight="extrabold"
        textAlign={"center"}
        p="5"
      >
        Top 5 Posts
      </Text>
      <SimpleGrid columns={3} spacing={5}>
        {allPosts
          ?.sort((a, b) => b.likes - a.likes)
          ?.filter((el, i) => i < 5)
          ?.map((el) => {
            return (
              <PostCard
                user_id={el.user_id}
                content={el.content}
                likes={el.likes}
                id={el._id}
                name={el.name}
                key={el._id}
                width={"80%"}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default PostAnalytics;
