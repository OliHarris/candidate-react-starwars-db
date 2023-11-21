import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../components/App";

// describe block to organise test
describe("initial default tests", () => {
  afterEach(cleanup);

  test("Renders the main page", () => {
    render(<App />);
    const buttonElement = screen.getByText(/Enter Site/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
