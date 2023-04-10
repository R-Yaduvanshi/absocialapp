import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiLike, BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import "aos/dist/aos.css";
import { deletePostRequest, getAllPost } from "../redux/action";
const PostCard = ({ user_id, content, likes, id, name }) => {
  const { allUsers } = useSelector((store) => store);
  const dispatch = useDispatch();
  const toast = useToast();
  //   console.log(allUsers);
  //   console.log(user_id);
  const handleDeletePost = async (id) => {
    let res = await dispatch(deletePostRequest(id));

    if (res == "SUCCESS") {
      toast({
        title: "Post Deleted",
        description: "You deleted your post successfully .",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      dispatch(getAllPost());
    } else {
      toast({
        description: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Card maxW="md" border={"3px solid #ccff33"} key={id}>
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Segun Adebayo"
              src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            />

            <Box>
              <Heading size="sm"> {name ? name : "Segun Adebayo"}</Heading>
              <Text>Jr. Developer</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{content}</Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://random.imagecdn.app/500/250"
        alt="post photo"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          Like {likes}
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiEdit />}>
          Edit
        </Button>
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<MdDeleteOutline />}
          onClick={() => handleDeletePost(id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
