import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Nav from "./Nav";
import { useState } from "react";
import { getDogData } from "./utils/dogData";

function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getData() {
    const data = await getDogData();
    setDogs(data);
    setIsLoaded(true);
  }

  if (!isLoaded) {
    getData();

    return (
      <h1>Dogs are Loading...</h1>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <RouteList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
