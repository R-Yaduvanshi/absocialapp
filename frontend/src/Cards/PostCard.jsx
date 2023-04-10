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
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiLike, BiEdit, BiDislike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import "aos/dist/aos.css";
import {
  deletePostRequest,
  dislikePost,
  getAllPost,
  likePost,
} from "../redux/action";
import EditPostModal from "../modals/EditPostModal";
import AOS from "aos";
import "aos/dist/aos.css";

const PostCard = ({ user_id, content, likes, id, name, zoom, width }) => {
  const dispatch = useDispatch();
  const { currentLikePost, currentDisLikePost } = useSelector((store) => store);
  const toast = useToast();

  // <==============================> Delete Post <======================================>

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

  // <==============================> Like Post <======================================>

  const handleLike = async (id) => {
    if (currentLikePost._id == id) {
      return toast({
        description: "You have already Like this post",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
    let res = await dispatch(likePost(id));
    await dispatch(getAllPost());
    toast({
      description: "woohoo! You like this post",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  // <==============================> DisLike Post <======================================>

  const handleUnlike = async (id, likes) => {
    if (likes !== 0) {
      if (currentDisLikePost._id == id) {
        return toast({
          description: "You have already Dislike this post",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      }
      let res = await dispatch(dislikePost(id));
      await dispatch(getAllPost());
      toast({
        description: "You not like this post",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Card
      maxW={width}
      border={"3px solid #ccff33"}
      key={id}
      variant={"outline"}
      colorScheme="facebook"
      data-aos={zoom}
      data-aos-delay={900}
    >
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
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<BiLike />}
          onClick={() => handleLike(id)}
        >
          Like {likes}
        </Button>
        <Button
          flex="1"
          variant="ghost"
          leftIcon={<BiDislike />}
          onClick={() => handleUnlike(id, likes)}
        >
          Unlike
        </Button>
        <EditPostModal content={content} id={id} />
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
