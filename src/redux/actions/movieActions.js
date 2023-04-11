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

export const addMovies3 = (movie3) => {
  return {
    type: ActionType.ADD_MOVIE3,
    payload: movie3,
  };
};

export const addMovies4 = (movie4) => {
  return {
    type: ActionType.ADD_MOVIE4,
    payload: movie4,
  };
};

export const addMovies5 = (movie5) => {
  return {
    type: ActionType.ADD_MOVIE5,
    payload: movie5,
  };
};

export const removeMovies1 = () => {
  return {
    type: ActionType.REMOVE_MOVIE1,
  };
};

export const removeMovies2 = () => {
  return {
    type: ActionType.REMOVE_MOVIE2,
  };
};

export const removeMovies3 = () => {
  return {
    type: ActionType.REMOVE_MOVIE3,
  };
};

export const removeMovies4 = () => {
  return {
    type: ActionType.REMOVE_MOVIE4,
  };
};

export const removeMovies5 = () => {
  return {
    type: ActionType.REMOVE_MOVIE5,
    payload: localStorage.removeItem('movieData5'),
  };
};

export const switchPages = (page) => {
  return {
    type: ActionType.SWITCH_PAGES,
    payload: page,
  };
};
