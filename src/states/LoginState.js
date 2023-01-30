import { atom } from "recoil";

export const loginData = atom({
    key: "loginData",
    default: {
        isLoggedIn: false,
    },
});
