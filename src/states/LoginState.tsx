import { atom } from "recoil";

export const loginData = atom<UserData>({
  key: "loginData",
  default: {
    isLoggedIn: false,
  },
});
