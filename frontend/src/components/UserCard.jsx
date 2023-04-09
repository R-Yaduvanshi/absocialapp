import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const UserCard = ({ name, email, bio, i, createdAt, updatedAt }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Card bgColor={"#d8f3dc"} data-aos="zoom-out" data-aos-delay={500}>
      <CardHeader>
        <Flex justifyContent={"center"}>
          <Avatar
            name="Segun Adebayo"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel "
          />
        </Flex>

        <Heading size="md" textAlign={"center"} data-aos="flip-left">
          {name}
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              {email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              {bio}
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Button>View</Button>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserCard;
