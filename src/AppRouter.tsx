import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./routes/Main";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import Read from "./routes/Read";
import Write from "./routes/Write";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home/:userID" element={<Home />} />
        <Route path="/home/:userID/:docID" element={<Read />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
