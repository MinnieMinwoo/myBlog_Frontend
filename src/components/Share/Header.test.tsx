import React from "react";
import * as router from "react-router";
import { MemoryRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import AlertModal from "./AlertModal";

describe("Header component test", () => {
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  it("Rendering test", () => {
    render(
      <MemoryRouter>
        <RecoilRoot>
          <Header title="Test" />
        </RecoilRoot>
      </MemoryRouter>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
    expect(screen.queryByText("Category")).not.toBeInTheDocument();
    expect(screen.queryByText("Tag")).not.toBeInTheDocument();
    expect(screen.queryByText("About")).not.toBeInTheDocument();
  });

  it("Navbar show test", () => {
    render(
      <MemoryRouter>
        <RecoilRoot>
          <Header userName="User" />
        </RecoilRoot>
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Tag")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("outlet test", () => {
    const TestButton = <button>Test</button>;
    render(
      <MemoryRouter>
        <RecoilRoot>
          <Header outlet={TestButton} />
        </RecoilRoot>
      </MemoryRouter>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Navigate function test", () => {
    const navigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(
      <MemoryRouter>
        <RecoilRoot>
          <Header />
        </RecoilRoot>
      </MemoryRouter>
    );
    const homeImage = screen.getByRole("img");
    userEvent.click(homeImage);
    expect(navigate).toBeCalledTimes(1);
  });

  it("Warning modal test", async () => {
    const navigate = jest.fn();
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    render(
      <MemoryRouter>
        <RecoilRoot>
          <AlertModal />
          <Header isWarningAlert={true} />
        </RecoilRoot>
      </MemoryRouter>
    );
    const homeImage = screen.getByRole("img");
    userEvent.click(homeImage);
    expect(navigate).toBeCalledTimes(0);
    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    userEvent.click(confirmButton);
    expect(navigate).toBeCalledTimes(1);
  });
});
