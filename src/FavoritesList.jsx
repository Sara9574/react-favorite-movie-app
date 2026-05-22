import FavoriteMovie from './FavoriteMovie';

function FavoritesList(props){
    return(
        <div>
            <h3>My favorite movies</h3>
            <ul>
                {props.favorites.map(movie =>(
                    <FavoriteMovie movie = {movie} removeFavorite = {props.removeFavorite}/>
                ))}
            </ul>
        </div>
    )
}

export default FavoritesList