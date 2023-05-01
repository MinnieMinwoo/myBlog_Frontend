import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import ProfileImageEdit from "./ProfileImageEdit";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";

describe("ProfileImageEdit component test", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("Rendering test", () => {
    render(
      <RecoilRoot>
        <ProfileImageEdit />
      </RecoilRoot>
    );
    expect(screen.getByAltText("Profile")).toBeInTheDocument();
  });

  it("Upload button click test", () => {
    const mockClick = jest.fn();
    HTMLInputElement.prototype.click = mockClick;

    render(
      <RecoilRoot>
        <ProfileImageEdit />
      </RecoilRoot>
    );

    const uploadButton = screen.getByText("Upload Image");
    userEvent.click(uploadButton);

    expect(mockClick).toHaveBeenCalled();
  });
});
