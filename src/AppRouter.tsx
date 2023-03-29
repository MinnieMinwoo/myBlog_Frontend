import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Loading from "./components/Share/Loading";
const Main = lazy(() => import("./routes/Main"));
const Auth = lazy(() => import("./routes/Auth"));
const Home = lazy(() => import("./routes/Home"));
const Write = lazy(() => import("./routes/Write"));
const Setting = lazy(() => import("./routes/Setting"));
const PostContainer = lazy(() => import("./components/Home/PostContainer"));
const PostCategoryList = lazy(() => import("./components/Home/PostCategoryList"));
const PostDetail = lazy(() => import("./components/Home/PostDetail"));
const PostCategoryDetail = lazy(() => import("./components/Home/PostCategoryDetail"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home/:userID" element={<Home />}>
            <Route path="/home/:userID" element={<PostContainer />} />
            <Route path="/home/:userID/category" element={<PostCategoryList />} />
            <Route
              path="/home/:userID/category/:mainName/:subName"
              element={<PostCategoryDetail />}
            />
            <Route path="/home/:userID/:docID" element={<PostDetail />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/write/*" element={<Write />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
