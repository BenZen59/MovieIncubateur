import MovieCard from './components/MovieCard/MovieCard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
