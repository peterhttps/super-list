import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import List from "components/List";

describe("<List />", () => {
  test("should render correct container", () => {
    render(
      <BrowserRouter>
        <List isFavorites={false} />
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("list-wrapper");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct logo title", () => {
    render(
      <BrowserRouter>
        <List isFavorites />
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("list-favorites-wrapper");
    expect(linkElement).toBeInTheDocument();
  });
});
