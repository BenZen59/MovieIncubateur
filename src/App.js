import MovieCard from './components/MovieCard/MovieCard';
import Favori from './components/Favori/Favori';
import Header from './components/Header/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MovieCard />} />
          <Route path='/favori' element={<Favori />} />{' '}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
