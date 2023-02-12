import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./routes/Main";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import Write from "./routes/Write";
import Setting from "./routes/Setting";
import Edit from "./routes/Edit";
import PostDetail from "./components/Home/PostDetail";

import PostContainer from "./components/Home/PostContainer";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home/:userID" element={<Home />}>
          <Route path="/home/:userID" element={<PostContainer />} />
          <Route path="/home/:userID/:docID" element={<PostDetail />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
