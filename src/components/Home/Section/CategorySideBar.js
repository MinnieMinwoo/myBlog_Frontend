import { Link } from "react-router-dom";
import CategorySideContent from "./CategorySideContent";
import styled from "styled-components";

const AsideTab = styled.aside`
  flex-basis: 230px;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 75px 0px 32px 50px;
  border-left: 1px solid #eee;
  @media (max-width: 1079px) {
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
        <Title to="/">분류 전체보기</Title>
        {categoryData.map((element, id) => (
          <CategorySideContent key={id} data={element} />
        ))}
      </nav>
    </AsideTab>
  );
};

export default CategorySideBar;
