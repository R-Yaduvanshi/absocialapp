import {
  Box,
  Button,
  Card,
  Flex,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UserCard from "../Cards/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getRandomUser } from "../redux/action";
import { getRandomIndex } from "../utils/randomIndex";
const UserList = () => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const toast = useToast();
  const { allUsers, currentUser } = useSelector((store) => store);

  const handleRandomLogin = () => {
    setFlag(!flag);
    toast({
      title: "User Fetch",
      description: "You Logged in Successfully",
      status: "success",
      duration: 8000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    let output = dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    let index = null;
    if (allUsers?.length > 0) {
      const min = 0;
      const max = allUsers?.length - 1;
      const ind = getRandomIndex(min, max);
      index = ind;
    }
    if (index !== null) {
      let payload = allUsers[index];
      dispatch(getRandomUser(payload));
    }
  }, [flag]);
  return (
    <Box p="10px" minH={"100vh"} mt="12vh">
      <Flex justifyContent={"center"}>
        <Button colorScheme={"whatsapp"} onClick={handleRandomLogin}>
          {currentUser.name
            ? currentUser.name + " CLICK TO CHANGE"
            : "Please Click To Login a Random User"}
        </Button>
      </Flex>
      <SimpleGrid minChildWidth="400px" spacing="40px" mt="10px">
        {allUsers?.map((el, i) => {
          return (
            <UserCard
              name={el.name}
              key={el._id}
              email={el.email}
              bio={el.bio}
              createdAt={el.createdAt}
              updatedAt={el.updatedAt}
              i={i}
              id={el._id}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default UserList;
