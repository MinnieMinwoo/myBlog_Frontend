import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainSection from "./MainSection";
import * as Recoil from "recoil";
import * as Router from "react-router";
import userEvent from "@testing-library/user-event";

describe("Main section test", () => {
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  it("rendering test", () => {
    render(
      <MemoryRouter>
        <Recoil.RecoilRoot>
          <MainSection />
        </Recoil.RecoilRoot>
      </MemoryRouter>
    );

    expect(screen.getByText("Publish your stroy, your way")).toBeInTheDocument();
    expect(screen.getByText("Create a unique and beautiful blog.")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("navigate test on logout state", async () => {
    render(
      <MemoryRouter>
        <Recoil.RecoilRoot>
          <MainSection />
        </Recoil.RecoilRoot>
      </MemoryRouter>
    );

    const userData = {
      isLoggedIn: false,
    };
    const dummyFunction = jest.fn();
    jest.spyOn(Recoil, "useRecoilValue").mockReturnValue(userData);
    jest.spyOn(Router, "useNavigate").mockImplementation(dummyFunction);

    const button = screen.getByRole("button", { name: "Start" });
    userEvent.click(button);
    await Promise.resolve();
    expect(dummyFunction).toBeCalledTimes(1);
  });

  it("navigate test on login state", async () => {
    render(
      <MemoryRouter>
        <Recoil.RecoilRoot>
          <MainSection />
        </Recoil.RecoilRoot>
      </MemoryRouter>
    );

    const userData = {
      isLoggedIn: true,
      nickname: "test",
    };
    const dummyFunction = jest.fn();
    jest.spyOn(Recoil, "useRecoilValue").mockReturnValue(userData);
    jest.spyOn(Router, "useNavigate").mockImplementation(dummyFunction);

    const button = screen.getByRole("button");
    userEvent.click(button);
    await Promise.resolve();
    expect(dummyFunction).toBeCalledTimes(1);
  });
});
