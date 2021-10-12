// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
// import the `MovieShow` component:
import MovieShow from "../components/MovieShow";

// Here we add `match` to the arguments so we can access the path information
// in `routerProps` that is passed from App.js
//The movies prop has been passed from App to MoviesPage, then again to MoviesList
// const MoviesPage = ({ match, movies }) => (
//   <div>
//     <MoviesList movies={movies} />
//     // We also add a `Route` component that will render `MovieShow` // when a movie
//     is selected
//     // Adding code to pass the movies to the `MovieShow` component
//     <Route path={`${match.url}/:movieId`} component={<MovieShow movies={movies} />} />
//   </div>
// )

// export default MoviesPage


const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    // Here we replace the `component` prop with the `render` prop so we can pass
    the // route information to the `MovieShow` component
    <Route
      path={`${match.url}/:movieId`}
      render={(routerProps) => <MovieShow {...routerProps} movies={movies} />}
    />
  </div>
);

export default MoviesPage;