import { ActionType } from '../contants/actionsTypes';

export const addMovies = (movie) => {
  return {
    type: ActionType.ADD_MOVIE,
    payload: movie,
  };
};
