import "./App.css";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Route, Routes } from "react-router-dom";
import { Movielist } from "./pages/MovieList/Movielist";
import { HashRouter as Router, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movielist />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
