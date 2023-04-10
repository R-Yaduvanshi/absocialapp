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
import { BiLike, BiEdit } from "react-icons/bi";
import { editPost, getAllPost } from "../redux/action";
const EditPostModal = ({ content, id }) => {
  const [newContent, setNewContent] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();

  const handleEdit = async () => {
    const payload = {
      content: newContent || content,
    };
    // console.log(payload, id);
    let res = await dispatch(editPost({ payload, id }));

    if (res === "SUCCESS") {
      toast({
        title: "Post Updated",
        description: "You've updated your post .",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      await dispatch(getAllPost());
    } else {
      toast({
        description: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} flex="1" variant="ghost" leftIcon={<BiEdit />}>
        Edit
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Edit Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"} gap="10px">
              <Textarea
                defaultValue={content}
                onChange={(e) => setNewContent(e.target.value)}
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

export default EditPostModal;
