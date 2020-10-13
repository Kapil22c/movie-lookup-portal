import React from 'react';
import './List.css';

function List({ movie }) {

    return (
        <div className='result' >
            <img className='result--image' 
            src = {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title+ ' poster'} />

        <div className='result--content'>
            <h3 className="result--title">{movie.title}</h3>
            <p><small>Rating: {movie.vote_average}</small></p>
            <p><small>Released on: {movie.release_date}</small></p>
            <p className="result--desc">{movie.overview}</p>
        </div>
    </div>
    );
}

export default List;
