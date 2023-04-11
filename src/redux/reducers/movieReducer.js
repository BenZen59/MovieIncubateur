import { ActionType } from '../contants/actionsTypes';

const initialState = {
  movies: [],
  movies2: [],
  movies3: [],
  movies4: [],
  movies5: [],
  pages: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_MOVIE:
      return { ...state, movies: payload };
    case ActionType.ADD_MOVIE2:
      return { ...state, movies2: payload };
    case ActionType.ADD_MOVIE3:
      return { ...state, movies3: payload };
    case ActionType.ADD_MOVIE4:
      return { ...state, movies4: payload };
    case ActionType.ADD_MOVIE5:
      return { ...state, movies5: payload };
    case ActionType.REMOVE_MOVIE1:
      return { ...state, movies: payload };
    case ActionType.REMOVE_MOVIE2:
      return { ...state, movies2: payload };
    case ActionType.REMOVE_MOVIE3:
      return { ...state, movies3: payload };
    case ActionType.REMOVE_MOVIE4:
      return { ...state, movies4: payload };
    case ActionType.REMOVE_MOVIE5:
      return { ...state, movies5: payload };
    case ActionType.SWITCH_PAGES:
      break;
    default:
      return state;
  }
};
