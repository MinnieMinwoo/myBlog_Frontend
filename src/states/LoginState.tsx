import { atom, RecoilState } from "recoil";

export const loginData = atom({
    key: "loginData",
    default: {
        isLoggedIn: false,
        uid: null as string | null,
        email: null as string | null,
        nickname: null as string | null,
    },
});
