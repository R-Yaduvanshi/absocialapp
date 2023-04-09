import React, { useState } from "react";
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
  Textarea,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { editUser, getAllUsers } from "../redux/action";
const EditUserModal = ({ name, email, bio, updatedTime, createdTime, id }) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newBio, setNewBio] = useState("");

  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
  const handleEdit = async () => {
    const payload = {
      name: newName || name,
      email: newEmail || email,
      bio: newBio || bio,
    };
    let output = await dispatch(editUser({ payload, id }));
    await dispatch(getAllUsers());
    toast({
      title: "Account Updated",
      description: "We've updated your account .",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen}>Edit</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Edit Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"} gap="10px">
              <Input
                defaultValue={name}
                onChange={(e) => setNewName(e.target.value)}
              />
              <Input
                defaultValue={email}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <Textarea
                defaultValue={bio}
                onChange={(e) => setNewBio(e.target.value)}
              />
            </Flex>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"space-between"}>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditUserModal;
