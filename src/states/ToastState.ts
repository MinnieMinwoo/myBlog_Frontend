import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

interface ToastType {
  isOpen: boolean;
  title: string;
  content: string;
  background: BootStrapColor;
}

export const toastState = atom<ToastType>({
  key: "toastState",
  default: {
    isOpen: false,
    title: "",
    content: "",
    background: "primary",
  },
});

export const useToast = () => {
  const [toastDataState, setToastDataState] = useRecoilState(toastState);
  const openToast = useCallback(
    (title: string, content: string, background?: BootStrapColor) => {
      setToastDataState({
        isOpen: true,
        title: title,
        content: content,
        background: background ?? "primary",
      });
    },
    [setToastDataState]
  );

  const closeToast = useCallback(() => {
    setToastDataState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, [setToastDataState]);

  return { toastDataState, openToast, closeToast };
};
