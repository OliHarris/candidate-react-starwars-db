import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "../../../components/pages/Login";

import { MemoryRouter } from "react-router-dom";

// describe block to organise test
describe("initial default tests", () => {
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });
});

describe("login-page-tests", () => {
  afterEach(cleanup);

  test("Type into 'Username' textbox", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const usernameTextboxElement = screen.getByRole("textbox", {
      name: "Username",
    });
    await user.type(usernameTextboxElement, "oli");
    expect(usernameTextboxElement).toHaveValue("oli");
  });

  test("Type into 'Password' textbox", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const passwordTextboxElement = screen.getByRole("textbox", {
      name: "Password",
    });
    await user.type(passwordTextboxElement, "pass");
    expect(passwordTextboxElement).toHaveValue("pass");
  });

  test("Type into both 'Username' and 'Password' textbox; check 'Enter Site' button status", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const buttonElement = screen.getByRole("button", {
      name: "Enter Site",
    });
    expect(buttonElement).toBeDisabled;

    const usernameTextboxElement = screen.getByRole("textbox", {
      name: "Username",
    });
    await user.type(usernameTextboxElement, "oli");

    const passwordTextboxElement = screen.getByRole("textbox", {
      name: "Password",
    });
    await user.type(passwordTextboxElement, "pass");

    await waitFor(() => {
      expect(buttonElement).not.toBeDisabled;
    });
  });

  test("Type into then clear both 'Username' and 'Password' textbox; check 'Enter Site' button status", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const buttonElement = screen.getByRole("button", {
      name: "Enter Site",
    });
    expect(buttonElement).toBeDisabled;

    const usernameTextboxElement = screen.getByRole("textbox", {
      name: "Username",
    });
    await user.type(usernameTextboxElement, "oli");
    await user.clear(usernameTextboxElement);

    const passwordTextboxElement = screen.getByRole("textbox", {
      name: "Password",
    });
    await user.type(passwordTextboxElement, "pass");
    await user.clear(passwordTextboxElement);

    await waitFor(() => {
      expect(buttonElement).toBeDisabled;
    });
  });
});
