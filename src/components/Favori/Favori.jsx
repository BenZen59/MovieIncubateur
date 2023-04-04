import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addMovies } from '../../redux/actions/movieActions';

function Favori() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allMovies.movies);
  let dataObject = [];
  try {
    dataObject = [
      {
        title: data.payload.title,
        backdrop: data.payload.backdrop_path,
      },
    ];
  } catch (e) {
    console.log('Something went wrong', e);
  }

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('movieData');
    if (dataFromLocalStorage) {
      dispatch(addMovies(JSON.parse(dataFromLocalStorage)));
    }
  }, [dispatch]);

  return (
    <div>
      {dataObject.map((event) => {
        return (
          <div key={event.id}>
            {event.title}
            <img
              src={`https://image.tmdb.org/t/p/original/${event.backdrop}`}
              alt='poster'
            />
          </div>
        );
      })}
    </div>
  );
}

export default Favori;
