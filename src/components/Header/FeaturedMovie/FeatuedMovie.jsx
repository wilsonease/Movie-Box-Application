import React from "react";
import PlayIcon from "../../../assets/img/play.png";
import "./FeaturedMovie.css";
import { Rating } from "../../Rating/Rating";

export const FeatuedMovie = () => {
  return (
    <div className="featured-movie">
      <div className="title">John Wick 3 : Parabellum</div>
      <div className="rating">
        <Rating rating="90/100" percentage={100} />
      </div>
      <div>
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </div>

      <button className="watch-trailer-button">
        <img src={PlayIcon} alt="play" />
        <span>Watch trailer</span>
      </button>
    </div>
  );
};
