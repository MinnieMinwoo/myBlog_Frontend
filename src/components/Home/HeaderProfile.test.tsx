/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import HomeProfile from "./HeaderProfile";
import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";
import * as authSetting from "../../logic/authSetting";

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
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });
  it("rendering test", () => {
    initialize();
    expect(screen.getByAltText("Profile")).toBeInTheDocument();
  });
  it("button click test", () => {
    initialize();
    const button = screen.getByAltText("Profile");
    fireEvent.click(button);
    expect(screen.getByText("Post")).toBeInTheDocument();
    expect(screen.getByText("Setting")).toBeInTheDocument();
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
  });
  it("logout test", () => {
    initialize();
    const signOutUser = jest.spyOn(authSetting, "signOutUser").mockImplementation(() => {
      return Promise.resolve();
    });
    const button = screen.getByAltText("Profile");
    fireEvent.click(button);
    const logoutButton = screen.getByText("Sign Out");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    fireEvent.click(logoutButton);
    expect(signOutUser).toHaveBeenCalledTimes(1);
  });
});
