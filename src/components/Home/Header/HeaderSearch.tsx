import React from "react";
import styled from "styled-components";
import search from "../../../assets/images/search.png";

const SearchBox = styled.div`
  display: inline-block;
  margin-right: 15px;
  margin-top: 32px;
`;

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #eee;
  background-image: url(${search});
  background-color: #fff;
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
`;

const HeaderSearch = () => {
  return (
    <SearchBox className="SearchBox">
      <SearchButton />
    </SearchBox>
  );
};

export default HeaderSearch;
