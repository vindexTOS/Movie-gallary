import React from "react";
import movies from "../movies";
import { useState, useEffect } from "react";
import Navbar from "./navigation/navbar.component";
import "../Input.css";
import Movie from "./movies/movie.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  seNavigate,
  Link,
  Outlet,
} from "react-router-dom";
export default function Main() {
  {
    /* data and remove item  */
  }
  const [dark, setDark] = useState(true);
  const [movie, setMovie] = useState(movies);
  const [dialog, setDialog] = useState(false);

  const removeMovie = (id) => {
    const remove = movie.filter((film) => film.id !== id);

    setMovie(remove);
  };
  {
    /* SEARCH USE STATE */
  }
  const [search, setSearch] = useState("");

  return (
    <>
      {/*<Navbar
        dark={dark}
        setSearch={setSearch}
        search={search}
        setMovie={setMovie}
        movie={movie}
        setDark={setDark}
      />{" "}*/}
      <Movie
        dialog={dialog}
        setDialog={setDialog}
        movie={movie}
        setSearch={setSearch}
        search={search}
        removeMovie={removeMovie}
        dark={dark}
      />
    </>
  );
}
