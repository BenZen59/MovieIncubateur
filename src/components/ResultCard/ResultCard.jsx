import React from 'react';
import { Link } from 'react-router-dom';

function ResultCard(movie) {
  const { title, poster_path: posterPath, id } = movie;
  const poster = posterPath
    ? `https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}`
    : `https://via.placeholder.com/220x330/FFFFFF/000000/?text=No poster`;
  return (
    <div className='ml-[39%] mt-3 mb- w-[565px] h-[68px] bg-stone-200 outline outline-offset-2 outline-black-500 rounded-md relative z-50'>
      <Link
        to={`/details/${id}`}
        className='flex'
        onClick={window.location.reload}
      >
        <img
          className='w-[36px] h-[48px] m-3'
          src={poster}
          alt={`${title} Poster`}
        />
        <h1 className='text-2xl mt-3 w-[700px] h-10 overflow-hidden'>
          {title}
        </h1>
      </Link>
    </div>
  );
}

export default ResultCard;
