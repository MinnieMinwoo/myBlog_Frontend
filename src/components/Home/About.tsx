import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import MDEditor, { commands } from "@uiw/react-md-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";

import { getUserAbout, getUserUID, updateUserAbout } from "../../logic/getSetUserInfo";
import { loginData } from "../../states/LoginState";
import "../../styles/About.css";
import { useToast } from "../../states/ToastState";
import MetaTag from "../Share/MetaTag";

const About = () => {
  const params = useParams();
  const [aboutData, setAboutData] = useState("");
  const [uidData, setUidData] = useState("");
  const { openToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.userID) {
      navigate("/404");
      return;
    }
    getUserUID(params.userID)
      .then(async (uid) => {
        setUidData(uid);
        const data = await getUserAbout(uid);
        setAboutData(data);
      })
      .catch((error) => {
        console.log(error);
        openToast("Error", "Load about page failed.", "warning");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userData = useRecoilValue(loginData);
  const [isEdit, setIsEdit] = useState(false);

  const onClick = async () => {
    if (!userData.uid) return;
    try {
      if (isEdit) await updateUserAbout(userData.uid, aboutData);
    } catch (error) {
      console.log(error);
      openToast("Error", "Update about page failed.", "warning");
    } finally {
      setIsEdit((prev) => !prev);
    }
  };

  return (
    <div className="px-md-3 my-4 mx-md-4">
      <MetaTag title={`${params.userID}'s Blog`} description={`Check the ${params.userID}'s blog posts`} />
      <section className="pb-3 bb-light">
        <h2 className="d-inline-block fw-bold">{isEdit ? "Edit page" : "About"}</h2>
        {uidData === userData.uid ? (
          <button className="btn btn-outline-primary float-end mt-1 me-3" onClick={onClick}>
            {isEdit ? "Complete" : "Edit"}
          </button>
        ) : null}
      </section>
      {isEdit ? (
        <>
          <MDEditor
            className="post-editor"
            data-color-mode="light"
            value={aboutData}
            textareaProps={{
              placeholder: "Write your story",
            }}
            commands={[
              commands.title,
              commands.bold,
              commands.italic,
              commands.strikethrough,
              commands.quote,
              commands.link,
              commands.code,
              commands.fullscreen,
            ]}
            onChange={(value = "") => {
              setAboutData(value);
            }}
          />
        </>
      ) : (
        <article className="mt-3" data-color-mode="light">
          <MarkdownPreview source={aboutData} />
        </article>
      )}
    </div>
  );
};

export default About;
