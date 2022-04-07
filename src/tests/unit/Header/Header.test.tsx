import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "components/Header";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
  test("should render correct container", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("header-wrapper");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct logo title", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Super List");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct input field", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("header-input");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct auth button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Login / Register");
    expect(linkElement).toBeInTheDocument();
  });
});
