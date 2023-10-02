import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RouteList({ dogs }) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/" />
      <Route element={<DogDetails dogs={dogs} />} path="/dogs/:name" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RouteList;
