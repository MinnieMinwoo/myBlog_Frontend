import { atom } from "recoil";

export const isInit = atom({
  key: "isInit",
  default: false,
});

export const isLoadingData = atom({
  key: "isLoadingData",
  default: false,
});
