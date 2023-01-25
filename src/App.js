import { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { authService } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        onAuthStateChanged(authService, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    });
    return (
        <div className={`App`}>
            <AppRouter isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default App;
