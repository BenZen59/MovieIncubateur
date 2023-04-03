import React from 'react';
import { useSelector } from 'react-redux';

function Favori() {
  const movies = useSelector((state) => state.allMovies.movies);
  const { id, title } = movies[0];
  return (
    <div>
      <h1>{title}</h1>
      <h2>{id}</h2>
    </div>
  );
}

export default Favori;
