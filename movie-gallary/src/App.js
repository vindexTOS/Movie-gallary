import "./App.css";
import "./Input.css";
import Error from "./components/Error";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/navbar.component";
import Movie from "./components/movies/movie.component";
import movies from "./movies";
import Footer from "./components/navigation/footer.component";
import SingleComponent from "./components/movies/single.movie.component";
import Popup from "./components/popup/popup.component";
function App() {
  {
    /* data and remove item  */
  }
  /*const getLocalStorage = () => {
    let list = localStorage.getItem("movie");
    if (list) {
      return JSON.parse(localStorage.getItem("movie"));
    } else {
      return [movies];
    }
  };*/

  const [dark, setDark] = useState(false);
  const [movie, setMovie] = useState(movies);
  const dialogHandle = (val) => {
    setDialog(val);
  };

  const removeMovie = (id) => {
    const remove = movie.filter((film) => film.id !== id);
    setMovie(remove);
  };
  {
    /* SEARCH USE STATE */
  }
  const [search, setSearch] = useState("");
  {
    /* popup useState */
  }
  const [dialog, setDialog] = useState(false);

  /*useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(movie));
  }, [movie]);*/

  return (
    <BrowserRouter>
      <Navbar
        dark={dark}
        setSearch={setSearch}
        search={search}
        setMovie={setMovie}
        movie={movie}
        setDark={setDark}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Movie
              dialog={dialog}
              setDialog={setDialog}
              movie={movie}
              setSearch={setSearch}
              search={search}
              removeMovie={removeMovie}
              dark={dark}
              dialogHandle={dialogHandle}
            />
          }
        >
          <Route path=":movieID" element={<SingleComponent />} />
        </Route>
        <Route path="hello" element={<SingleComponent />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer dark={dark} />
    </BrowserRouter>
  );
}

export default App;
