import { ActionType } from '../contants/actionsTypes';

const initialState = {
  movies: [],
  movies2: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_MOVIE:
      return { ...state, movies: payload };
    case ActionType.ADD_MOVIE2:
      return { ...state, movies2: payload };

    default:
      return state;
  }
};
