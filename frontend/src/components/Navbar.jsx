import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      h="12vh"
      justifyContent={"center"}
      alignItems={"center"}
      bgGradient="linear(to-r, #f1c0e8, #cfbaf0)"
      w="100%"
    >
      <Text fontWeight={"600"} fontSize={"38px"} color={"#9381ff"}>
        AB Social App
      </Text>
    </Flex>
  );
};

export default Navbar;
