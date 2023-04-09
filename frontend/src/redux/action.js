import * as types from "./action.types";
import axios from "axios";

// <============================ Create User Action <==========================================>

export const createUser = (payload) => async (dispatch) => {
  await dispatch({ type: types.CREATE_USER_REQUEST });
  try {
    let res = await axios.post("http://localhost:7000/users", payload);
    await dispatch({ type: types.CREATE_USER_SUCCESS, payload: res.data });
    return "SUCCESS";
  } catch (err) {
    await dispatch({ type: types.CREATE_USER_FAILURE });
    return "FAILED";
  }
};

// <============================ Get All User Action <==========================================>

export const getAllUsers = () => async (dispatch) => {
  await dispatch({ type: types.GET_ALL_USER_REQUEST });
  try {
    let res = await axios.get("http://localhost:7000/allusers");
    await dispatch({ type: types.GET_ALL_USER_SUCCESS, payload: res.data });
    return "SUCCESS";
  } catch (err) {
    await dispatch({ type: types.GET_ALL_USER_FAILURE });
    return "FAILED";
  }
};

// <============================ Edit User Action <==========================================>

export const editUser =
  ({ payload, id }) =>
  async (dispatch) => {
    await dispatch({ type: types.EDIT_USER_REQUEST });
    try {
      let res = await axios.put(`http://localhost:7000/users/${id}`, payload);
      await dispatch({ type: types.EDIT_USER_SUCCESS });
      return "SUCCESS";
    } catch (err) {
      await dispatch({ type: types.GET_ALL_USER_FAILURE });
      return "FAILED";
    }
  };

// <============================ Deletet User Action <==========================================>

export const deleteUser = (id) => async (dispatch) => {
  await dispatch({ type: types.DELETE_USER_REQUEST });

  try {
    let res = await axios.delete(`http://localhost:7000/users/${id}`);
    await dispatch({ type: types.DELETE_USER_SUCCESS });
    return "SUCCESS";
  } catch (err) {
    await dispatch({ type: types.DELETE_USER_FAILURE });
    return "FAILED";
  }
};
