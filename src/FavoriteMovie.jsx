function FavoriteMovie({movie, removeFavorite}){
    
    const handleRemove= (e)=>{
        e.stopPropagation()
        console.log("handle remove",movie)
        removeFavorite(movie)
    }
    return(
        <li>
            <h4>{movie.Title}</h4>
            <img src={movie.Poster} alt={`Poster of ${movie.Title}`}/>
            <button onClick={handleRemove}>remove</button>
        </li>
    )
}

export default FavoriteMovie