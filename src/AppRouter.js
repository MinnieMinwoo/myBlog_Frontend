import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./routes/Auth.js";
import Home from "./routes/Home.js";
import Write from "./routes/Write.js";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
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
