import { ActionType } from '../contants/actionsTypes';

export const addMovies = (movie) => {
  return {
    type: ActionType.ADD_MOVIE,
    payload: movie,
  };
};

export const addMovies2 = (movie2) => {
  return {
    type: ActionType.ADD_MOVIE2,
    payload: movie2,
  };
};
