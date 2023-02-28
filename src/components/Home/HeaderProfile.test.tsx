/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HomeProfile from "./HeaderProfile";
import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const onLogout = jest.fn();

const initialize = () => {
  return render(
    <MemoryRouter>
      <RecoilRoot>
        <HomeProfile />
      </RecoilRoot>
    </MemoryRouter>
  );
};

describe("Header Profile Test", () => {
  it("rendering test", () => {
    initialize();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("button click test", () => {
    initialize();
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Post")).toBeInTheDocument();
    expect(screen.getByText("Setting")).toBeInTheDocument();
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
  });
});
