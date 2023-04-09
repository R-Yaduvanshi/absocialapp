import * as types from "./action.types";
import axios from "axios";

// <============================ Create User Action <==========================================>

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

// <============================ Get All User Action <==========================================>

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_USER_REQUEST });
  try {
    let res = await axios.get("http://localhost:7000/allusers");
    dispatch({ type: types.GET_ALL_USER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.GET_ALL_USER_FAILURE });
    return "FAILED";
  }
};

// <============================ Edit User Action <==========================================>

export const editUser =
  ({ payload, id }) =>
  async (dispatch) => {
    dispatch({ type: types.EDIT_USER_REQUEST });
    try {
      let res = await axios.put(`http://localhost:7000/users/${id}`, payload);
      console.log(res);
      return "SUCCESS";
    } catch (err) {
      dispatch({ type: types.GET_ALL_USER_FAILURE });
      return "FAILED";
    }
  };
