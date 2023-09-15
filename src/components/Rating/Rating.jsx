import React from "react";
import ImdbIcon from "../../assets/img/imdb-icon.png";
import Tomato from "../../assets/img/tomato.png";
import "./Rating.css";

export const Rating = ({ rating, percentage }) => {
  return (
    <div className="rating">
      <div className="rating-score">
        <img src={ImdbIcon} alt="imdb" />
        <span>{rating}</span>
      </div>

      <div className="rating-score">
        <img src={Tomato} alt="tomato" />
        <span>{percentage}</span>
      </div>
    </div>
  );
};
