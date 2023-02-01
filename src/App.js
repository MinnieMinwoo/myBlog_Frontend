import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { authService } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { loginData } from "./states/LoginState";

const App = () => {
    const [init, setInit] = useState(false);
    const setUserData = useSetRecoilState(loginData);

    useEffect(() => {
        onAuthStateChanged(authService, (user) => {
            if (user) {
                setUserData({
                    isLoggedIn: true,
                    accessToken: user.accessToken,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                });
            } else {
                setUserData({
                    isLoggedIn: false,
                });
            }
            setInit(true);
        });
    }, []);
    return <div className={`App`}>{init ? <AppRouter /> : <div>initializing...</div>}</div>;
};

export default App;
