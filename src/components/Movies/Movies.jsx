import React from "react";
import { Movie } from "./Movie/Movie";
import "./Movies.css";
import { NavLink } from "react-router-dom";

const Movies = ({ movies }) => {
  return (
    <div className="movies">
      <div className="movies-header">
        <h1>Featured Movie</h1>
        <div>See more</div>
      </div>
      {movies?.length > 0 ? (
        <div className="movies-list">
          {movies.map((movie) => (
            <NavLink key={movie.id} to={`/movies/${movie.id}`} className="movie-link">
              <Movie movie={movie} />
            </NavLink>
          ))}
        </div>
      ) : (
        <div>NO movies found</div>
      )}
    </div>
  );
};

export default Movies;
