import axios from "axios";
import React from "react";

const useMyFetchGetRequest = async (endpoint) => {
  const res = await axios.get(
    `https://backendforadobeassignment-production.up.railway.app/${endpoint}`
  );

  return res;
};

export default useMyFetchGetRequest;
