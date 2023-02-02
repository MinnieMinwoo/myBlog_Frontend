import React from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../../../states/LoginState";
import HomeIcon from "./HeaderIcon";
import HomeNavigation from "./HeaderNavigation";
import styled from "styled-components";

const MainHeader = styled.div`
    border-bottom: 1px solid #eee;
`;

const TopDivision = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 1080px) {
        width: 80%;
        margin-left: 10%;
    }
`;

const Title = styled.h1`
    color: #333;
`;

const Header = () => {
    const userData = useRecoilValue(loginData);
    return (
        <MainHeader className="Header">
            <TopDivision>
                <Title>{`${userData.nickname ? userData.nickname : ""} Blog`}</Title>
                <HomeIcon />
            </TopDivision>
        </MainHeader>
    );
};

export default Header;
