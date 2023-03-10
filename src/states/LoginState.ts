import { atom } from "recoil";

export const loginData = atom<UserData>({
  key: "loginData",
  default: {
    isLoggedIn: false,
  },
});

export const test = atom({ key: "test", default: 12 });
