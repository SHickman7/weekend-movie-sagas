import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const MovieDetails =  () => {



    const selectedMovie = useSelector(store => store.selectedMovie);
    const dispatch = useDispatch ();
    const history = useHistory();

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
            <h4>{selectedMovie.title}</h4>
            <img src = {selectedMovie.poster} />
            <p> {selectedMovie.description}</p>
         </div>
        </>
    );
};

export default MovieDetails;