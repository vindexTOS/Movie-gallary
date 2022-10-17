import React from "react";
import { useState } from "react";
import "../../App.css";
export default function Popup({
  setDialog,
  dialog,
  title,
  id,
  dialogHandle,
  removeMovie,
}) {
  return (
    <div className="dialog" key={id}>
      <h3>
        Are you sure you want to delete:
        <h3
          style={{ color: "rgb(56, 55, 55)", fontFamily: "sans-serif" }}
        >{` ${title} ?`}</h3>
      </h3>

      <div className="btn-container-dialog">
        {" "}
        <button
          className="popup-btn-cancel"
          onClick={() => dialogHandle(false)}
        >
          Canel
        </button>
        <button className="popup-btn-yes" onClick={() => removeMovie(id)}>
          Yes
        </button>
      </div>
    </div>
  );
}
