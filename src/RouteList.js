import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RouteList({ dogs, selectDog, currentDog }) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} selectDog={selectDog} />} path="/" />
      <Route element={<DogDetails dog={currentDog} />} path="/dogs/:name" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RouteList;
