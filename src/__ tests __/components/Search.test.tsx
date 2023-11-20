import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Search from "../../components/Search";

// describe block to organise test
describe("initial default tests", () => {
  test("renders without crashing", () => {
    render(
      <Search
        searchText={""}
        setSearchText={() => {}}
        setDataPageValue={() => {}}
        loadData={() => {}}
        dataLoaded={false}
      />
    );
  });
});

describe("search-tests", () => {
  afterEach(cleanup);

  test("Type into 'Search' textbox after data is loaded", async () => {
    const user = userEvent.setup();
    render(
      <Search
        searchText={""}
        setSearchText={() => {}}
        setDataPageValue={() => {}}
        loadData={() => {}}
        dataLoaded={true}
      />
    );
    const textboxElement = screen.getByRole("textbox", { name: "Search" });
    await user.type(textboxElement, "luke");
    expect(textboxElement).toHaveFocus();
  });

  test("Click 'Search' button after data is loaded", async () => {
    const user = userEvent.setup();
    render(
      <Search
        searchText={""}
        setSearchText={() => {}}
        setDataPageValue={() => {}}
        loadData={() => {}}
        dataLoaded={true}
      />
    );
    const buttonElement = screen.getByRole("button", { name: "Search" });
    await user.click(buttonElement);
    expect(buttonElement).toBeDisabled;
  });
});
