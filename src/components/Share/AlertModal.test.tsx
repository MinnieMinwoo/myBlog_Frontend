import React from "react";
import { screen, render, cleanup, waitForElementToBeRemoved } from "@testing-library/react";
import { useModal } from "../../states/ModalState";
import AlertModal from "./AlertModal";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";

interface Props {
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
}: Props) => {
  const { openModal } = useModal();

  const onOpen = () => {
    openModal(title, content, closeCallBack, isConfirm, buttonColor);
  };

  return (
    <>
      <AlertModal />
      <button onClick={onOpen}>openModal</button>
    </>
  );
};

describe("Alert modal test", () => {
  //open, close modal logic
  const modalOpen = () => {
    const openButton = screen.getByRole("button", { name: "openModal" });
    userEvent.click(openButton);
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

    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Test")).not.toBeInTheDocument();

    modalOpen();

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Modal Test")).toBeInTheDocument();
    expect(screen.getByText("Close").classList.contains("btn-secondary")).toBe(true);
  });

  it("Alert modal callback test", async () => {
    const callBackFunc = jest.fn();

    render(
      <RecoilRoot>
        <DummyComponent title="Hello" content="Modal Test" closeCallBack={callBackFunc} />
      </RecoilRoot>
    );
    modalOpen();

    const closeButton = screen.getByText("Close");
    userEvent.click(closeButton);
    expect(callBackFunc).toBeCalledTimes(1);
  });

  it("Confirm modal input test", () => {
    const DummyForm = (
      <form>
        <label>
          Input test
          <input placeholder="test" />
        </label>
      </form>
    );
    render(
      <RecoilRoot>
        <DummyComponent title="Hello" content={DummyForm} isConfirm={true} />
      </RecoilRoot>
    );
    modalOpen();

    expect(screen.getByText("Confirm").classList.contains("btn-primary")).toBe(true);
    expect(screen.getByLabelText("Input test")).toBeInTheDocument();
  });

  it("Confirm modal button color test", () => {
    render(
      <RecoilRoot>
        <DummyComponent title="Hello" content="Modal Test" isConfirm={true} buttonColor="warning" />
      </RecoilRoot>
    );
    modalOpen();

    expect(screen.getByText("Confirm").classList.contains("btn-warning")).toBe(true);
  });
});
