import React from "react";

import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = dogs.filter((dog) => dog.name === name)[0];

  return (
    <>
      <div>
        <img src={`/${dog.src}.jpg`} width="200px" />
        <h1>{dog.name}</h1>
        <h2>{dog.age}</h2>
        <ul>
          {dog.facts.map((f) => (
            <li>{f}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DogDetails;
