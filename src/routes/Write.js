import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { dbService } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { loginData } from "../states/LoginState";

const Write = () => {
    const [title, setTitle] = useState("Title");
    const [postData, setPostData] = useState("**Write your post**");
    const navigate = useNavigate();
    const userData = useRecoilState(loginData);
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
            createdBy: userData.uid,
            createdAt: Date.now(),
            tag: "",
            category: [],
            thumbnailData: "",
            thumbnailImageURL: "",
            detail: postData,
            likes: 0,
            comments: [],
        };
        console.log(postObj);
        //await addDoc(collection(dbService, "posts"), postObj);
        //navigate("/");
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
                <MDEditor data-color-mode="light" value={postData} onChange={setPostData} />
                <input type="submit" value="Write up" />
            </form>
        </div>
    );
};
export default Write;
