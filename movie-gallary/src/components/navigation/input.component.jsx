import React, { useState } from "react";
import uuid from "react-uuid";
function Input({ setMovie, dark }) {
  const [title, setTitle] = useState("");
  const [img, setImage] = useState("");
  const [id, setId] = useState("");
  const [rate, setRate] = useState("");

  const inputChange = (e) => {
    e.preventDefault();
    if (title || img || id || rate) {
      const film = { title, img, id: uuid(), rate };
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
  return (
    <form
      className={!dark ? "input-form-dark" : "input-form"}
      onSubmit={inputChange}
    >
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder=" Title"
      />

      <input
        type="text"
        id="img"
        value={img}
        onChange={(e) => setImage(e.target.value)}
        placeholder=" Photo"
      />

      <input
        type="text"
        id="raiting"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder=" Raiting"
      />

      <button className="input-btn" type="submit" onClick={inputChange}>
        Add movie
      </button>
    </form>
  );
}

export default Input;
