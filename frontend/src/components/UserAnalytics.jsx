import { Box, Container, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
const getTotalUserNumber = async () => {
  let res = await axios.get("http://localhost:7000/analytics/users");
  return res;
};
const UserAnalytics = () => {
  const [totalUsers, setTotalUsers] = useState("");
  const { allPosts } = useSelector((store) => store);
  useEffect(() => {
    getTotalUserNumber().then((res) => setTotalUsers(res.data.total));
  }, []);
  return (
    <Box p="10px" minH={"88vh"} mt="12vh">
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
          Total Number Of Users
        </Text>
        <Icon as={FaLongArrowAltRight} color="red.500" h="7" w="7" />
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          {totalUsers}
        </Text>
      </Container>
      {allPosts?.map((el) => {
        return <Text key={el._id}>{el.user_id}</Text>;
      })}
    </Box>
  );
};

export default UserAnalytics;
