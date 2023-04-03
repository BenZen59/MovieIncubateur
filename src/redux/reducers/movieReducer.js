import { ActionType } from '../contants/actionsTypes';

const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_MOVIE:
      return { ...state, movies: payload };

    default:
      return state;
  }
};
