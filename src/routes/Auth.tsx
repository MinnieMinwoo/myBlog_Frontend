import React, { useState } from "react";

import AuthWithEmail from "../components/Auth/AuthWithEmail";
import AuthWithSocialAccount from "../components/Auth/AuthWithSocialAccount";
import MetaTag from "../components/Share/MetaTag";
import { useModal } from "../states/ModalState";
import { passwordResetEmail } from "../logic/authSetting";

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [isEmail, setIsEmail] = useState(false);

  const toggleAccount = () => {
    setSignIn((prev) => !prev);
  };

  const toggleEmail = () => {
    setIsEmail(false);
  };

  const { openModal } = useModal();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const resetPassword = () => {
    openModal(
      "Reset Password",
      <>
        <p>Please enter your email address to reset your password.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="enter your email"
            autoComplete="off"
            ref={emailRef}
            required
          />
        </form>
      </>,
      async () => {
        if (!emailRef.current?.value) return;
        const {
          current: { value },
        } = emailRef;
        try {
          await passwordResetEmail(value);
          openModal("Mail sent complete", "Please check your email to reset your password.");
        } catch (error) {
          console.log(error);
          openModal("Error", "Error occurred when sending email.");
        }
      },
      true
    );
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
          <>
            <button className="btn btn-secondary col-8 offset-2 h-36px" onClick={toggleEmail}>
              Back
            </button>
          </>
        ) : null}
        {isEmail && signIn ? (
          <button type="button" className="btn btn-info col-8 offset-2 h-36px" onClick={resetPassword}>
            Reset Password
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Auth;
