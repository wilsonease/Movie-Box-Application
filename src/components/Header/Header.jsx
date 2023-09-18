import React from "react";
import "./Header.css";
import { Navbar } from "./Navbar/Navbar";
import { FeatuedMovie } from "./FeaturedMovie/FeatuedMovie";

export const Header = ({handleSearchChange, searchValue, handleSearchSubmit}) => {
  return (
    <header className="header">
      <Navbar handleSearchChange={handleSearchChange} searchValue={searchValue} handleSearchSubmit={handleSearchSubmit} />
      <FeatuedMovie />
    </header>
  );
};
