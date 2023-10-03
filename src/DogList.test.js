import { render } from "@testing-library/react";
import DogList from "./DogList";
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

const dogs = [
  {
  "name": "Whiskey",
  "age": 5,
  "src": "whiskey",
  "facts": [
    "Whiskey loves eating popcorn.",
    "Whiskey is a terrible guard dog.",
    "Whiskey wants to cuddle with you!"
  ]
},
{
  "name": "Duke",
  "age": 3,
  "src": "duke",
  "facts": [
    "Duke believes that ball is life.",
    "Duke likes snow.",
    "Duke enjoys pawing other dogs."
  ]
}];

describe("DogList", function () {

  test("renders properly", function () {
    const { debug, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <DogList dogs={dogs} selectDog={selectDog} />
      </MemoryRouter>
    );

    const dog1 = getByText("Whiskey");
    const dog2 = getByText("Duke");
    expect(dog1).toBeInTheDocument();
    expect(dog2).toBeInTheDocument();
  });
});