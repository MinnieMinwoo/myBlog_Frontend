import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loginData } from "../../../states/LoginState";
import { authService } from "../../../firebase";
import { signOut } from "firebase/auth";
import styled from "styled-components";

const ProfileBox = styled.div`
    display: inline-block;
`;

const ProfileButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #eee;
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
`;

const ButtonContainer = styled.div`
    position: absolute;
    transform: translateX(-34px);
    @media (max-width: 1080px) {
        transform: translateX(-64px);
    }
    margin-top: 5px;
`;
const RouteButton = styled.button`
    display: block;
    box-sizing: content-box;
    width: 96px;
    padding: 0;
    border: 1px solid #eee;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    line-height: 35px;
    color: #777;
`;

const HomeProfile = () => {
    const [isHidden, setIsHidden] = useState(true);
    const navigate = useNavigate();
    const setUserData = useSetRecoilState(loginData);
    const onToggle = () => {
        setIsHidden((prev) => !prev);
    };

    const onLogout = async () => {
        try {
            await signOut(authService);
            setUserData((prev) => ({
                ...prev,
                isLoggedIn: false,
            }));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <ProfileBox className="HomeProfile">
            <ProfileButton onClick={onToggle} />
            {isHidden ? null : (
                <ButtonContainer>
                    <RouteButton as={Link} to="/write">
                        글쓰기
                    </RouteButton>
                    <RouteButton as={Link} to="/write">
                        설정
                    </RouteButton>
                    <RouteButton onClick={onLogout}>로그아웃</RouteButton>
                </ButtonContainer>
            )}
        </ProfileBox>
    );
};

export default HomeProfile;
