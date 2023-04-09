import * as types from "./action.types";
import axios from "axios";

export const createUser = (payload) => async (dispatch) => {
  dispatch({ type: types.CREATE_USER_REQUEST });
  try {
    let res = await axios.post("http://localhost:7000/users", payload);
    dispatch({ type: types.CREATE_USER_SUCCESS, payload: res.data });
    return "SUCCESS";
  } catch (err) {
    dispatch({ type: types.CREATE_USER_FAILURE });
    return "FAILED";
  }
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_USER_REQUEST });
  try {
    let res = await axios.get("http://localhost:7000/allusers");
    // console.log(res.data);
    dispatch({ type: types.GET_ALL_USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.GET_ALL_USER_FAILURE });
    return "FAILED";
  }
};
