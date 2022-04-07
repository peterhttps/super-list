import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardList from "components/CardList";
import cardListMock from "tests/mocks/CardListMock";

describe("<CardList />", () => {
  test("should render correct container", () => {
    render(
      <BrowserRouter>
        <CardList item={cardListMock} />
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("card-wrapper");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct title", () => {
    render(
      <BrowserRouter>
        <CardList item={cardListMock} />
      </BrowserRouter>
    );
    const linkElement = screen.queryByText("Item test");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render correct photo", () => {
    render(
      <BrowserRouter>
        <CardList item={cardListMock} />
      </BrowserRouter>
    );
    const linkElement = screen.queryByAltText("Item test");
    expect(linkElement).toBeInTheDocument();
  });
});
