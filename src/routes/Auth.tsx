import React, { useState } from "react";

import AuthWithEmail from "../components/Auth/AuthWithEmail";
import AuthWithSocialAccount from "../components/Auth/AuthWithSocialAccount";
import MetaTag from "../components/Share/MetaTag";

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [isEmail, setIsEmail] = useState(false);

  const toggleAccount = () => {
    setSignIn((prev) => !prev);
  };

  const toggleEmail = () => {
    setIsEmail(false);
  };

  return (
    <div className="Auth position-absolute top-50 start-50 translate-middle col-10 col-md-6 col-lg-4">
      <MetaTag title="myBlog" description="Login page" />
      <div className="vstack gap-3 ">
        <h1>MyBlog</h1>
        {isEmail ? null : <AuthWithSocialAccount signIn={signIn} setIsEmail={setIsEmail} />}
        {isEmail ? <AuthWithEmail signIn={signIn} /> : null}
        {isEmail ? null : (
          <button className="btn btn-primary col-8 offset-2 h-36px" onClick={toggleAccount}>
            {signIn ? "Create Account" : "Sign In"}
          </button>
        )}
        {isEmail ? (
          <button className="btn btn-secondary col-8 offset-2 h-36px" onClick={toggleEmail}>
            Back
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Auth;
