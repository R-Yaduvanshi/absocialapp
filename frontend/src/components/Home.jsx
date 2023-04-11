import { Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container maxW={"60%"} h="100vh" mt="12vh">
      <Heading
        textAlign={"center"}
        p="10px"
        color="#3a0ca3"
        display={["none", "none", "block", "block", "block"]}
      >
        AB Social App
      </Heading>
      <SimpleGrid columns={["1", "2", "2", "3", "3"]} spacing={10} pt="20px">
        <Button colorScheme="linkedin" onClick={() => navigate("/users")}>
          Create User
        </Button>
        <Button colorScheme="facebook" onClick={() => navigate("/seeallusers")}>
          See All Users
        </Button>
        <Button colorScheme="messenger" onClick={() => navigate("/post")}>
          Create Post
        </Button>
        <Button colorScheme="whatsapp" onClick={() => navigate("/seeallpost")}>
          See All Post
        </Button>
        <Button
          colorScheme="twitter"
          onClick={() => navigate("/useranalytics")}
        >
          User Analytics
        </Button>
        <Button
          colorScheme="telegram"
          onClick={() => navigate("/postanalytics")}
        >
          Post Analytics
        </Button>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
