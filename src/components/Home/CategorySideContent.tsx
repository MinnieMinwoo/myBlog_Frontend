import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const CategoryContent = styled.div``;

const RouteContent = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Title = styled(RouteContent)`
  color: #555;
  margin: 5px 0;
  &:hover {
    color: #555;
  }
`;

const DetailData = styled(RouteContent)`
  color: #777;
  padding: 3px 0;
  margin: 0;
  &:hover {
    color: #777;
  }
`;

const ListBox = styled.ul`
  list-style: none;
  padding: 5px 0 3px 0;
  margin: 0;
`;

const ListData = styled.li`
  border-left: 2px solid #eee;
  padding-left: 9px;
`;

interface Props {
  data: {
    mainfield: string;
    subfield?: string[];
  };
}

const CategorySideContent = ({ data }: Props) => {
  const params = useParams();

  return (
    <CategoryContent className="CategorySideContent">
      <Title as="p">{data.mainfield}</Title>
      {data.subfield && (
        <ListBox>
          {data.subfield.map((content, id) => (
            <ListData key={id}>
              <DetailData to={`/home/${params.userID}/category/${data.mainfield}/${content}`}>
                {content}
              </DetailData>
            </ListData>
          ))}
        </ListBox>
      )}
    </CategoryContent>
  );
};

export default CategorySideContent;
