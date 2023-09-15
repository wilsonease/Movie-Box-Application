import React from "react";
import "./Header.css";
import { Navbar } from "./Navbar/Navbar";
import { FeatuedMovie } from "./FeaturedMovie/FeatuedMovie";

export const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <FeatuedMovie />
    </header>
  );
};
