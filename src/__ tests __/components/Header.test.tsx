import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../components/Header";

import { MemoryRouter } from "react-router-dom";

// describe block to organise test
describe("initial default tests", () => {
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Header type={""} dataLoaded={false} />
      </MemoryRouter>
    );
  });
});

describe("header-tests", () => {
  afterEach(cleanup);
  
  test("Renders the header for 'people' page", () => {
    render(
      <MemoryRouter>
        <Header type={"people"} dataLoaded={true} />
      </MemoryRouter>
    );
    const peopleLinkElement = screen.getByRole("link", { name: "People" });
    expect(peopleLinkElement).toHaveStyle(
      "font-weight: bold; pointer-events: none;"
    );
    const starshipsLinkElement = screen.getByRole("link", {
      name: "Starships",
    });
    expect(starshipsLinkElement).toHaveStyle(
      "font-weight: normal; pointer-events: auto;"
    );
  });

  test("Renders the header for 'starships' page", () => {
    render(
      <MemoryRouter>
        <Header type={"starships"} dataLoaded={true} />
      </MemoryRouter>
    );
    const peopleLinkElement = screen.getByRole("link", { name: "People" });
    expect(peopleLinkElement).toHaveStyle(
      "font-weight: normal; pointer-events: auto;"
    );
    const starshipsLinkElement = screen.getByRole("link", {
      name: "Starships",
    });
    expect(starshipsLinkElement).toHaveStyle(
      "font-weight: bold; pointer-events: none;"
    );
  });
});
