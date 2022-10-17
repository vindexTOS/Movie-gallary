import { useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa";

import "../../App.css";
import Input from "./input.component";

function Navbar({ search, setSearch, setMovie, movie, setDark, dark }) {
  const [btn, setBtn] = useState(false);

  /* Inputs for addition */

  return (
    <div className="nav-wrappe">
      <nav className={!dark ? "nav-bar-dark" : "nav-bar"}>
        <div>
          <input
            className="search-bar"
            placeholder="  Search..."
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>{" "}
        <button className="moon-icon" onClick={() => setDark(!dark)}>
          <FaMoon className={!dark ? "dark-icon-light" : "dark-icon"} />{" "}
        </button>
        <button
          className={!dark ? "bar-icon-dark" : "bar-icon"}
          onClick={() => setBtn(!btn)}
        >
          {" "}
          <FaBars className="icon" />{" "}
        </button>
        {btn ? <Input movie={movie} setMovie={setMovie} dark={dark} /> : null}
      </nav>
    </div>
  );
}
export default Navbar;
