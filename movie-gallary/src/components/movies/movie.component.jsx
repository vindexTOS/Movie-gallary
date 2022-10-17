import React from "react";
import Popup from "../popup/popup.component";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleComponent from "./single.movie.component";
export default function Movie({
  movie,
  setDialog,
  dialog,
  search,
  removeMovie,
  dark,
  dialogHandle,
  handleCancel,
}) {
  return (
    <div className={!dark ? "dark-mode" : "main-div"}>
      {" "}
      <section>
        <div className="movie">
          {movie
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((films) => {
              const { title, img, rate, id } = films;
              return (
                <article key={id} className={!dark ? "list-dark" : "list"}>
                  {img === "" ? null : <img src={img} alt={title} />}{" "}
                  <h1>{title}</h1>
                  <p>Raiting: {rate}</p>
                  <div className="btn-container" key={id}>
                    {" "}
                    {dialog ? (
                      <Popup
                        key={id}
                        title={title}
                        id={id}
                        dialogHandle={dialogHandle}
                        removeMovie={removeMovie}
                      />
                    ) : (
                      <button
                        type="button"
                        className="btn"
                        onClick={() => setDialog(true)}
                      >
                        Remove
                      </button>
                    )}
                    <button className="btn">
                      <Link to="hello">Open</Link>
                    </button>
                  </div>
                </article>
              );
            })}
        </div>
      </section>{" "}
    </div>
  );
}
