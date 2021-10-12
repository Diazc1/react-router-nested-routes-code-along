import React from "react";
import { Link } from "react-router-dom";


//The movies prop has been passed from App to MoviesPage, then again to MoviesList
const MoviesList = ({ movies }) => {
    //to iterate over this object(movies) we use Object.keys(movies) to get an array of keys 
    //then map over this array. Since the keys in the object are also the id values for each movie, the elements in .map() are referred to as movieID
    const renderMovies = Object.keys(movies).map((movieID) => (
        <Link key={movieID} to={`/movies/${movieID}`}>
            {movies[movieID].title}
        </Link>
    ));


    return <div>{renderMovies}</div>;

};

export default MoviesList;