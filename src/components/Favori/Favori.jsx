import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  addMovies,
  addMovies2,
  addMovies3,
  addMovies4,
  addMovies5,
  removeMovies1,
  removeMovies2,
  removeMovies3,
  removeMovies4,
  removeMovies5,
} from '../../redux/actions/movieActions';

function Favori() {
  const navigate = useNavigate();
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
        id: data.payload.id,
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
        id: data2.payload.id,
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
        id: data3.payload.id,
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
        id: data4.payload.id,
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
        id: data5.payload.id,
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
    <div className='flex flex-wrap '>
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
            <button
              className='absolute w-12 h-8 text-xs text-center bg-red-500 outline outline-offset-2 outline-red-500 border-none rounded-md ml-[16%] mt-[-45px]'
              onClick={() => {
                removeMovies1();
               navigate(0);
              }}
            >
              Remove
            </button>
            <Link to={`/details/${event.id}`}>
              <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
                Details
              </button>
            </Link>
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
            <button
              className='absolute w-12 h-8 text-xs text-center bg-red-500 outline outline-offset-2 outline-red-500 border-none rounded-md ml-[16%] mt-[-45px]'
              onClick={() => {
                removeMovies2();
                navigate(0);
              }}
            >
              Remove
            </button>
            <Link to={`/details/${event.id}`}>
              <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
                Details
              </button>
            </Link>
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
            <button
              className='absolute w-12 h-8 text-xs text-center bg-red-500 outline outline-offset-2 outline-red-500 border-none rounded-md ml-[16%] mt-[-45px]'
              onClick={() => {
                removeMovies3();
                navigate(0);
              }}
            >
              Remove
            </button>
            <Link to={`/details/${event.id}`}>
              <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
                Details
              </button>
            </Link>
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
            <button
              className='absolute w-12 h-8 text-xs text-center bg-red-500 outline outline-offset-2 outline-red-500 border-none rounded-md ml-[16%] mt-[-45px]'
              onClick={() => {
                removeMovies4();
                navigate(0);
              }}
            >
              Remove
            </button>
            <Link to={`/details/${event.id}`}>
              <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
                Details
              </button>
            </Link>
          </div>
        );
      })}
      {dataObject5.map((event) => {
        return (
          <div
            key={event.id}
            className='bg-stone-200 m-10 border-solid border-2 border-stone-700 w-[23%] h-[200px] overflow-hidden outline outline-offset-2 outline-black-500 rounded-md '
          >
            <h1 className='text-center w-[438px] h-[40px] text-4xl font-bold'>
              {event.title}
            </h1>
            <img
              className='w-[100%] h-[79.5%]'
              src={`https://image.tmdb.org/t/p/original/${event.backdrop}`}
              alt='poster'
            />
            <button
              className='absolute w-12 h-8 text-xs text-center bg-red-500 outline outline-offset-2 outline-red-500 border-none rounded-md ml-[16%] mt-[-45px]'
              onClick={() => {
                removeMovies5();
                navigate(0);
              }}
            >
              Remove
            </button>
            <Link to={`/details/${event.id}`}>
              <button className='absolute w-12 h-8 text-xs text-center bg-orange-500 outline outline-offset-2 outline-orange-500 border-none rounded-md ml-[19.7%] mt-[-45px]'>
                Details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Favori;
