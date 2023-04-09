import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Flex
      h="12vh"
      justifyContent={"center"}
      alignItems={"center"}
      bgGradient="linear(to-r, #f1c0e8, #cfbaf0)"
      w="100%"
    >
      <Text
        fontWeight={"600"}
        fontSize={"38px"}
        color={"#9381ff"}
        cursor={"pointer"}
        onClick={() => navigate("/")}
      >
        AB Social App
      </Text>
    </Flex>
  );
};

export default Navbar;
