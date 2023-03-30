import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MovieCard() {
  const [dataFilms, setDataFilms] = useState([]);
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
    <div className='flex flex-wrap'>
      {dataFilms.map((data) => {
        return (
          <div className='w-72 h-96 border-black bg-stone-200 text-2xl text-center m-3'>
            <p className='mt-3'>{data.title}</p>
            <img
              className='w-56 h-72 ml-8 mt-4'
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt='imgmovie'
            />
          </div>
        );
      })}
    </div>
  );
}
