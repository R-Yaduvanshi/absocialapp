import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getRandomIndex } from "../utils/randomIndex";
import { getRandomUser } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const useRandomLogin = () => {
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const { allUsers, currentUser } = useSelector((store) => store);
  const toast = useToast();
  const handleRandomLogin = () => {
    setFlag(!flag);
    toast({
      title: "User Fetch",
      description: "You Logged in Successfully",
      status: "success",
      duration: 8000,
      isClosable: true,
      position: "top",
    });
  };

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
      dispatch(getRandomUser(payload));
    }
  }, [flag]);
  return handleRandomLogin;
};

export default useRandomLogin;
