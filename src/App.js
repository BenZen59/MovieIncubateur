import MovieCard from './components/MovieCard/MovieCard';
import Favori from './components/Favori/Favori';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MovieCard />} />
          <Route path='/favori' element={<Favori />} />{' '}
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
