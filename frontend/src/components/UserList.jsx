import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UserCard from "../Cards/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/action";
import useRandomLogin from "../hooks/useRandomLogin";
const UserList = () => {
  const dispatch = useDispatch();
  const { allUsers, currentUser } = useSelector((store) => store);

  const handleRandomLogin = useRandomLogin();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

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
