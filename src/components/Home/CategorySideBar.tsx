import React from "react";
import { Link } from "react-router-dom";
import CategorySideContent from "./CategorySideContent";
import styled from "styled-components";

const AsideTab = styled.aside`
  padding-left: 30px;
  margin: 35px 0;
  border-left: 1px solid #eee;
  @media (max-width: 991px) {
    display: none;
  }
`;

const Title = styled(Link)`
  color: #555;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CategorySideBar = () => {
  let categoryData = [
    {
      title: "This is Dummy Data",
    },
    {
      title: "Program",
      content: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Frontend",
      content: ["React", "FireBase", "GraphQL", "Recoil"],
    },
    {
      title: "Backend",
      content: ["Node.js", "MySQL", "express.js", "GraphQL"],
    },
    {
      title: "Life",
    },
  ];

  return (
    <AsideTab className="CategorySideBar">
      <nav className="category_navigation">
        <Title as="p">All Categories</Title>
        {categoryData.map((element, id) => (
          <CategorySideContent key={id} data={element} />
        ))}
      </nav>
    </AsideTab>
  );
};

export default CategorySideBar;
