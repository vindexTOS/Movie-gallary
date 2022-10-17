import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Popup from "../popup/popup.component";
function SingleComponent({
  setDialog,
  dialog,
  movie,
  removeMovie,
  dark,
  dialogHandle,
  img,
  title,
  rate,
  id,
  films,
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{title}</h1>
        <img src={img} />
        <h1>HELLO </h1>
      </div>
    </>
  );
}

export default SingleComponent;
