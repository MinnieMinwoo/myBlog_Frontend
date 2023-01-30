import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-clojure.js";
import { dbService } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

//toast ui 다른 마크다운 에디터로 변경 필요 (react18 호환성 문제 발생)

const Write = () => {
    const [title, setTitle] = useState("Title");
    const editorRef = useRef();
    const navigate = useNavigate();
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setTitle(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        const postObj = {
            title: title,
            detail: editorRef.current.getInstance().getMarkdown(),
        };
        await addDoc(collection(dbService, "posts"), postObj);
        navigate("/");
    };
    return (
        <div>
            <h3>Write your Story</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Write your title"
                    value={title}
                    onChange={onChange}
                    required
                />
                <Editor
                    ref={editorRef}
                    initialValue="Write your story."
                    previewStyle="vertical"
                    height="80vh"
                    initialEditType="markdown"
                    hideModeSwitch="true"
                    toolbarItems={[
                        ["heading", "bold", "italic", "strike"],
                        ["hr", "quote"],
                        ["ul", "ol", "task"],
                        ["table", "image", "link"],
                        ["code", "codeblock"],
                    ]}
                    plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
                ></Editor>
                <input type="submit" value="Write up" />
            </form>
        </div>
    );
};
export default Write;
