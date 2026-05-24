import FavoriteMovie from './FavoriteMovie';

function FavoritesList(props){
    return(
        <div>
            <h3>My favorite movies</h3>
            {props.favorites.length > 0 ? (
                <ul>
                    {props.favorites.map(movie =>(
                        <FavoriteMovie movie = {movie} removeFavorite = {props.removeFavorite}/>
                    ))}
                </ul>
            ) : (<p> 
                No favorite movies yet. Add some!
            </p>)}
        </div>
    )
}

export default FavoritesList