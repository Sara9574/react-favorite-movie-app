import { useState } from 'react';
import './App.css';
import SearchMovies from './SearchMovies';
import FavoritesList from './FavoritesList';
import FavoriteMovie from './FavoriteMovie';


function App() {
  const [favorites,setFavorites] = useState([])

  const addFavorite = (movie) => {
    setFavorites([...favorites,movie])
  }

  console.log(favorites)
  return (
    <div className="App">
      <SearchMovies addFavorite = {addFavorite}/>
      <FavoritesList favorites={favorites}/>
    </div>
  );
}

export default App;