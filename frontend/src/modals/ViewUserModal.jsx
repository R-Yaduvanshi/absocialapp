import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ViewUserModal = ({ name, email, bio, updatedTime, createdTime, id }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>View</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"}>
              <Text>
                {" "}
                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                  Name :
                </span>{" "}
                {name}
              </Text>
              <Text>
                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                  Email :
                </span>{" "}
                {email}
              </Text>
              <Text>
                {" "}
                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                  Bio :
                </span>{" "}
                {bio}
              </Text>
              <Text>
                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                  Account_Created_At :
                </span>{" "}
                {createdTime[0]} : {createdTime[1]}
              </Text>
              <Text>
                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                  Account_Updated_At :
                </span>{" "}
                {updatedTime[0]} : {updatedTime[1]}
              </Text>
              <Text>
                {" "}
                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                  User ID:
                </span>{" "}
                {id}
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewUserModal;
