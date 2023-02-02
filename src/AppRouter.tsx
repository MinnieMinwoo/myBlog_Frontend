import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Auth from "./routes/Auth.js";
import Home from "./routes/Home";
import Write from "./routes/Write.js";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home/:userID" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/write" element={<Write />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
