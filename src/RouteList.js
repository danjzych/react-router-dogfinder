import { Routes, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RouteList({ dogs, isLoaded }) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} isLoaded={isLoaded} />} path="/" />
      <Route element={<DogDetails />} path="/dogs/:name" />
    </Routes>
  );
}

export default RouteList;
