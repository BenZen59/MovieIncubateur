import { ActionType } from '../contants/actionsTypes';

export const addMovies = (movies) => {
  return {
    type: ActionType.ADD_MOVIE,
    payload: movies,
  };
};

// export const getDataFromLocalStorage = () => {
//   const data = localStorage.getItem('myData');
//   return {
//     type: ActionType.GET_DATA,
//     payload: data ? JSON.parse(data) : null,
//   };
// };
