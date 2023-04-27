import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Loading = lazy(() => import("./components/Share/Loading"));
const Main = lazy(() => import("./routes/Main"));
const Auth = lazy(() => import("./routes/Auth"));
const SignUp = lazy(() => import("./routes/SignUp"));
const Home = lazy(() => import("./routes/Home"));
const Write = lazy(() => import("./routes/Write"));
const Setting = lazy(() => import("./routes/Setting"));
const Search = lazy(() => import("./routes/Search"));
const NotFound = lazy(() => import("./routes/NotFound"));

const PostContainer = lazy(() => import("./components/Home/PostContainer"));
const PostCategoryList = lazy(() => import("./components/Home/PostCategoryList"));
const PostDetail = lazy(() => import("./components/Home/PostDetail"));
const PostCategoryDetail = lazy(() => import("./components/Home/PostCategoryDetail"));
const About = lazy(() => import("./components/Home/About"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home/:userID" element={<Home />}>
            <Route path="/home/:userID" element={<PostContainer />} />
            <Route path="/home/:userID/category" element={<PostCategoryList />} />
            <Route path="/home/:userID/category/:mainName/:subName" element={<PostCategoryDetail />} />
            <Route path="/home/:userID/about" element={<About />} />
            <Route path="/home/:userID/:docID" element={<PostDetail />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/create" element={<SignUp />} />
          <Route path="/write/*" element={<Write />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/Search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
