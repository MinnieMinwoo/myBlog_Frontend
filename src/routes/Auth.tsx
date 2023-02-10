import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInEmail, signUpEmail } from "../logic/authSetting";
import styled from "styled-components";
import { FirebaseError } from "firebase/app";

const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% auto auto auto;
  width: 400px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  border: 1px solid #ddd;
  width: 360px;
  height: 20px;
  padding: 20px;
  border-radius: 3px;
`;

const SignIn = styled.input`
  margin: 20px 0 0 0;
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
`;

const Toggle = styled.span`
  margin-top: 10px;
  color: #555;
  align-self: flex-start;
  cursor: pointer;
`;

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const nickname = await (signIn ? signInEmail(email, password) : signUpEmail(email, password));
      navigate(`/home/${nickname}`);
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          //common login & sign in
          case "auth/invalid-email":
            console.log("You entered wrong email address.");
            break;
          //login failed
          case "auth/user-not-found":
            console.log("The email address you entered does not exist.");
            break;
          case "auth/wrong-password":
            console.log("Password do not match.");
            break;
          //sign up failed
          case "auth/weak-password":
            console.log("Password must be at least 6 characters long.");
            break;
          case "auth/email-already-in-use":
            console.log("The email address you entered already exists.");
            break;
          default:
            console.log("Server does not work properly. Please try again later.");
            break;
        }
      } else {
        console.log("Something wrong. Please try again later.");
      }
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleAccount = () => {
    setSignIn((prev) => !prev);
  };

  return (
    <AuthBox className="Auth">
      <Title>MyBlog</Title>
      <form onSubmit={onSubmit}>
        <Input
          name="email"
          type="text"
          placeholder="email"
          value={email}
          required
          onChange={onChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          autoComplete="off"
          required
          onChange={onChange}
        />
        <SignIn type="submit" value={signIn ? "Sign In" : "Create Account"} />
      </form>
      <Toggle onClick={toggleAccount}>{signIn ? "Create Account" : "Sign In"}</Toggle>
    </AuthBox>
  );
};

export default Auth;
