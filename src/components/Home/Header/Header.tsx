import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../../states/LoginState";
import styled from "styled-components";

import HomeIcon from "./HeaderIcon";
import HomeNavigation from "./HeaderNavigation";

import { CenterAlign } from "../../../styles/PageView";

const MainHeader = styled.div`
  border-bottom: 1px solid #eee;
`;

const TopDivision = styled(CenterAlign)`
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Link)`
  color: #333;
  margin: 20px 0;
  font-size: 36px;
  font-weight: bold;
  text-decoration: none;
`;

const Header = () => {
  const userData = useRecoilValue(loginData);
  return (
    <MainHeader className="Header">
      <TopDivision>
        <Title to={`/home/${userData.nickname}`}>{`${
          userData.nickname ? `${userData.nickname}'s` : ""
        } Blog`}</Title>
        <HomeIcon />
      </TopDivision>
    </MainHeader>
  );
};

export default Header;
