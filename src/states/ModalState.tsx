import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

type ModalType = {
  isOpen: boolean;
  title?: string;
  content: JSX.Element | string;
  callBack?: () => any;
};

export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
    callBack: () => {},
  },
});

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const openModal = useCallback(
    (title: string, content: JSX.Element | string, callback?: () => any) =>
      setModalDataState({ isOpen: true, title: title, content: content, callBack: callback }),
    [setModalDataState]
  );

  const closeModal = useCallback(() => {
    setModalDataState((prev) => {
      if (modalDataState.callBack) modalDataState.callBack();
      return { ...prev, isOpen: false };
    });
  }, [setModalDataState]);

  return { modalDataState, openModal, closeModal };
};
