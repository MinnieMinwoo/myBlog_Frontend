import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SettingData from "./SettingData";
import userEvent from "@testing-library/user-event";

describe("Setting data module test", () => {
  afterEach(() => cleanup());

  it("Rendering test", () => {
    render(
      <MemoryRouter>
        <SettingData
          title="test title"
          description="test message"
          buttonMessage="test button"
          currentData="test data"
          onClick={() => {}}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("test title")).toBeInTheDocument();
    expect(screen.getByText("test message")).toBeInTheDocument();
    expect(screen.getByRole("button")).toEqual(screen.getByText("test button"));
    expect(screen.getByText("test data")).toBeInTheDocument();
  });

  it("Bootstrap property test", () => {
    render(
      <MemoryRouter>
        <SettingData
          title="test title"
          description="test message"
          buttonMessage="test button"
          onClick={() => {}}
          buttonColor="warning"
        />
      </MemoryRouter>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-warning");
  });

  it("Callback function test", () => {
    const dummyFunction = jest.fn();
    render(
      <MemoryRouter>
        <SettingData
          title="test title"
          description="test message"
          buttonMessage="test button"
          onClick={dummyFunction}
        />
      </MemoryRouter>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(dummyFunction).toBeCalledTimes(1);
  });
});
