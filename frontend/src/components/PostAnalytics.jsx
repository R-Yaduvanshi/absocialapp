import { Box, Container, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import PostCard from "../Cards/PostCard";
import useMyFetchGetRequest from "../hooks/useMyFetch";

const PostAnalytics = () => {
  const [totalPost, setTotalPost] = useState("");

  const [post, setPost] = useState([]);

  const getTotalPost = useMyFetchGetRequest("analytics/posts");

  const getTopPost = useMyFetchGetRequest("analytics/posts/top-liked");

  useEffect(() => {
    getTotalPost.then((res) => setTotalPost(res.data.total));
    getTopPost.then((res) => setPost(res.data));
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
          fontSize={["20px", "20px", "28px", "", ""]}
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
          {totalPost}
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
      <SimpleGrid columns={["1", "1", "2", "3", "3"]} spacing={5}>
        {post?.map((el) => {
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
