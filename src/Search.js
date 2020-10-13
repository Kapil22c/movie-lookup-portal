import React, {useState} from 'react';
import List from './List';
import './Search.css';

function Search() {

    const [query, setQuery] = useState('');
    
    const [movies, setMovies] = useState([]);

    const searchMovies = async(e) => {
        e.preventDefault();
        // console.log('submitting');

        // const query = 'Jurassic Park';

        const url = `https://api.themoviedb.org/3/search/movie?api_key=43e241f5865ea0ab906ca280a9eea5ab&language=en-US&query=${query}&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
        <form className='form' onSubmit = {searchMovies}>
            <label className='label' htmlFor='query'></label>
            <input className='input' type='text' name='query' placeholder='Mission Impossible' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className='button' type='submit'>Search</button>
        </form>

        <div className='result--list'>
            {movies.filter(movie => movie.poster_path).map(movie => (
               <List movie={movie} key={movie.id}/>
            ))}
        </div>
        
        
        </>
    );
}

export default Search;
