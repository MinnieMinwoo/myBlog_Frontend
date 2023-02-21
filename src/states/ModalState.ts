import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

type ModalType = {
  isOpen: boolean;
  title?: string;
  content: string;
  closeCallBack?: () => any;
  isConfirm: boolean;
};

export const modalState = atom<ModalType>({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: "",
    closeCallBack: () => {},
    isConfirm: false,
  },
});

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const openModal = useCallback(
    (title: string, content: string, closeCallBack?: () => any, isConfirm?: boolean) => {
      setModalDataState({
        isOpen: true,
        title: title,
        content: content,
        closeCallBack: closeCallBack,
        isConfirm: isConfirm ?? false,
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
