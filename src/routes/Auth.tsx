import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";

const AuthBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% auto auto auto;
    width: 400px;
`;

const Title = styled.h1`
    font-size: 40px;
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
`;

const Toggle = styled.span`
    margin-top: 10px;
    color: #555;
    align-self: flex-start;
`;

const Auth = () => {
    const [signIn, setSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        let data;
        event.preventDefault();
        try {
            if (signIn) {
                data = await signInWithEmailAndPassword(authService, email, password);
            } else {
                data = await createUserWithEmailAndPassword(authService, email, password);
            }
            navigate(`/home/${data.user.uid}`);
        } catch (error) {
            console.log(error);
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
