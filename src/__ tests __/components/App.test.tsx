import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../components/App";

test("Renders the main page", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Enter Site/i);
  expect(buttonElement).toBeInTheDocument();
});
