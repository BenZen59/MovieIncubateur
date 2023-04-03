import * as actionsTypes from './actionType';

export const addMovie = (movie) => {
  return {
    type: actionsTypes.ADD_MOVIE,
    movie,
  };
};

export const removeMovie = (movie) => {
  return {
    type: actionsTypes.REMOVE_MOVIE,
    movie,
  };
};
