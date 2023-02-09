import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Anime from './pages/Anime';
import AnimeProvider from './contexte/AnimeContexte';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound';
import AnimeFavoris from './pages/AnimeFavoris';

function App() {
  return (
    <AnimeProvider>
        <Router>
            <Routes>           
              <Route path='/' element={<><Navbar /> <Home /></>} />
              <Route path='/anime/:id' element={<Anime />} />
              <Route path='/anime/favoris' element={<AnimeFavoris />} />
              <Route path='/*' element={<NotFound />} />
          </Routes>
        </Router>  
    </AnimeProvider>
  );
}

export default App;
