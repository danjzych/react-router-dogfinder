import { render } from "@testing-library/react";
import RouteList from "./RouteList";
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

const currentDog = {
  name: "Whiskey",
  age: 5,
  src: "whiskey",
  facts: [
    "Whiskey loves eating popcorn.",
    "Whiskey is a terrible guard dog.",
    "Whiskey wants to cuddle with you!",
  ],
};

describe("routeList", function () {
  test("renders dog details Page", function () {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/dogs/Whiskey"]}>
        <RouteList dogs={dogs} currentDog={currentDog} selectDog={selectDog} />
      </MemoryRouter>
    );

    const whiskeyFact = getByText("Whiskey loves eating popcorn.");
    expect(whiskeyFact).toBeInTheDocument();
  });
});
