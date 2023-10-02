import React, { useState } from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => (
        <div>
          <div>
            <img src={`/${dog.src}.jpg`} width="200px" />
          </div>
          <Link to={`/dogs/${dog.name}`}> {dog.name} </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
