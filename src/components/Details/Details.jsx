import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
  const [overviews, setOverviews] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [releaseDates, setReleaseDates] = useState([]);
  const [isos, setIsos] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [releaseDateCountrys, setReleaseDateCountrys] = useState([]);
  const { id } = useParams();

  const Star = () => {
    return voteAverages === 10
      ? star5
      : voteAverages < 10 && voteAverages >= 8
      ? star4
      : voteAverages < 8 && voteAverages >= 6
      ? star3
      : voteAverages < 6 && voteAverages >= 4
      ? star2
      : star1;
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

  const DateYearOnly = (date) => {
    const year = new Date(date);
    return year.getFullYear();
  };

  const TrueDate = () => {
    let truedate = releaseDateCountrys;
    return truedate.slice(0, 10);
  };

  const Runtime = () => {
    const hours = Math.floor(runtimes / 60);
    const remainingMinutes = runtimes % 60;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes =
      remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
    return `${formattedHours} H ${formattedMinutes}`;
  };

  const FixedScore = () => {
    let fixedScore;
    fixedScore = parseFloat(voteAverages).toFixed(1);
    return fixedScore;
  };

  return (
    <div>
      <div className='infoFilm flex bg-gray-800 mt-16 pl-80 pt-10 pb-10'>
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
            <div className='espaceNote flex h-16'>
              <div className='boxRating'>
                <br />
                <p className='vote'>
                  <span className='noteutilisateurs font-bold text-lg font-system'>
                    Note des utilisateurs
                  </span>
                  <div className='flex'>
                    <img className='starScore' src={Star()} alt='starScore' />
                    <span className='rating ml-4 mt-1'>{FixedScore()}/10</span>
                  </div>
                  <div className='numberVote'>{numberVotes} votes</div>
                </p>
              </div>
            </div>
            <br />
            <div className='synopsis  mt-[50px] text-xl font-bold text-white font-system'>
              Synopsis
            </div>

            <div className='overview w-[1250px]'>{overviews}</div>
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
      <h3 className='teteAffiche text-2xl ml-96 mt-8 mb-6 font-system'>
        Têtes d'affiche
      </h3>
      <div className='actors flex justify-center items-center overflow-x-auto w-[1360px] h-96 ml-96 mt-[-40px] pl-96'>
        {actors
          .filter((actor) => actor.order < 10)
          .map((actor) => {
            const actorPoster = actor.profile_path
              ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
              : `https://via.placeholder.com/220x330/FFFFFF/000000/?text=no image`;

            return (
              <div className='m-4 mt-10'>
                <img
                  className='h-44 w-40 shadow-lg rounded-t-lg'
                  src={actorPoster}
                  alt='actor'
                />
                <p className='text-lg bg-gray-800 text-white shadow-lg w-36 h-15 pt-2 pb-2 pl-2 pr-2 rounded-b-lg overflow-hidden'>
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
