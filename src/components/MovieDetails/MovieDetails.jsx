import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails () {

    const selectedMovie = useSelector(store => store.selectedMovie);
    const selectedMovieGenres = useSelector(store => store.selectedMovieGenres);
    const dispatch = useDispatch ();
    const history = useHistory();
    console.log('selectedMovieGenres:',selectedMovieGenres);

    //function to return back to the home screen after clicking on the detailed info
        // of a movie
    const goToHomeScreen = () => {
        dispatch({
            type: "RESET_SELECTED_MOVIE"
        })
        history.push('/')
    };

    return(
        <>
         <div key={selectedMovie.id} data-testid="movieDetails">
            <button onClick={goToHomeScreen} data-testid="toList" className="button">Return to Movie Landing Page</button>
            <h2>{selectedMovie.title}</h2>
            <img src = {selectedMovie.poster} /> </div>
        <div className="bottom_half_detailed_page">
            <h4 className="header_underline">Genre(s):</h4>
            <h4>{selectedMovieGenres.map(genre => {
                return (
                    <>
                    <li key={genre.id}>{genre.name}</li>
                    </>
                )
            })}</h4>
            <p className="movie_description"> {selectedMovie.description}</p>
         </div>
        </>
    );
};

export default MovieDetails;