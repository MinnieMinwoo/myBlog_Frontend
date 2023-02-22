import React from "react";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

type ModalType = {
  isOpen: boolean;
  title?: string;
  content: string | JSX.Element;
  closeCallBack?: () => any;
  isConfirm: boolean;
  buttonColor?: BootStrapColor;
};

export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
    closeCallBack: () => {},
    isConfirm: false,
    buttonColor: "primary",
  },
});

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const openModal = useCallback(
    (
      title: string,
      content: string | JSX.Element,
      closeCallBack?: () => any,
      isConfirm?: boolean,
      buttonColor?: BootStrapColor
    ) => {
      let contentElement: JSX.Element;
      if (typeof content === "string") {
        contentElement = <p>{content}</p>;
      } else {
        contentElement = content;
      }
      setModalDataState({
        isOpen: true,
        title: title,
        content: contentElement,
        closeCallBack: closeCallBack,
        isConfirm: isConfirm ?? false,
        buttonColor: buttonColor ?? "primary",
      });
    },
    [setModalDataState]
  );

  const closeModal = useCallback(() => {
    setModalDataState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, [setModalDataState]);

  const closeModalWithCallback = useCallback(() => {
    if (modalDataState.closeCallBack) modalDataState.closeCallBack();
    setModalDataState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, [modalDataState, setModalDataState]);

  return { modalDataState, openModal, closeModal, closeModalWithCallback };
};
