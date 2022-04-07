import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FullList from "components/FullList";

describe("<FullList />", () => {
  test("should render correct container", () => {
    render(
      <BrowserRouter>
        <FullList />
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("fullList-wrapper");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct categories", () => {
    render(
      <BrowserRouter>
        <FullList />
      </BrowserRouter>
    );
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Cars")).toBeInTheDocument();
    expect(screen.getByText("Clothes")).toBeInTheDocument();
    expect(screen.getByText("Foods")).toBeInTheDocument();
  });

  test("should render correct active style", () => {
    render(
      <BrowserRouter>
        <FullList />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("All");
    expect(linkElement).toHaveStyle({ background: "#2b6cb0" });
  });

  test("should not render favorites at start", () => {
    render(
      <BrowserRouter>
        <FullList />
      </BrowserRouter>
    );
    const linkElement = screen.queryByText("Favorites");
    expect(linkElement).not.toBeInTheDocument();
  });
});
