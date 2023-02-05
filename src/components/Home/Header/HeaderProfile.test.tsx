/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HomeProfile from "./HeaderProfile";
import { MemoryRouter } from "react-router-dom";

const onLogout = jest.fn();

const initialize = () => {
  return render(
    <MemoryRouter>
      <HomeProfile />
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
    expect(screen.getByText("글쓰기")).toBeInTheDocument();
    expect(screen.getByText("설정")).toBeInTheDocument();
    expect(screen.getByText("로그아웃")).toBeInTheDocument();
  });
});
