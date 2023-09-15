import React from "react";
import "./Movie.css";
import { Rating } from "../../Rating/Rating";
const imgUrl = process.env.REACT_APP_IMAGE_URL;

export const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <div className="movie-thumbnail">
        <img
          className="movie-poster"
          src={`${imgUrl}${movie.poster_path}`}
          alt="movie thumbnail"
          data-testid="movie-poster"
        />
      </div>
      <div className="movie-details">
        <div className="movie-release-date" data-testid="movie-release-date">
          {movie.release_date.split("-")[0]}
        </div>
        <div className="title" data-testid="movie-title">
          {movie.original_title}
        </div>
        <div className="movie-rating">
        <Rating rating="85/100" percentage={60} />
        </div>
        <div className="genre">Action, adventure...</div>
      </div>
    </div>
  );
};
