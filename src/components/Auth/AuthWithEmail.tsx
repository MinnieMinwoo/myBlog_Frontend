import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoadingData } from "../../states/LoadingState";
import { FirebaseError } from "firebase/app";

import { signInEmail, signOutUser, signUpEmail } from "../../logic/authSetting";

import { useModal } from "../../states/ModalState";

const AuthWithEmail = ({ signIn }: { signIn: boolean }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useRecoilState(isLoadingData);
  const { openModal } = useModal();
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const nickname = await (signIn ? signInEmail(email, password) : signUpEmail(email, password));
      if (nickname) {
        navigate(`/home/${nickname}`);
      } else {
        const errorTitle = "Email Verification";
        const errorText = "Please complete email verification if you want to login.";
        const callBack = async () => {
          await signOutUser();
          navigate(`/`);
        };
        openModal(errorTitle, errorText, callBack);
      }
    } catch (error) {
      console.log(error);
      const errorTitle = signIn ? "Login Error" : "Sign up Error";
      let errorText;
      if (!(error instanceof FirebaseError)) errorText = "Something wrong. Please try again later.";
      else if (error.code === "auth/invalid-email") errorText = "You entered wrong email address.";
      else if (error.code === "auth/user-not-found") errorText = "The email address you entered does not exist.";
      else if (error.code === "auth/wrong-password") errorText = "Password must be at least 6 characters long.";
      else if (error.code === "auth/email-already-in-use") errorText = "The email address you entered already exists.";
      else if (error.code === "auth/weak-password") errorText = "Password must be at least 6 characters long.";
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
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="AuthWithEmail vstack gap-3">
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
          <button type="submit" className="btn btn-primary col-8 offset-2 h-36px" disabled={isLoading}>
            {isLoading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : signIn ? (
              "Sign In"
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthWithEmail;
