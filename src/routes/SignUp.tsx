import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoadingData } from "../states/LoadingState";
import { useModal } from "../states/ModalState";
import { FirebaseError } from "firebase/app";

import { linkEmail } from "../logic/authSetting";
import MetaTag from "../components/Share/MetaTag";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const { openModal } = useModal();
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await linkEmail(email, password, nickname);
      openModal("Email verification", "Please complete email verification if you want to login.", () => {
        navigate("/");
      });
    } catch (error) {
      console.log(error);
      const errorTitle = "Sign up Error";
      let errorText;
      if (!(error instanceof FirebaseError)) errorText = "Something wrong. Please try again later.";
      else if (error.code === "auth/invalid-email") errorText = "You entered wrong email address.";
      else if (error.code === "auth/weak-password") errorText = "Password must be at least 6 characters long.";
      else if (error.code === "auth/email-already-in-use") errorText = "The email address you entered already exists.";
      else errorText = "Server does not work properly. Please try again later.";
      openModal(errorTitle, errorText);
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "nickname") setNickname(value);
  };

  return (
    <div className="SignUp position-absolute top-50 start-50 translate-middle col-10 col-md-6 col-lg-4">
      <MetaTag title="myBlog - sign up" description="Sign up for use blog" />
      <div className="vstack gap-3 ">
        <h1>Create Account</h1>
        <div className="vstack gap-3">
          <form onSubmit={onSubmit}>
            <div className="vstack gap-3">
              <div>
                <label className="form-label">Email address</label>
                <input
                  className="form-control"
                  name="email"
                  type="text"
                  placeholder="email"
                  value={email}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  autoComplete="off"
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label className="form-label">nickname</label>
                <input
                  className="form-control"
                  name="nickname"
                  type="text"
                  placeholder="nickname"
                  value={nickname}
                  autoComplete="off"
                  required
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary col-8 offset-2 h-36px" disabled={isLoading}>
                {isLoading ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
