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
    let res = await axios.get("http://localhost:7000/users/all/getall");
    await dispatch({ type: types.GET_ALL_USER_SUCCESS, payload: res.data });
    return "SUCCESS";
  } catch (err) {
    await dispatch({ type: types.GET_ALL_USER_FAILURE });
    return "FAILED";
  }
};

// <============================ Get Single User Action <==========================================>

export const getSingleUser = (id) => async (dispatch) => {
  await dispatch({ type: types.GET_SINGLE_USER_REQUEST });

  try {
    let res = axios.get(`http://localhost:7000/users/${id}`);
    // console.log(res);
  } catch (err) {
    await dispatch({ type: types.GET_SINGLE_USER_FAILURE });
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

// <============================ Set Random Action <==========================================>

export const getRandomUser = (payload) => async (dispatch) => {
  await dispatch({ type: types.RANDOM_USER_SUCCESS, payload: payload });
};

// <============================ Create POst Action <==========================================>

export const createPost = (payload) => async (dispatch) => {
  await dispatch({ type: types.CREATE_POST_REQUEST });

  try {
    let res = await axios.post("http://localhost:7000/posts", payload);
    await dispatch({ type: types.CREATE_POST_SUCCESS });
    return "SUCCESS";
  } catch (err) {
    await dispatch({ type: types.CREATE_POST_FAILURE });
    return "FAILED";
  }
};

// <============================ Get All Post Action <==========================================>

export const getAllPost = () => async (dispatch) => {
  await dispatch({ type: types.GET_ALL_POST_REQUEST });
  try {
    let res = await axios.get("http://localhost:7000/posts/all/getall");
    await dispatch({ type: types.GET_ALL_POST_SUCCESS, payload: res.data });
    return "SUCCESS";
  } catch (err) {
    await dispatch({ type: types.GET_ALL_POST_FAILURE });
    return "FAILED";
  }
};

// <============================ Delete Post Action <==========================================>

export const deletePostRequest = (id) => async (dispatch) => {
  await dispatch({ type: types.DELETE_POST_REQUEST });

  try {
    let res = await axios.delete(`http://localhost:7000/posts/${id}`);
    await dispatch({ type: types.DELETE_POST_SUCCESS });
    return "SUCCESS";
  } catch (err) {
    await dispatch({ type: types.DELETE_POST_FAILURE });
    return "FAILED";
  }
};

// <============================ Edit Post Action <==========================================>

export const editPost =
  ({ payload, id }) =>
  async (dispatch) => {
    await dispatch({ type: types.EDIT_POST_REQUEST });
    try {
      let res = await axios.put(`http://localhost:7000/posts/${id}`, payload);
      await dispatch({ type: types.EDIT_POST_SUCCESS });
      return "SUCCESS";
    } catch (err) {
      await dispatch({ type: types.EDIT_POST_FAILURE });
      console.log(err);
      return "FAILED";
    }
  };
