import { render } from "@testing-library/react";
import DogDetails from "./DogDetails";
import { MemoryRouter } from "react-router-dom";

selectDog = jest.fn();

const dog = {
  "name": "Whiskey",
  "age": 5,
  "src": "whiskey",
  "facts": [
    "Whiskey loves eating popcorn.",
    "Whiskey is a terrible guard dog.",
    "Whiskey wants to cuddle with you!"
  ]
};

describe("DogDetails", function () {
  test("renders the individual dog", function () {
    const { debug, getByText } = render(
      <MemoryRouter>
        <DogDetails dog={dog} />
      </MemoryRouter>
    )

    const dogName = getByText("Whiskey");
    const fact = getByText("Whiskey loves eating popcorn.");
    expect(dogName).toBeInTheDocument();
    expect(fact).toBeInTheDocument();
  });
})