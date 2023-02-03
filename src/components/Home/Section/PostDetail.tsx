import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getPostData } from "../../../post";
import MDEditor, { MarkdownUtil } from "@uiw/react-md-editor";
import styled from "styled-components";
const Editor = styled(MDEditor)`
    width: 800px;
`;

const PostDetail = () => {
    const [value, setValue] = useState("");
    const [height, setHeight] = useState(500);
    const editor = useRef<HTMLInputElement>(null);

    const param = useParams();
    useEffect(() => {
        if (typeof param.docID !== "string") return;
        getPostData(param.docID)
            .then((postDetail) => {
                setValue(postDetail.detail);
            })
            .then(() => {
                const innerDataNode =
                    editor.current?.children[0]?.children[0]?.children[0]?.children[0];
                setHeight((innerDataNode as HTMLElement).offsetHeight + 20);
            });
    }, [value]);
    return (
        <div ref={editor}>
            <Editor
                data-color-mode="light"
                visibleDragbar={false}
                hideToolbar={true}
                preview="preview"
                value={value}
                height={height}
            />
        </div>
    );
};

export default PostDetail;
