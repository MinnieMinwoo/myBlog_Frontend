import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
    margin-bottom: 28px;
    padding-bottom: 18px;
    border-bottom: 1px solid #eee;
`;

const Container = styled.h2`
    font-size: 17px;
    line-height: 1.375;
    border: 0;
    margin: 0;
`;

const Title = styled.span`
    font-weight: bold;
    color: #555;
`;

const Number = styled.span`
    margin-left: 7px;
    font-style: normal;
    color: #04beb8;
`;

interface Props {
    title: string;
    postNumber: number;
}

const PostHeader = ({ title, postNumber }: Props) => {
    return (
        <>
            <HeaderBox className="PostHeader">
                <Container>
                    <Title>{title}</Title>
                    <Number>{String(postNumber)}</Number>
                </Container>
            </HeaderBox>
        </>
    );
};
export default PostHeader;
