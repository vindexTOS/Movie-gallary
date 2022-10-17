/*import React from "react";
import JSONDATA from "./mock_data.json";
import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Film(props) {
  const [movie, setMovie] = useState(JSONDATA);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const removeMovie = (id) => {
    let remove = movie.filter((film) => film.id !== id);
    setMovie(remove);
  };
  return (
    <div>
      <nav className="nav-bar">
        <input
          type="search"
          placeholder="   Search..."
          className="search-bar"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>

        <a href="/">Return to movies</a>
      </nav>

      <Input />
    </div>
  );
}

/*import "./App.css";
import movies from "./movies";
import React, { useState } from "react";
import Film from "./text";
import "./Input.css";
import Input from "./components/input/input.component";
import Navbar from "./components/navigation/navbar.component";
import { useNavigate } from "react-router-dom";
const Movie = () => {
  //search state and usenav.................

  const [title, setTitle] = useState("");
  const [img, setImage] = useState("");
  const [id, setId] = useState("");
  const [rate, setRate] = useState("");
  const [movie, setMovie] = useState(movies);

  //form inputs and out puts.....................
  //movie remove function..........................
  const removeMovie = (id) => {
    const remove = movie.filter((film) => film.id !== id);
    setMovie(remove);
  };
  //..................................................
  const inputChange = (e) => {
    e.preventDefault();
    if (title || img || id || rate) {
      const film = { title, img, id, rate };
      setMovie((mov) => {
        return [...mov, film];
      });
      setTitle("");
      setImage("");
      setRate("");
      setId("");
    } else {
      console.log("empty values");
    }
  };
  //return........................
  return (
    <div className="main-div">
      {/*nav bar.................... }
      <Navbar movies={movies} />
      {/* FORM INPUT  }
      <form className="input-form" onSubmit={inputChange}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="img">Img</label>
        <input
          type="text"
          id="img"
          value={img}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          valie={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label htmlFor="raiting">raiting</label>
        <input
          type="text"
          id="raiting"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <button className="btn" type="submit">
          Add movie
        </button>
      </form>
      {/* MOVIE section.................... }
      <div className="movie">
        {movie
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })  
          .map((films) => {
            const { title, img, rate, id } = films;
            return (
              <article key={id} className="list">
                {img === "" ? null : <img src={img} alt={title} />}{" "}
                <h1>{title}</h1>
                <p>Raiting: {rate}</p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => removeMovie(id)}
                >
                  Remove
                </button>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default Movie;*/
