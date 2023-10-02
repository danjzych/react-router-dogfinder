import React, { useState } from "react";
import { Link } from "react-router-dom";

function DogList({ dogs, isLoaded }) {
  return (
    <div>
      {!isLoaded ? (
        <h1>dogs are loading....</h1>
      ) : (
        dogs.map((dog) => (
          <div>
            <img src={require(`../public/${dog.src}.jpg`)} width="200px" />
            <Link to={`/dogs/${dog.name}`}> {dog.name} </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default DogList;
