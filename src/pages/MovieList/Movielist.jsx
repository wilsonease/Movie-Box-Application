import { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import "./MovieList.css";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_MOVIE_URL;

const getTopRatedMoviesUrl = () =>
  `${baseUrl}/movie/top_rated?sort_by=popularity.desc&api_key=${apiKey}`;

const getSearchMoviesUrl = (query) =>
  `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`;

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const url = searchValue ? getSearchMoviesUrl(searchValue) : getTopRatedMoviesUrl();
      const response = await fetch(url);
      if (!response.ok) {
        setLoading(false);
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const movieResults = data.results.slice(0, 10);
      setMovies(movieResults);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  }, [searchValue]);

  useEffect(() => {
      fetchMovies();
  }, []);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleSearchSubmit = () => {
    if (searchValue !== "") {
      fetchMovies();
    }
  };

  return (
    <div className="main-container">
      <Header
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Movies movies={movies} loading={loading} />
      <Footer />
    </div>
  );
};
