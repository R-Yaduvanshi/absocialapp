import {
  Avatar,
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
const getTotalUserNumber = async () => {
  let res = await axios.get("http://localhost:7000/analytics/users");
  return res;
};
const UserAnalytics = () => {
  const [totalUsers, setTotalUsers] = useState("");
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
      <Box p="20px">
        <Text textAlign={"center"}>Top 5 Users</Text>
        <SimpleGrid columns={3} spacing={5} mt="10px">
          <Box
            // maxW={"30%"}
            h="370px"
            bgColor={"#8785A2"}
            boxShadow={"0px 8.7234px 20.9362px rgba(32, 31, 41, 0.08);"}
            borderRadius={"97.7021px"}
            p="20px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w="80%" h="310px">
              <Flex display={"flex"} justifyContent={"center"}>
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Flex>
              <Text
                textAlign={"center"}
                fontWeight={"700"}
                color={"#F6F6F6"}
                fontSize={"24px"}
              >
                Virat Kohli
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"400"}
                color={"#F6F6F6"}
                fontSize={"18px"}
              >
                virat@gmail.com
              </Text>
              <Text
                color={"#F6F6F6"}
                fontSize={"12px"}
                textAlign={"center"}
                mt="10px"
                fontWeight={"600"}
              >
                Shambhavi is a well-rounded web publisher with 15 years
                experience working as an art director for large corporations in
                the technology sector.
              </Text>
              <Flex justifyContent={"center"} gap="10px" mt="10px">
                <Icon as={AiOutlineInstagram}></Icon>
                <Icon as={AiOutlineTwitter}></Icon>
                <Icon as={AiFillFacebook}></Icon>
              </Flex>
            </Box>
          </Box>
          <Box
            // maxW={"30%"}
            h="370px"
            bgColor={"#8785A2"}
            boxShadow={"0px 8.7234px 20.9362px rgba(32, 31, 41, 0.08);"}
            borderRadius={"97.7021px"}
            p="20px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w="80%" h="310px">
              <Flex display={"flex"} justifyContent={"center"}>
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Flex>
              <Text
                textAlign={"center"}
                fontWeight={"700"}
                color={"#F6F6F6"}
                fontSize={"24px"}
              >
                Virat Kohli
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"400"}
                color={"#F6F6F6"}
                fontSize={"18px"}
              >
                virat@gmail.com
              </Text>
              <Text
                color={"#F6F6F6"}
                fontSize={"12px"}
                textAlign={"center"}
                mt="10px"
                fontWeight={"600"}
              >
                Shambhavi is a well-rounded web publisher with 15 years
                experience working as an art director for large corporations in
                the technology sector.
              </Text>
              <Flex justifyContent={"center"} gap="10px" mt="10px">
                <Icon as={AiOutlineInstagram}></Icon>
                <Icon as={AiOutlineTwitter}></Icon>
                <Icon as={AiFillFacebook}></Icon>
              </Flex>
            </Box>
          </Box>
          <Box
            // maxW={"30%"}
            h="370px"
            bgColor={"#8785A2"}
            boxShadow={"0px 8.7234px 20.9362px rgba(32, 31, 41, 0.08);"}
            borderRadius={"97.7021px"}
            p="20px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w="80%" h="310px">
              <Flex display={"flex"} justifyContent={"center"}>
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Flex>
              <Text
                textAlign={"center"}
                fontWeight={"700"}
                color={"#F6F6F6"}
                fontSize={"24px"}
              >
                Virat Kohli
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"400"}
                color={"#F6F6F6"}
                fontSize={"18px"}
              >
                virat@gmail.com
              </Text>
              <Text
                color={"#F6F6F6"}
                fontSize={"12px"}
                textAlign={"center"}
                mt="10px"
                fontWeight={"600"}
              >
                Shambhavi is a well-rounded web publisher with 15 years
                experience working as an art director for large corporations in
                the technology sector.
              </Text>
              <Flex justifyContent={"center"} gap="10px" mt="10px">
                <Icon as={AiOutlineInstagram}></Icon>
                <Icon as={AiOutlineTwitter}></Icon>
                <Icon as={AiFillFacebook}></Icon>
              </Flex>
            </Box>
          </Box>
          <Box
            // maxW={"30%"}
            h="370px"
            bgColor={"#8785A2"}
            boxShadow={"0px 8.7234px 20.9362px rgba(32, 31, 41, 0.08);"}
            borderRadius={"97.7021px"}
            p="20px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w="80%" h="310px">
              <Flex display={"flex"} justifyContent={"center"}>
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Flex>
              <Text
                textAlign={"center"}
                fontWeight={"700"}
                color={"#F6F6F6"}
                fontSize={"24px"}
              >
                Virat Kohli
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"400"}
                color={"#F6F6F6"}
                fontSize={"18px"}
              >
                virat@gmail.com
              </Text>
              <Text
                color={"#F6F6F6"}
                fontSize={"12px"}
                textAlign={"center"}
                mt="10px"
                fontWeight={"600"}
              >
                Shambhavi is a well-rounded web publisher with 15 years
                experience working as an art director for large corporations in
                the technology sector.
              </Text>
              <Flex justifyContent={"center"} gap="10px" mt="10px">
                <Icon as={AiOutlineInstagram}></Icon>
                <Icon as={AiOutlineTwitter}></Icon>
                <Icon as={AiFillFacebook}></Icon>
              </Flex>
            </Box>
          </Box>
          <Box
            // maxW={"30%"}
            h="370px"
            bgColor={"#8785A2"}
            boxShadow={"0px 8.7234px 20.9362px rgba(32, 31, 41, 0.08);"}
            borderRadius={"97.7021px"}
            p="20px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w="80%" h="310px">
              <Flex display={"flex"} justifyContent={"center"}>
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Flex>
              <Text
                textAlign={"center"}
                fontWeight={"700"}
                color={"#F6F6F6"}
                fontSize={"24px"}
              >
                Virat Kohli
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"400"}
                color={"#F6F6F6"}
                fontSize={"18px"}
              >
                virat@gmail.com
              </Text>
              <Text
                color={"#F6F6F6"}
                fontSize={"12px"}
                textAlign={"center"}
                mt="10px"
                fontWeight={"600"}
              >
                Shambhavi is a well-rounded web publisher with 15 years
                experience working as an art director for large corporations in
                the technology sector.
              </Text>
              <Flex justifyContent={"center"} gap="10px" mt="10px">
                <Icon as={AiOutlineInstagram}></Icon>
                <Icon as={AiOutlineTwitter}></Icon>
                <Icon as={AiFillFacebook}></Icon>
              </Flex>
            </Box>
          </Box>
          <Box
            // maxW={"30%"}
            h="370px"
            bgColor={"#8785A2"}
            boxShadow={"0px 8.7234px 20.9362px rgba(32, 31, 41, 0.08);"}
            borderRadius={"97.7021px"}
            p="20px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w="80%" h="310px">
              <Flex display={"flex"} justifyContent={"center"}>
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Flex>
              <Text
                textAlign={"center"}
                fontWeight={"700"}
                color={"#F6F6F6"}
                fontSize={"24px"}
              >
                Virat Kohli
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"400"}
                color={"#F6F6F6"}
                fontSize={"18px"}
              >
                virat@gmail.com
              </Text>
              <Text
                color={"#F6F6F6"}
                fontSize={"12px"}
                textAlign={"center"}
                mt="10px"
                fontWeight={"600"}
              >
                Shambhavi is a well-rounded web publisher with 15 years
                experience working as an art director for large corporations in
                the technology sector.
              </Text>
              <Flex justifyContent={"center"} gap="10px" mt="10px">
                <Icon as={AiOutlineInstagram}></Icon>
                <Icon as={AiOutlineTwitter}></Icon>
                <Icon as={AiFillFacebook}></Icon>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UserAnalytics;
