import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Play from '../../img/play.png';
import star1 from '../../img/star1.png';
import star2 from '../../img/star2.png';
import star3 from '../../img/star3.png';
import star4 from '../../img/star4.png';
import star5 from '../../img/star5.png';

export default function Details() {
  const [titles, setTitles] = useState([]);
  const [voteAverages, setVoteAverages] = useState([]);
  const [numberVotes, setNumberVotes] = useState([]);
  const [backdrops, setBackdrops] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [overviews, setOverviews] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [releaseDates, setReleaseDates] = useState([]);
  const [isos, setIsos] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [releaseDateCountrys, setReleaseDateCountrys] = useState([]);
  const { id } = useParams();

  const Star = () => {
    if (voteAverages === 10) {
      return star5;
    }
    if (voteAverages < 10 && voteAverages >= 8) {
      return star4;
    }
    if (voteAverages < 8 && voteAverages >= 6) {
      return star3;
    }
    if (voteAverages < 6 && voteAverages >= 4) {
      return star2;
    }
    return star1;
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie//${id}?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=FR`
      )
      .then(({ data }) => {
        setTitles(data.title);
        setVoteAverages(data.vote_average);
        setNumberVotes(data.vote_count);
        setOverviews(data.overview);
        setRuntimes(data.runtime);
        setReleaseDates(data.release_date);
        setGenres(data.genres);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        setReleaseDateCountrys(data.results[0].release_dates[0].release_date);
        setIsos(data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US`
      )
      .then(({ data }) => {
        setDirectors(data.crew);
        setActors(data.cast);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        setBackdrops(data.posters[0].file_path);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=599ded6f0fc3bcaee1882e83ae0d438a`
      )
      .then(({ data }) => {
        setTrailers(data.results);
      })
      .catch(() => {
        setTrailers([]);
      });
  }, []);

  const DateYearOnly = (date) => {
    const year = new Date(date);
    return year.getFullYear();
  };

  const TrueDate = () => {
    let truedate = releaseDateCountrys;
    return truedate.slice(0, 10);
  };

  const Runtime = () => {
    if (runtimes > 59) {
      const hour = (runtimes - (runtimes % 60)) / 60;
      const min = setRuntimes % 60;
      return `${hour} H ${min} `;
    }
    return `${runtimes} min`;
  };

  return (
    <div>
      <div className='infoFilm flex bg-gray-900 mt-16 pl-80 pt-10 pb-10'>
        <img
          className='backgroundPoster w-72 h-108'
          src={`https://image.tmdb.org/t/p/original${backdrops}`}
          alt='fond'
        />
        <div className='info ml-10 mt-2'>
          <span className='title text-4xl font-bold text-white font-system'>
            {titles}
          </span>{' '}
          <span className='year text-4xl text-white font-system'>
            ({DateYearOnly(releaseDates)})
          </span>
          <br />
          <span className='text text-lg text-white font-system'>
            <div className='genre flex'>
              {TrueDate()} (
              {isos
                .filter((iso) => iso.iso_3166_1.includes('FR'))
                .map((iso) => {
                  return <>{iso.iso_3166_1}</>;
                })}
              )•
              <div className='genre '>
                {genres.map((event) => {
                  return <span>- {event.name} - </span>;
                })}
              </div>
              • {Runtime()}
            </div>
            <br />
            <div className='espaceNote flex h-16'>
              <div className='boxRating'>
                <p>{titles}</p>
                <p className='vote'>
                  <img className='starScore' src={Star()} alt='starScore' />

                  <br />
                  <div className='numberVote'>{numberVotes} votes</div>
                </p>
              </div>
              <span className='noteutilisateurs font-bold text-lg font-system'>
                Note des utilisateurs
              </span>

              {typeof trailer !== 'undefined' &&
                trailers
                  .filter((trailer) => trailer.type.includes('Trailer'))
                  .map((trailer) => {
                    return (
                      <>
                        <a
                          href={`https://www.youtube.com/embed/${trailer.key}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <button className='buttonplay' title={trailer.name}>
                            <img src={Play} alt='imagetrailer' />
                          </button>
                        </a>
                      </>
                    );
                  })}
            </div>
            <br />
            <span className='synopsis text-xl font-bold text-white font-system'>
              Synopsis
            </span>
            <br />
            <br />
            <div className='overview w-13/14'>{overviews}</div>
            <br />
            {directors
              .filter(
                (job) =>
                  job.job === 'Director' && job.department === 'Directing'
              )
              .map((dir) => {
                return (
                  <p>
                    <span className='director font-bold text-white font-system'>
                      {dir.name}
                    </span>
                    <br />
                    {dir.job}
                  </p>
                );
              })}
          </span>
        </div>
      </div>
      <h3 className='teteAffiche'>Têtes d'affiche</h3>
      <div className='actors flex justify-center items-center overflow-x-auto w-5/12 h-96 ml-96 mb-20 pl-96'>
        {actors
          .filter((actor) => actor.order < 10)
          .map((actor) => {
            const actorPoster = actor.profile_path
              ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
              : `https://via.placeholder.com/220x330/FFFFFF/000000/?text=no image`;

            return (
              <div className='m-4'>
                <img
                  className='h-44 w-40 shadow-lg rounded-t-lg'
                  src={actorPoster}
                  alt='actor'
                />
                <p className='text-lg bg-gray-900 text-white shadow-lg w-36 h-14 pt-2 pb-2 pl-2 pr-2 rounded-b-lg'>
                  <span className='font-bold'>{actor.name}</span>
                  <br />
                  {actor.character}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
