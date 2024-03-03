import { useSelector} from "react-redux";

const MovieDetails =  () => {



    const selectedMovie = useSelector(store => store.selectedMovie);

    return(
        <>
         <div key={selectedMovie.id}>
            <h4>{selectedMovie.title}</h4>
            <img src = {selectedMovie.poster} />
            <p> {selectedMovie.description}</p>
         </div>
        </>
    );
};

export default MovieDetails;