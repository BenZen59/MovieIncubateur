import { ActionType } from '../contants/actionsTypes';

export const addMovies = (movie) => {
  return {
    type: ActionType.ADD_MOVIE,
    payload: movie,
  };
};

// export const getDataFromLocalStorage = () => {
//   const data = localStorage.getItem('myData');
//   return {
//     type: ActionType.GET_DATA,
//     payload: data ? JSON.parse(data) : null,
//   };
// };
