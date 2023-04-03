import Search from '../Search/Search';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex'>
      <p className='ml-[35%] mt-4 text-3xl font-bold'>Movie Incubateur</p>
      <div className='text-lg ml-[100px] mt-[20px] flex flex-nowrap'>
        <div className='mr-[50px]'>
          <NavLink to='/'>Accueil</NavLink>
        </div>
        <div>
          <NavLink to='/favori'>Favoris</NavLink>
        </div>{' '}
      </div>
      <Search />
    </div>
  );
}
