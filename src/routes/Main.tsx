import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../states/LoginState";

const Main = () => {
    const navigate = useNavigate();
    const userData = useRecoilValue(loginData);
    const onClick = () => {
        if (userData.isLoggedIn === true) {
            navigate(`/home/${userData.uid}`);
        } else {
            navigate("/auth");
        }
    };
    return (
        <div>
            <button onClick={onClick}>Start</button>
        </div>
    );
};

export default Main;
