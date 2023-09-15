import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import "./MovieList.css";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

export const Movielist = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const movieResults = data.results;
        setMovies(movieResults);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="main-container">
      <Header />
      <Movies movies={movies} />
      <Footer />
    </div>
  );
};
