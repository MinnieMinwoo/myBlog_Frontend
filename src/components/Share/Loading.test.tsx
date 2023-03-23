import React from "react";
import { MemoryRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component test", () => {
  afterEach(() => {
    cleanup();
  });

  it("Rendering test", () => {
    render(
      <MemoryRouter>
        <Loading />
      </MemoryRouter>
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
