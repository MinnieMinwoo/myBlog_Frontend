import React, { useRef } from "react";
import { MemoryRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { RecoilRoot } from "recoil";

describe("Loading component test", () => {
  beforeEach(() => {
    const intersectionObserverMock = () => ({
      observe: () => null,
      unobserve: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("Rendering test when not last post", () => {
    const dummyRef = "";
    render(
      <RecoilRoot>
        <MemoryRouter>
          <Pagination isLastPost={false} postIndex={dummyRef as any} callBack={async () => {}} />
        </MemoryRouter>
      </RecoilRoot>
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("Rendering test when last post", () => {
    const dummyRef = "";
    render(
      <RecoilRoot>
        <MemoryRouter>
          <Pagination isLastPost={true} postIndex={dummyRef as any} callBack={async () => {}} />
        </MemoryRouter>
      </RecoilRoot>
    );
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
