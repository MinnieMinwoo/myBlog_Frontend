import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pagination = styled(Link)`
  display: block;
  margin: 40px 0 0 0;
  padding: 12px 0;
  border: 1px solid #eee;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  line-height: 24px;
  color: #999;
`;
const PostPagination = () => {
  return (
    <div className="PostPagination">
      <Pagination as="div">more</Pagination>
    </div>
  );
};
export default PostPagination;
