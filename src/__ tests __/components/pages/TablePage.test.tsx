import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TablePage from "../../../components/pages/TablePage";
import peopleLukePage1 from "../../../api/__ mocks __/peopleLukePage1.json";
import starshipsMilleniumPage1 from "../../../api/__ mocks __/starshipsMilleniumPage1.json";
import peopleOliverPage1 from "../../../api/__ mocks __/peopleOliverPage1.json";
import peoplePage1 from "../../../api/__ mocks __/peoplePage1.json";

import { MemoryRouter } from "react-router-dom";
import axios from "axios";

// describe block to organise test
describe("initial default tests", () => {
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <TablePage type={""} />
      </MemoryRouter>
    );
  });
});

describe("table-page-tests", () => {
  afterEach(cleanup);

  test("Load 'people' page with 'luke' query string", async () => {
    // our desired output
    const peopleData = peopleLukePage1;
    const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce(peopleData);

    render(
      <MemoryRouter>
        <TablePage type={"people"} />
      </MemoryRouter>
    );

    const receivedRows = await screen.findAllByRole("row");
    // one row plus header
    expect(receivedRows.length === 2).toBeTruthy();

    getSpy.mockRestore();
  });

  test("Load 'starships' page with 'millennium' query string", async () => {
    // our desired output
    const starshipsData = starshipsMilleniumPage1;
    const getSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce(starshipsData);

    render(
      <MemoryRouter>
        <TablePage type={"starships"} />
      </MemoryRouter>
    );

    const receivedRows = await screen.findAllByRole("row");
    // one row plus header
    expect(receivedRows.length === 2).toBeTruthy();

    getSpy.mockRestore();
  });

  test("Load 'people' page with 'oliver' query string", async () => {
    // our desired output
    const peopleData = peopleOliverPage1;
    const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce(peopleData);

    render(
      <MemoryRouter>
        <TablePage type={"people"} />
      </MemoryRouter>
    );

    const noDataMessage = await screen.findByText("No data");
    expect(noDataMessage).toBeInTheDocument();

    getSpy.mockRestore();
  });

  test("Load 'people' page with no query string; user clicks pagination button", async () => {
    // our desired output
    const peopleData = peoplePage1;
    const getSpy = jest.spyOn(axios, "get").mockResolvedValueOnce(peopleData);

    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <TablePage type={"people"} />
      </MemoryRouter>
    );

    const nextPageButton = await screen.findByRole("button", {
      name: "Go to next page",
    });
    await user.click(nextPageButton);
    expect(nextPageButton).toBeDisabled;

    getSpy.mockRestore();
  });
});
