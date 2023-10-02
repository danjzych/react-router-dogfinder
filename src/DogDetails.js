import React from "react";

import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();

  return (
    <>
      <p>{name}</p>
    </>
  )
}

export default DogDetails;
