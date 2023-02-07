import React, { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";

const PostBox = styled.article`
  padding: 30px 0;
  flex-basis: 80vw;
  @media (min-width: 1080px) {
    padding: 72px 50px 60px 0;
    flex-grow: 3;
  }
`;
const Editor = styled(MDEditor)`
  border: 0;
  box-shadow: inherit;

  .w-md-editor-preview {
    overflow: hidden;
    padding: 0;
  }
`;

interface Props {
  postData?: PostDetail;
}

const PostDetail = ({ postData }: Props) => {
  const [value, setValue] = useState("");
  const [height, setHeight] = useState(500);
  const editor = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (postData) {
      setValue(postData.detail);
    }
    const innerDataNode = editor.current?.children[0]?.children[0]?.children[0]?.children[0];
    setHeight((innerDataNode as HTMLElement).offsetHeight + 50);
  });

  return (
    <PostBox ref={editor} className="PostDetail">
      <Editor
        data-color-mode="light"
        visibleDragbar={false}
        hideToolbar={true}
        preview="preview"
        value={value}
        height={height}
      />
    </PostBox>
  );
};

export default PostDetail;
