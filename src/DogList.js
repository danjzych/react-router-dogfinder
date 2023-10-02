import React, { useState } from "react";
import { getDogData } from "./utils/dogData";

function DogList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogs, setDogs] = useState([]);

  async function getData() {
    const data = await getDogData();
    setDogs(data);
    setIsLoaded(true);
  }

  if (!isLoaded) {
    getData();
  }

  return <div>{!isLoaded ?? <h1>dogs are loading....</h1>}</div>;
}

export default DogList;
