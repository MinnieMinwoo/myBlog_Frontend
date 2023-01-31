import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { dbService } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { loginData } from "../states/LoginState";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 1080px) {
        width: 80%;
        margin-left: 10%;
    }
`;

const DocTitle = styled.h1`
    border-bottom: 1px solid #eee;
    padding-bottom: 22px;
    color: #333;
`;

const PostTitle = styled.input`
    color: #777;
    border: 0;
    border-bottom: 1px solid #eee;
    &:focus {
        outline: none;
        border-bottom: 2px solid #777;
    }
    font-size: 36px;
    margin-bottom: 20px;
`;

const Submit = styled.input`
    width: 88px;
    margin: 0;
    margin-top: 20px;
    line-height: 38px;
    border-radius: 20px;
    float: right;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
`;

const Write = () => {
    const [title, setTitle] = useState("");
    const [postData, setPostData] = useState("**Write your post**");
    const navigate = useNavigate();
    const userData = useRecoilValue(loginData);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setTitle(value);
    };
    const onSubmit = async (event) => {
        const reg = /[`\n|\r|~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim;
        event.preventDefault();
        const postObj = {
            title: title,
            createdBy: userData.uid,
            createdAt: Date.now(),
            tag: "",
            category: [],
            thumbnailData: postData.replace(reg, "").substring(0, 151),
            thumbnailImageURL: "",
            detail: postData,
            likes: 0,
            comments: [],
        };
        await addDoc(collection(dbService, "posts"), postObj);
        navigate("/");
    };
    return (
        <Container>
            <header>
                <DocTitle>Write your Story</DocTitle>
            </header>
            <section>
                <form onSubmit={onSubmit}>
                    <PostTitle
                        type="text"
                        placeholder="Write post title"
                        value={title}
                        onChange={onChange}
                        required
                    />
                    <MDEditor
                        data-color-mode="light"
                        height="calc(100vh - 260px)"
                        value={postData}
                        onChange={setPostData}
                    />
                    <Submit type="submit" value="Write up" />
                </form>
            </section>
        </Container>
    );
};
export default Write;
