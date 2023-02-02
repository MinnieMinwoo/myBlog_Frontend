import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryContent = styled.div`
    margin-top: 10px;
`;

const RouteContent = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    &:hover {
        text-decoration: underline;
    }
`;

const Title = styled(RouteContent)`
    color: #555;
`;

const DetailData = styled(RouteContent)`
    color: #777;
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
        title: string;
        content?: string[];
    };
}
const CategorySideContent = ({ data }: Props) => {
    return (
        <CategoryContent className="CategorySideContent">
            <Title to="/">{data.title}</Title>
            {data.content && (
                <ListBox>
                    {data.content.map((content, id) => (
                        <ListData key={id}>
                            <DetailData to="/">{content}</DetailData>
                        </ListData>
                    ))}
                </ListBox>
            )}
        </CategoryContent>
    );
};

export default CategorySideContent;
