import { render } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";
selectDog = jest.fn();

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: "whiskey",
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Duke",
    age: 3,
    src: "duke",
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
];

describe("Nav", function () {
  test("renders properly", function () {
    const { getByText } = render(
      <MemoryRouter>
        <Nav dogs={dogs} selectDog={selectDog} />
      </MemoryRouter>
    );

    const dog1 = getByText("Whiskey");
    expect(dog1).toBeInTheDocument();
    const dog2 = getByText("Duke");
    expect(dog2).toBeInTheDocument();
  });
});
