import React, {useState} from 'react';

export default function SearchMovies(){

    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    const searchMovies= async (e) =>{
        e.preventDefault();
        console.log('Submitting');
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=113d0772b05def8dd25b1dec60ebe0b6&language=en-US&query=${query}&page=1&include_adult=false`;
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setMovies(data.results);
      
    }

    return(
        <>
        <form className='form'onSubmit={searchMovies}>
            <label className ='label' htmlFor='query'>Movie Name</label>
            <input className ='input'type='text' name='query' placeholder='i.e. Jurassic Park' value={query} onChange={(e)=> setQuery(e.target.value)}/>
            <button className='button' type='submit'>Search</button>
        </form>
        <div className='card-list'>
            { movies.filter(movie => movie.poster_path).map(movie => (
                <div className="card" key={movie.id}>
                   <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                </div>    
            ) )}
        </div>
        </>
    )
}