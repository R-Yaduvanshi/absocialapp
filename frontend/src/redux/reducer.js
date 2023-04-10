import * as types from "./action.types";

const initialState = {
  isLoading: false,
  isError: false,
  currentUser: {},
  allUsers: [],
  allPosts: [],
};

export const reducer = (oldState = initialState, { type, payload }) => {
  switch (type) {
    // <======================= Create User Reducer <========================================>

    case types.CREATE_USER_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.CREATE_USER_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        currentUser: payload,
      };

    case types.CREATE_USER_FAILURE:
      return {
        ...oldState,
        isError: true,
        isLoading: false,
      };

    // <============================ userList Reducer <==========================================>

    case types.GET_ALL_USER_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_ALL_USER_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        allUsers: payload,
      };
    case types.GET_ALL_USER_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    // <============================ Edit User Reducer <==========================================>

    case types.EDIT_USER_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.EDIT_USER_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
      };
    case types.EDIT_USER_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    // <============================ Delete User Reducer <==========================================>
    case types.DELETE_USER_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
      };
    case types.DELETE_USER_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    // <============================ Random User Reducer <==========================================>

    case types.RANDOM_USER_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        currentUser: payload,
      };

    // <============================ Create Post Reducer <==========================================>

    case types.CREATE_POST_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.CREATE_POST_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
      };

    case types.CREATE_POST_FAILURE:
      return {
        ...oldState,
        isError: true,
        isLoading: false,
      };
    // <============================ Get All Post Reducer <==========================================>

    case types.GET_ALL_POST_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.GET_ALL_POST_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        allPosts: payload,
      };

    case types.GET_ALL_POST_FAILURE:
      return {
        ...oldState,
        isError: true,
        isLoading: false,
      };

    // <============================ Edit Post Reducer <==========================================>

    case types.EDIT_POST_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.EDIT_POST_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
      };
    case types.EDIT_POST_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};
