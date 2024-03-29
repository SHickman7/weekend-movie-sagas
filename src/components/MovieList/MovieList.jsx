import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory();

  const showMovieInfo = (movie) => {
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: movie
    })
    history.push('/details')
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id} >
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} onClick={() => showMovieInfo(movie)} data-testid="toDetails"/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
