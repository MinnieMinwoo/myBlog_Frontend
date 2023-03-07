import React from "react";
import { screen, render, fireEvent, cleanup, prettyDOM } from "@testing-library/react";
import { useModal } from "../../states/ModalState";
import AlertModal from "./AlertModal";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

interface props {
  title: string;
  content: string | JSX.Element;
  closeCallBack?: () => void | Promise<void>;
  isConfirm?: boolean;
  buttonColor?: BootStrapColor;
}

const DummyComponent = ({
  title,
  content,
  closeCallBack = () => {},
  isConfirm = false,
  buttonColor = "primary",
}: props) => {
  const { openModal, closeModal } = useModal();

  const onOpen = () => {
    openModal(title, content, closeCallBack, isConfirm, buttonColor);
  };

  const onClose = () => {
    closeModal();
  };

  return (
    <>
      <AlertModal />
      <button onClick={onOpen}>openModal</button>
      <button onClick={onClose}>closeModal</button>
    </>
  );
};

describe("Alert modal test", () => {
  //open, close modal logic
  const modalOpen = () => {
    const openButton = screen.getByRole("button", { name: "openModal" });
    fireEvent.click(openButton);
  };

  const modalClose = () => {
    const closeButton = screen.getByRole("button", { name: "closeModal" });
    fireEvent.click(closeButton);
  };

  // reset modal
  afterEach(() => {
    cleanup();
  });

  it("Alert modal open test", () => {
    render(
      <RecoilRoot>
        <DummyComponent title="Hello" content="Modal Test" />
      </RecoilRoot>
    );
    modalOpen();
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Modal Test")).toBeInTheDocument();
    modalClose();
  });

  //on testing
  it("Alert modal close test", async () => {
    render(
      <RecoilRoot>
        <DummyComponent title="Hello" content="Modal Test" />
      </RecoilRoot>
    );
    modalOpen();
    const topButton = screen.getByText("Close");
    console.log(prettyDOM(topButton));
    expect(topButton).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      userEvent.click(topButton);
    });
    modalClose();
    expect(screen.getByText("Hello")).not.toBeVisible();
    expect(screen.queryByText("Modal Test")).toBeNull();
  });
});
