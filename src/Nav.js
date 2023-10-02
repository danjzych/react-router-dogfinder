import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs, selectDog }) {
  return (
    <nav className="Nav">
      <NavLink to="/">Home</NavLink>
      {dogs.map((dog) => (
        <NavLink to={`/dogs/${dog.name}`} onClick={() => selectDog(dog)}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
