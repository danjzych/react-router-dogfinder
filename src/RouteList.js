import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RouteList({ dogs, isLoaded }) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} isLoaded={isLoaded} />} path="/" />
      <Route
        element={<DogDetails dogs={dogs} isLoaded={isLoaded} />}
        path="/dogs/:name"
      />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RouteList;
