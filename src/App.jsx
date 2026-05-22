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

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(favorite => favorite.imdbID !== movie.imdbID))
  }

  console.log(favorites)
  return (
    <div className="App">
      <SearchMovies addFavorite = {addFavorite}/>
      <FavoritesList favorites={favorites} removeFavorite={removeFavorite}/>
    </div>
  );
}

export default App;