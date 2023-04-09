import * as types from "./action.types";

const initialState = {
  isLoading: false,
  isError: false,
  currentUser: {},
  allUsers: [],
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
    default:
      return oldState;
  }
};
