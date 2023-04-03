import axios from 'axios';
import { useState } from 'react';
import ResultCard from '../ResultCard/ResultCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
      .then(({ data }) => {
        setResults(data.results);
      })
      .catch(() => {
        setResults([]);
      });
  };
  return (
    <div>
      <input
        className='w-96 border-solid border-2 border-stone-700 p-1 ml-[44%] mt-4 mr-4 text-base rounded-md '
        type='text'
        placeholder='Search a movie ...'
        value={query}
        onChange={onChange}
      />
      {results.length > 0 && (
        <ul className='results'>
          {results.slice(0, 5).map((movie) => (
            <li key={movie.id}>
              <ResultCard {...movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
