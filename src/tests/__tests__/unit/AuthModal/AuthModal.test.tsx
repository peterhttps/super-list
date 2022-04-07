import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthModal from "components/AuthModal";

describe("<AuthModal />", () => {
  test("should render correct container", () => {
    render(
      <BrowserRouter>
        <AuthModal openModal={jest.fn()} />
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("authModal-wrapper");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct buttons", () => {
    render(
      <BrowserRouter>
        <AuthModal openModal={jest.fn()} />
      </BrowserRouter>
    );

    expect(screen.getAllByText("Login")[0]).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  test("should render login section at start", () => {
    render(
      <BrowserRouter>
        <AuthModal openModal={jest.fn()} />
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("login-section-wrapper");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct register section", () => {
    render(
      <BrowserRouter>
        <AuthModal openModal={jest.fn()} />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Register");
    fireEvent.click(linkElement);
    expect(screen.getByTestId("register-section-wrapper")).toBeInTheDocument();
  });
});
