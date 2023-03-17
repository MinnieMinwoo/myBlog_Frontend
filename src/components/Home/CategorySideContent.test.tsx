import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import CategorySideContent from "./CategorySideContent";
import { MemoryRouter } from "react-router-dom";

describe("Category content box test", () => {
  afterEach(() => {
    cleanup();
  });
  const data = {
    mainField: "Test Data",
    subField: ["data1", "data2", "data3", "data4", "data5"],
  };
  it("Rendering test", () => {
    render(
      <MemoryRouter>
        <CategorySideContent data={data} />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Data")).toBeInTheDocument();
    expect(screen.getByText("data1")).toBeInTheDocument();
    expect(screen.getByText("data2")).toBeInTheDocument();
    expect(screen.getByText("data3")).toBeInTheDocument();
    expect(screen.getByText("data4")).toBeInTheDocument();
  });
});
