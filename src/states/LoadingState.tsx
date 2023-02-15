import { atom } from "recoil";

export const isAuthInit = atom({
  key: "isAuthInit",
  default: false,
});

export const isLoadingData = atom({
  key: "isLoadingData",
  default: false,
});
