import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer> Test", () => {
  it("rendering test", () => {
    render(<Footer />);

    expect(screen.getByText("2023 My own blog project")).toBeInTheDocument();
    expect(screen.getByText("© Snowcat")).toBeInTheDocument();
  });
});
