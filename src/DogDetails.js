import React from "react";

import { useParams } from "react-router-dom";

function DogDetails({ dogs, isLoaded }) {
  const { name } = useParams();

  const dog = dogs.filter((dog) => dog.name === name)[0];
  console.log(dog);

  return (
    <>
      {!isLoaded ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{dog.name}</h1>
          <h2>{dog.age}</h2>
          <ul>
            {dog.facts.map((f) => (
              <li>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default DogDetails;
