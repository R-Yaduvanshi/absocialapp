import * as types from "./action.types";

const initialState = {
  isLoading: false,
  isError: false,
  currentUser: {},
};

export const reducer = (oldState = initialState, { type, payload }) => {
  switch (type) {
    default:
      return oldState;
  }
};
