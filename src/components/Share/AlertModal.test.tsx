import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { useModal } from "../../states/ModalState";
import AlertModal from "./AlertModal";
import { RecoilRoot } from "recoil";

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
  beforeEach(() => {
    window.location.reload();
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
});
