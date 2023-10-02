import React, { useState } from "react";
import { Link } from "react-router-dom";

function DogList({ dogs, isLoaded }) {

  //FIXME: image is still broken
  return (
  <div>
    {!isLoaded
      ? <h1>dogs are loading....</h1>
      : dogs.map(dog => (
        <div>
          <img src={`../public/${dog.src}.jpg`} />
          <Link to={`/dogs/${dog.name}`}> {dog.name} </Link>
        </div>
      ))}
    </div>
  );
}

export default DogList;
