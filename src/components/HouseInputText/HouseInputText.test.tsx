import React from "react";
import { render, screen } from "@testing-library/react";
import HouseInputText from "./HouseInputText";

describe("HouseInputText", () => {
  it("should be rendered correctly", () => {
    render(<HouseInputText label="Label" value="Value" />);

    const labelElem = screen.getByText("Label");
    const valueElem = screen.getByDisplayValue("Value");
    expect(labelElem).toBeInTheDocument();
    expect(valueElem).toBeInTheDocument();
  });
});
