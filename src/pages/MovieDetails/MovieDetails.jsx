import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const movieUrl = process.env.REACT_APP_MOVIE_URL;
const imgUrl = process.env.REACT_APP_IMAGE_URL;

export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const apiUrl = `${movieUrl}/${id}?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const movieDetailsResult = data;
        setMovieDetails(movieDetailsResult);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div className="details-container">
      <div className="thumbnail-container">
        <img
          className="movie-details-thumbnail"
          src={`${imgUrl}${movieDetails?.backdrop_path}`}
          alt="movie thumbnail"
        />
      </div>

      <div className="movie-info">
        <div className="title-container">
          <ul className="title">
            <li data-testid="movie-title">{movieDetails?.title}</li>
            <li data-testid="movie-release-date">
              {movieDetails?.release_date.split("-")[0]}
            </li>
            <li>
              <span data-testid="movie-runtime">{movieDetails?.runtime}</span> m
            </li>
          </ul>
          <div>&nbsp;</div>
        </div>
        <div className="other-details">
          <div className="overview">{movieDetails?.overview}</div>
          <div className="cast">
            <span>Director :</span> Joseph Kosinski
          </div>
          <div className="cast">
            <span>Writers :</span> Jim Cash, Jack Epps Jr, Peter Craig
          </div>
          <div className="cast">
            <span>Stars :</span> Tom Cruise, Jennifer Connelly, Miles Teller
          </div>
        </div>
      </div>
    </div>
  );
};
