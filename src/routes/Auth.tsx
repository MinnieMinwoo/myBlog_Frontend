import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoadingData } from "../states/LoadingState";
import { FirebaseError } from "firebase/app";
import { Button, Col, Form, Stack, Spinner } from "react-bootstrap";
import styled from "styled-components";

import { signInEmail, signUpEmail } from "../logic/authSetting";

import { useModal } from "../states/ModalState";
import AlertModal from "../components/Share/AlertModal";

const AuthBox = styled.div`
  margin-top: 40vh;
  transform: translateY(-50%);
`;

const AuthButton = styled(Button)`
  width: 80%;
  align-self: center;
`;

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
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
        openModal(errorTitle, errorText);
      }
    } catch (error) {
      console.log(error);
      const errorTitle = signIn ? "Login Error" : "Sign up Error";
      let errorText;
      if (error instanceof FirebaseError) {
        switch (error.code) {
          //common login & sign in
          case "auth/invalid-email":
            errorText = "You entered wrong email address.";
            break;
          //login failed
          case "auth/user-not-found":
            errorText = "The email address you entered does not exist.";
            break;
          case "auth/wrong-password":
            errorText = "Password do not match.";
            break;
          //sign up failed
          case "auth/weak-password":
            errorText = "Password must be at least 6 characters long.";
            break;
          case "auth/email-already-in-use":
            errorText = "The email address you entered already exists.";
            break;
          default:
            errorText = "Server does not work properly. Please try again later.";
            break;
        }
      } else {
        errorText = "Something wrong. Please try again later.";
      }
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

  const toggleAccount = () => {
    setSignIn((prev) => !prev);
  };

  return (
    <AuthBox className="Auth">
      <AlertModal />
      <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
        <Stack gap={3}>
          <h1>MyBlog</h1>
          <Form onSubmit={onSubmit}>
            <Stack gap={3}>
              <Form.Group controlId="email">
                <Form.Label>Email adress</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="email"
                  value={email}
                  required
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  autoComplete="off"
                  required
                  onChange={onChange}
                />
              </Form.Group>
              <AuthButton type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : signIn ? (
                  "Sign In"
                ) : (
                  "Create Account"
                )}
              </AuthButton>
            </Stack>
          </Form>
          <AuthButton variant="secondary" onClick={toggleAccount}>
            {signIn ? "Create Account" : "Sign In"}
          </AuthButton>
        </Stack>
      </Col>
    </AuthBox>
  );
};

export default Auth;
