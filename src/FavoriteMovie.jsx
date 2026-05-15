function FavoriteMovie(props){
    return(
        <li>
            <h4>{props.movie.Title}</h4>
            <img src={props.movie.Poster} alt={`Poster of ${props.movie.Title}`}/>
        </li>
    )
}

export default FavoriteMovie