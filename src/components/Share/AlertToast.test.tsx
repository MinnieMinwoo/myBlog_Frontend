import React from "react";
import { screen, render, cleanup, waitForElementToBeRemoved, act } from "@testing-library/react";

import AlertToast from "./AlertToast";
import { useToast } from "../../states/ToastState";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";

interface Props {
  title: string;
  content: string;
  background?: BootStrapColor;
}

const DummyComponent = ({ title, content, background }: Props) => {
  const { openToast } = useToast();
  const onClick = () => {
    openToast(title, content, background);
  };

  return (
    <>
      <AlertToast />
      <button onClick={onClick}>toast open</button>
    </>
  );
};

describe("Toast test", () => {
  const toastOpen = () => {
    const button = screen.getByText("toast open");
    userEvent.click(button);
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    cleanup();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("Toast open test", async () => {
    render(
      <RecoilRoot>
        <DummyComponent title="Hello" content="Toast test" />
      </RecoilRoot>
    );

    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
    expect(screen.queryByText("Toast test")).not.toBeInTheDocument();
    toastOpen();
    await Promise.resolve();
    const Title = screen.getByText("Hello");
    expect(screen.getByText("Toast test")).toBeInTheDocument();
    expect(Title).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    expect(Title).not.toBeInTheDocument();
  });
});
