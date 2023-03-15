import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CategorySideContent from "./CategorySideContent";
import styled from "styled-components";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryList } from "../../logic/getSetCategoryInfo";

const AsideTab = styled.aside`
  padding-left: 30px;
  margin: 35px 0;
  border-left: 1px solid #eee;
  @media (max-width: 991px) {
    display: none;
  }
`;

const Title = styled.p`
  color: #555;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const CategorySideBar = () => {
  const [categoryList, setCategoryList] = useState<CategoryData[]>([]);
  const params = useParams();

  useEffect(() => {
    if (!params.userID) throw console.log("no params");
    getUserUID(params.userID)
      .then((uid) => {
        return getCategoryList(uid);
      })
      .then((data) => {
        setCategoryList(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AsideTab className="CategorySideBar">
      <nav className="category_navigation">
        <Title>Categories</Title>
        {categoryList.map((element, id) => (
          <CategorySideContent key={id} data={element} />
        ))}
      </nav>
    </AsideTab>
  );
};

export default CategorySideBar;
