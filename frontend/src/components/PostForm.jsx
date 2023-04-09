import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomIndex } from "../utils/randomIndex";
import { getAllUsers } from "../redux/action";

const PostForm = () => {
  const [randomUser, setRandomUser] = useState({});
  const { allUsers } = useSelector((store) => store);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allUsers.length == 0) {
      dispatch(getAllUsers());
    }
  }, []);

  useEffect(() => {
    let index = null;
    if (allUsers?.length > 0) {
      const min = 0;
      const max = allUsers?.length - 1;
      const ind = getRandomIndex(min, max);
      index = ind;
    }
    if (index !== null) {
      let payload = allUsers[index];
      setRandomUser(payload);
    }
  }, []);

  console.log(randomUser);
  return (
    <Box p="10px" minHeight={"88vh"}>
      PostForm
    </Box>
  );
};

export default PostForm;
