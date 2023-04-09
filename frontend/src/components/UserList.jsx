import { Box, Card, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/action";
const UserList = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, isError } = useSelector((store) => store);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    let output = dispatch(getAllUsers());
  }, []);
  return (
    <Box p="10px" minH={"88vh"}>
      <Text
        fontSize={"18px"}
        textAlign={"center"}
        p="2"
        bgColor={"#bde0fe"}
        data-aos="flip-left"
      >
        All USERS
      </Text>
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
