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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ViewUserModal from "../modals/ViewUserModal";
import { timeConverter } from "../utils/convertTime";
import EditUserModal from "../modals/EditUserModal";
import { useDispatch } from "react-redux";
import { deleteUser, getAllUsers } from "../redux/action";
const UserCard = ({ name, email, bio, i, createdAt, updatedAt, id }) => {
  const createdTime = timeConverter(createdAt);
  const updatedTime = timeConverter(updatedAt);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleDelete = async (id) => {
    let res = await dispatch(deleteUser(id));
    await dispatch(getAllUsers());
    toast({
      title: "Account Deleted",
      description: "We've Deleted your account .",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Card bgColor={"#d8f3dc"} data-aos="zoom-out" data-aos-delay={500}>
      <CardHeader>
        <Flex justifyContent={"center"}>
          <Avatar
            name="Segun Adebayo"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
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
            <ViewUserModal
              name={name}
              email={email}
              bio={bio}
              createdTime={createdTime}
              updatedTime={updatedTime}
              id={id}
            />
            <EditUserModal
              name={name}
              email={email}
              bio={bio}
              createdTime={createdTime}
              updatedTime={updatedTime}
              id={id}
            />
            <Button onClick={() => handleDelete(id)}>Delete</Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserCard;
