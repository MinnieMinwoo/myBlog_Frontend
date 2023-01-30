import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./routes/Auth.js";
import Home from "./routes/Home.js";
import Write from "./routes/Write.js";

import { loginData } from "./states/LoginState";
import { useRecoilValue } from "recoil";

const AppRouter = () => {
    const userData = useRecoilValue(loginData);
    return (
        <Router>
            <Routes>
                {userData.isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Auth />} />
                    </>
                )}
                <Route path="/write" element={<Write />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
