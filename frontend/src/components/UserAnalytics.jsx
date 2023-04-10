import { Box, Container, Icon, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/action";
const UserAnalytics = () => {
  const { allUsers } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
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
          {allUsers.length}
        </Text>
      </Container>
    </Box>
  );
};

export default UserAnalytics;
