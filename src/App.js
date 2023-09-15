import "./App.css";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Route, Routes } from "react-router-dom";
import { Movielist } from "./pages/MovieList/Movielist";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movielist />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
