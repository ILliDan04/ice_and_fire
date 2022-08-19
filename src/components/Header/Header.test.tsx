import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("should render title correctly", () => {
    render(
      <BrowserRouter>
        <Header title="Title" />
      </BrowserRouter>
    );
    const titleElement = screen.getByText("Title");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render arrow back", () => {
    render(
      <BrowserRouter>
        <Header title="Title" goesBack />
      </BrowserRouter>
    );
    const svgIcon = screen.getByTestId("arrow-back");
    expect(svgIcon).toBeInTheDocument();
  });

  it("should not render arrow back", () => {
    render(
      <BrowserRouter>
        <Header title="Title" />
      </BrowserRouter>
    );
    const svgIcon = screen.queryByTestId("arrow-back");
    expect(svgIcon).not.toBeInTheDocument();
  });
});
