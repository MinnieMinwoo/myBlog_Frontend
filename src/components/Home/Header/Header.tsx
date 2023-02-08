import React from "react";
import { Link, useParams } from "react-router-dom";
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
  const params = useParams();
  return (
    <MainHeader className="Header">
      <TopDivision>
        <Title to={`/home/${params.userID}`}>{`${
          params.userID ? `${params.userID}'s` : ""
        } Blog`}</Title>
        <HomeIcon />
      </TopDivision>
    </MainHeader>
  );
};

export default Header;
