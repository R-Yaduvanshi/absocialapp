import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Flex
      h={["12vh", "", "", "", ""]}
      justifyContent={"center"}
      alignItems={"center"}
      bgGradient="linear(to-r, #f1c0e8, #cfbaf0)"
      w="100%"
      position={"fixed"}
      top="0px"
      right={"0px"}
      zIndex={"1000"}
    >
      <Text
        fontWeight={"600"}
        fontSize={"38px"}
        color={"#9381ff"}
        cursor={"pointer"}
        onClick={() => navigate("/")}
        display={["block", "block", "none", "none", "none"]}
      >
        AB Social App
      </Text>
      <Flex display={["none", "none", "flex", "flex", "flex"]}>
        <ButtonGroup size={["sm", "sm", "sm", "md", "md"]} variant={"ghost"}>
          <Button
            _hover={{
              bgColor: "orange",
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            _hover={{
              bgColor: "orange",
            }}
            onClick={() => navigate("/users")}
          >
            Create User
          </Button>
          <Button
            _hover={{
              bgColor: "orange",
            }}
            onClick={() => navigate("/seeallusers")}
          >
            See Users
          </Button>
          <Button
            _hover={{
              bgColor: "orange",
            }}
            onClick={() => navigate("/post")}
          >
            Create Post
          </Button>
          <Button
            _hover={{
              bgColor: "orange",
            }}
            onClick={() => navigate("/seeallpost")}
          >
            See Posts
          </Button>
          <Button
            _hover={{
              bgColor: "orange",
            }}
            onClick={() => navigate("/useranalytics")}
          >
            User Analytics
          </Button>
          <Button
            _hover={{
              bgColor: "orange",
            }}
            onClick={() => navigate("/postanalytics")}
          >
            Post Analytics
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default Navbar;
