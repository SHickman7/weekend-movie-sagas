import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails () {

    const selectedMovie = useSelector(store => store.selectedMovie);
    const selectedMovieGenres = useSelector(store => store.selectedMovieGenres);
    const dispatch = useDispatch ();
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
        <button onClick={goToHomeScreen} data-testid="toList">Return Home</button>
            <h3>{selectedMovie.title}</h3>
            <h4>{selectedMovieGenres.map(genre => {
                return (
                    <p key={genre.id}>{genre.name}</p>
                )
            })}</h4>
            <img src = {selectedMovie.poster} />
            <p> {selectedMovie.description}</p>
         </div>
        </>
    );
};

export default MovieDetails;