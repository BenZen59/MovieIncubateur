import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/actions/movieActions';
import { addMovies2 } from '../../redux/actions/movieActions';
import { addMovies3 } from '../../redux/actions/movieActions';
import { addMovies4 } from '../../redux/actions/movieActions';
import { addMovies5 } from '../../redux/actions/movieActions';
import axios from 'axios';

export default function MovieCard() {
  const [dataFilms, setDataFilms] = useState([]);
  const dispatch = useDispatch();

  const addFavori = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        if (localStorage.getItem('movieData') === null) {
          localStorage.setItem(
            'movieData',
            (dispatch(addMovies(data)),
            JSON.stringify(dispatch(addMovies(data))))
          );
        } else if (localStorage.getItem('movieData2') === null) {
          localStorage.setItem(
            'movieData2',
            (dispatch(addMovies2(data)),
            JSON.stringify(dispatch(addMovies2(data))))
          );
        } else if (localStorage.getItem('movieData3') === null) {
          localStorage.setItem(
            'movieData3',
            (dispatch(addMovies3(data)),
            JSON.stringify(dispatch(addMovies3(data))))
          );
        } else if (localStorage.getItem('movieData4') === null) {
          localStorage.setItem(
            'movieData4',
            (dispatch(addMovies4(data)),
            JSON.stringify(dispatch(addMovies4(data))))
          );
        } else if (localStorage.getItem('movieData5') === null) {
          localStorage.setItem(
            'movieData5',
            (dispatch(addMovies5(data)),
            JSON.stringify(dispatch(addMovies5(data))))
          );
        } else {
          alert('Nombre de favoris max atteint !');
        }
      });
  };

  useEffect(() => {
    addFavori();
  });

  const removeFavori = () => {
    alert('TEST');
  };

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
      )
      .then(({ data }) => {
        setDataFilms(data.results);
      });
  }, []);

  return (
    <>
      <div className='flex flex-wrap'>
        {dataFilms.map((data) => {
          return (
            <div className='w-72 h-[27rem] outline outline-offset-2 outline-black-500 rounded-md bg-stone-200 text-2xl text-center m-3'>
              <p className='mt-3 ml-11 w-52 h-10 overflow-hidden text-center'>
                {data.title}
              </p>
              <img
                className='w-56 h-72 ml-8 mt-4'
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt='imgmovie'
              />
              <div className='text-lg mt-2 '>
                <button
                  className='w-20 h-12 (text-center bg-cyan-500 outline outline-offset-2 outline-cyan-500 m-2 rounded-md'
                  onClick={() => {
                    addFavori(data.id);
                  }}
                >
                  Add
                </button>
                <button
                  className='w-20 h-12 text-center bg-red-500 outline outline-offset-2 outline-red-500 border-none m-2 rounded-md'
                  onClick={removeFavori}
                >
                  Remove
                </button>
                <button className='w-20 h-12 text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none m-2 rounded-md'>
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
