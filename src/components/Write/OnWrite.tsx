import React, { ChangeEvent, DragEvent, useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { uuidv4 } from "@firebase/util";
import MDEditor, { commands, ICommand } from "@uiw/react-md-editor";
import { Button, Container, Navbar, Col } from "react-bootstrap";
import styled from "styled-components";

import { useModal } from "../../states/ModalState";
import { useToast } from "../../states/ToastState";

import { uploadImg } from "../../logic/getSetImage";
import blogIcon from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const OnDragCheck = styled.div`
  &.Drag {
    opacity: 0.3;
  }
`;

const WriteContainer = styled(Col)`
  margin-top: 20px;
  animation-name: init;
  animation-duration: 1s;
  animation-duration: linear;
  @keyframes init {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  input {
    width: 100%;
    color: #777;
    border: 0;
    border-bottom: 1px solid #eee;
    &:focus {
      outline: none;
      border-bottom: 2px solid #777;
    }
    font-size: 36px;
    margin-bottom: 20px;
  }
  button {
    margin: 0;
    margin-top: 20px;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;
`;

const Editor = styled(MDEditor)`
  height: calc(100vh - 260px) !important;
`;

interface Props {
  isEdit: boolean;
  postContent: postEditData;
  setPostContent: React.Dispatch<React.SetStateAction<postEditData>>;
  onPreview: () => void;
}

const OnWrite = ({ isEdit, postContent, setPostContent, onPreview }: Props) => {
  const userData = useRecoilValue(loginData);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const { openModal } = useModal();
  const { openToast } = useToast();
  const navigate = useNavigate();
  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setPostContent((prev) => ({
      ...prev,
      title: value,
    }));
  };

  // drag & drop image
  const onDragEnter = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };
  const onDragLeave = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      setIsDragging(true);
    }
  };
  const onDrop = async (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (!file?.type.includes("image/")) {
      setIsDragging(false);
      return;
    }
    onImgUpload(file);
  };

  const uploadImgCommand: ICommand = {
    name: "image",
    keyCommand: "image",
    buttonProps: { "aria-label": "Insert image" },
    icon: (
      <svg width="12" height="12" viewBox="0 0 520 520">
        <path
          fill="currentColor"
          d="M5,350h340V0H5V350z M25,330v-62.212h300V330H25z M179.509,247.494H60.491L120,171.253L179.509,247.494z M176.443,211.061l33.683-32.323l74.654,69.05h-79.67L176.443,211.061z M325,96.574c-6.384,2.269-13.085,3.426-20,3.426 c-33.084,0-60-26.916-60-60c0-6.911,1.156-13.612,3.422-20H325V96.574z M25,20h202.516C225.845,26.479,225,33.166,225,40 c0,44.112,35.888,80,80,80c6.837,0,13.523-0.846,20-2.518v130.306h-10.767l-104.359-96.526l-45.801,43.951L120,138.748 l-85.109,109.04H25V20z"
        ></path>
      </svg>
    ),
    execute: async () => {
      imageRef.current?.click();
    },
  };

  const onInputImgChange = () => {
    imageRef.current?.files && onImgUpload(imageRef.current.files[0]);
  };

  const onImgUpload = async (image: File) => {
    const textarea = inputRef.current?.querySelector("textarea") as HTMLTextAreaElement;
    if (!textarea) return;
    try {
      const imageLink = await uploadImg(image, `$image/${userData.uid}/${uuidv4()}`);
      const currentText = postContent.postData;
      const textCursor = textarea.selectionStart;
      setPostContent((prev) => ({
        ...prev,
        postData: `${currentText.slice(0, textCursor)}![](${imageLink})${currentText.slice(
          textCursor
        )}`,
        imageList: [...prev.imageList, imageLink],
      }));
    } catch (error) {
      console.log(error);
      openToast("Error", "Image upload failed.", "danger");
    } finally {
      if (imageRef.current) imageRef.current.value = "";
      setIsDragging(false);
    }
  };

  const onQuit = () => {
    const warningTitle = "Warning";
    const warningMessage = "Post data will not be saved when you leave the window.";
    const confirmCallback = () => {
      navigate(-1);
    };
    openModal(warningTitle, warningMessage, confirmCallback, true);
  };

  const onExit = () => {
    const warningTitle = "Warning";
    const warningMessage = "Post data will not be saved when you leave the window.";
    const confirmCallback = () => {
      navigate("/");
    };
    openModal(warningTitle, warningMessage, confirmCallback, true);
  };

  return (
    <OnDragCheck className={isDragging ? "OnWrite Drag" : "OnWrite"}>
      <header>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>
              <Logo src={blogIcon} alt="blog logo" onClick={onExit} />
              {isEdit ? "Edit post" : "Write your Story"}
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <WriteContainer
        sm={{ span: 10, offset: 1 }}
        lg={{ span: 8, offset: 2 }}
        xxl={{ span: 6, offset: 3 }}
        className="OnWrite"
      >
        <section
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <input
            hidden
            type="file"
            accept="image/*"
            ref={imageRef}
            defaultValue={""}
            onChange={onInputImgChange}
          />
          <input
            placeholder="Write post title"
            value={postContent.title}
            onChange={onTitleChange}
            maxLength={50}
            required
          />
          <div ref={inputRef}>
            <Editor
              data-color-mode="light"
              value={postContent.postData}
              commands={[
                commands.title,
                commands.bold,
                commands.italic,
                commands.strikethrough,
                commands.quote,
                commands.link,
                uploadImgCommand,
                commands.code,
                commands.fullscreen,
              ]}
              onChange={(value = "") => {
                setPostContent((prev) => ({
                  ...prev,
                  postData: value,
                }));
              }}
            />
          </div>
          <Button variant="secondary" onClick={onQuit}>
            Quit
          </Button>
          <Button className="float-end" onClick={onPreview}>
            {isEdit ? "Edit" : "Write up"}
          </Button>
        </section>
      </WriteContainer>
    </OnDragCheck>
  );
};

export default OnWrite;
