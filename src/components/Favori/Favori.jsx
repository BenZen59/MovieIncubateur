import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addMovies } from '../../redux/actions/movieActions';
import { addMovies2 } from '../../redux/actions/movieActions';
import { addMovies3 } from '../../redux/actions/movieActions';
import { addMovies4 } from '../../redux/actions/movieActions';
import { addMovies5 } from '../../redux/actions/movieActions';

function Favori() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allMovies.movies);
  const data2 = useSelector((state) => state.allMovies.movies2);
  const data3 = useSelector((state) => state.allMovies.movies3);
  const data4 = useSelector((state) => state.allMovies.movies4);
  const data5 = useSelector((state) => state.allMovies.movies5);

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
  let dataObject2 = [];
  try {
    dataObject2 = [
      {
        title: data2.payload.title,
        backdrop: data2.payload.backdrop_path,
      },
    ];
  } catch (e) {
    console.log('Something went wrong', e);
  }
  let dataObject3 = [];
  try {
    dataObject3 = [
      {
        title: data3.payload.title,
        backdrop: data3.payload.backdrop_path,
      },
    ];
  } catch (e) {
    console.log('Something went wrong', e);
  }
  let dataObject4 = [];
  try {
    dataObject4 = [
      {
        title: data4.payload.title,
        backdrop: data4.payload.backdrop_path,
      },
    ];
  } catch (e) {
    console.log('Something went wrong', e);
  }
  let dataObject5 = [];
  try {
    dataObject5 = [
      {
        title: data5.payload.title,
        backdrop: data5.payload.backdrop_path,
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

  useEffect(() => {
    const dataFromLocalStorage2 = localStorage.getItem('movieData2');
    if (dataFromLocalStorage2) {
      dispatch(addMovies2(JSON.parse(dataFromLocalStorage2)));
    }
  }, [dispatch]);

  useEffect(() => {
    const dataFromLocalStorage3 = localStorage.getItem('movieData3');
    if (dataFromLocalStorage3) {
      dispatch(addMovies3(JSON.parse(dataFromLocalStorage3)));
    }
  }, [dispatch]);

  useEffect(() => {
    const dataFromLocalStorage4 = localStorage.getItem('movieData4');
    if (dataFromLocalStorage4) {
      dispatch(addMovies4(JSON.parse(dataFromLocalStorage4)));
    }
  }, [dispatch]);

  useEffect(() => {
    const dataFromLocalStorage5 = localStorage.getItem('movieData5');
    if (dataFromLocalStorage5) {
      dispatch(addMovies5(JSON.parse(dataFromLocalStorage5)));
    }
  }, [dispatch]);

  return (
    <div>
      {dataObject.map((event) => {
        return (
          <div
            key={event.id}
            className='bg-stone-200 m-10 border-solid border-2 border-stone-700 w-[23%] h-[200px] overflow-hidden outline outline-offset-2 outline-black-500 rounded-md	'
          >
            <h1 className='text-center w-[438px] h-[40px] text-4xl font-bold'>
              {event.title}
            </h1>
            <img
              className='w-[100%] h-[79.5%]'
              src={`https://image.tmdb.org/t/p/original/${event.backdrop}`}
              alt='poster'
            />
            <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
              Details
            </button>
          </div>
        );
      })}
      {dataObject2.map((event) => {
        return (
          <div
            key={event.id}
            className='bg-stone-200 m-10 border-solid border-2 border-stone-700 w-[23%] h-[200px] overflow-hidden outline outline-offset-2 outline-black-500 rounded-md	'
          >
            <h1 className='text-center w-[438px] h-[40px] text-4xl font-bold'>
              {event.title}
            </h1>
            <img
              className='w-[100%] h-[79.5%]'
              src={`https://image.tmdb.org/t/p/original/${event.backdrop}`}
              alt='poster'
            />
            <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
              Details
            </button>
          </div>
        );
      })}
      {dataObject3.map((event) => {
        return (
          <div
            key={event.id}
            className='bg-stone-200 m-10 border-solid border-2 border-stone-700 w-[23%] h-[200px] overflow-hidden outline outline-offset-2 outline-black-500 rounded-md	'
          >
            <h1 className='text-center w-[438px] h-[40px] text-4xl font-bold'>
              {event.title}
            </h1>
            <img
              className='w-[100%] h-[79.5%]'
              src={`https://image.tmdb.org/t/p/original/${event.backdrop}`}
              alt='poster'
            />
            <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
              Details
            </button>
          </div>
        );
      })}
      {dataObject4.map((event) => {
        return (
          <div
            key={event.id}
            className='bg-stone-200 m-10 border-solid border-2 border-stone-700 w-[23%] h-[200px] overflow-hidden outline outline-offset-2 outline-black-500 rounded-md	'
          >
            <h1 className='text-center w-[438px] h-[40px] text-4xl font-bold'>
              {event.title}
            </h1>
            <img
              className='w-[100%] h-[79.5%]'
              src={`https://image.tmdb.org/t/p/original/${event.backdrop}`}
              alt='poster'
            />
            <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
              Details
            </button>
          </div>
        );
      })}
      {dataObject5.map((event) => {
        return (
          <div
            key={event.id}
            className='bg-stone-200 m-10 border-solid border-2 border-stone-700 w-[23%] h-[200px] overflow-hidden outline outline-offset-2 outline-black-500 rounded-md	'
          >
            <h1 className='text-center w-[438px] h-[40px] text-4xl font-bold'>
              {event.title}
            </h1>
            <img
              className='w-[100%] h-[79.5%]'
              src={`https://image.tmdb.org/t/p/original/${event.backdrop}`}
              alt='poster'
            />
            <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Favori;
