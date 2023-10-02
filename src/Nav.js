import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      {dogs.map((dog) => (
        <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
      ))}
    </nav>
  );
}

export default Nav;
