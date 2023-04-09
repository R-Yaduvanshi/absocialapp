import * as types from "./action.types";

const initialState = {
  isLoading: false,
  isError: false,
  currentUser: {},
};

export const reducer = (oldState = initialState, { type, payload }) => {
  switch (type) {
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
    default:
      return oldState;
  }
};
