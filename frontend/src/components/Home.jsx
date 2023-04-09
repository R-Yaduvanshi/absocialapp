import { Box, Button, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Container maxW={"60%"} h="88vh">
      <SimpleGrid columns={3} spacing={10} pt="20px">
        <Button colorScheme="linkedin">Create User</Button>
        <Button colorScheme="facebook">See All Users</Button>
        <Button colorScheme="messenger">Create Post</Button>
        <Button colorScheme="whatsapp">See All Post</Button>
        <Button colorScheme="twitter">User Analytics</Button>
        <Button colorScheme="telegram">Post Analytics</Button>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
