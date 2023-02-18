import React, { useState, useEffect, useRef } from "react";
import { Stack, Col, Image, Button, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { uuidv4 } from "@firebase/util";

import altImage from "../../assets/images/altThumbnail.jpg";
import { deleteImg, uploadImg } from "../../logic/getSetImage";

const PreviewContainer = styled.div`
  display: flex;
  position: absolute;
  visibility: hidden;
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  &.open {
    visibility: visible;
    animation-name: open;
    animation-duration: 0.5s;
    animation-duration: linear;
    @keyframes open {
      0% {
        height: 0%;
      }
      100% {
        height: 100%;
      }
    }
  }

  &.close {
    visibility: hidden;
    animation-name: close;
    animation-duration: 0.5s;
    animation-duration: linear;
    @keyframes close {
      0% {
        height: 100%;
        visibility: visible;
      }
      99.9% {
        height: 0.1%;
        visibility: visible;
      }
      100% {
        height: 0%;
        visibility: hidden;
      }
    }
  }
`;

const LeftContainer = styled(Col)`
  padding: 0 30px;
  border-right: 1px solid #eee;
  align-self: center;
`;

const RightContainer = styled(Col)`
  padding: 0 30px;
  align-self: center;
`;

const ButtonContainer = styled(Stack)`
  float: right;
`;
const ImageContainer = styled(Image)`
  background-color: #eee;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

interface Props {
  isEdit: boolean;
  isPreview: boolean;
  postContent: postEditData;
  setPostContent: React.Dispatch<React.SetStateAction<postEditData>>;
  onPreview: () => void;
  onSubmit: () => void;
}

const Preview = ({
  isEdit,
  isPreview,
  postContent,
  setPostContent,
  onPreview,
  onSubmit,
}: Props) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [firstOpen, setFirstOpen] = useState(false);
  useEffect(() => {
    isPreview && setFirstOpen(true);
  }, [isPreview]);

  const onImgUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) throw console.log("no image files");
    try {
      const uploadURL = await uploadImg(files[0], `$thumbnail/${uuidv4()}`);
      setPostContent((prev) => ({
        ...prev,
        imgLink: uploadURL,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const onUpload = () => {
    imgRef.current?.click();
  };

  const onDelete = () => {
    postContent.imgLink && deleteImg(postContent.imgLink);
    setPostContent((prev) => ({
      ...prev,
      imgLink: "",
    }));
  };

  const onEditDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setPostContent((prev) => ({
      ...prev,
      thumbnailData: value,
    }));
  };

  return (
    <PreviewContainer
      className={`Preview ${isPreview ? "open" : firstOpen ? "close" : ""}`}
    >
      <LeftContainer md={{ span: 5, offset: 1 }} xxl={{ span: 4, offset: 2 }}>
        <Stack gap={3}>
          <h3>Preview</h3>
          <ImageContainer
            src={postContent.imgLink ? postContent.imgLink : altImage}
            alt="Thumbnail"
            thumbnail={true}
          ></ImageContainer>
          <input
            hidden
            type="file"
            accept="image/*"
            ref={imgRef}
            src={postContent.imgLink}
            onChange={onImgUpload}
          />
          <Stack gap={2} direction="horizontal">
            <Button onClick={onUpload}>Upload Image</Button>
            <Button
              variant="outline-primary"
              onClick={onDelete}
              hidden={!postContent.imgLink}
            >
              Delete Image
            </Button>
          </Stack>
          <h3>{postContent.title}</h3>
          <InputGroup size="lg">
            <Form.Control
              as="textarea"
              value={postContent.thumbnailData}
              maxLength={150}
              onChange={onEditDescription}
            />
          </InputGroup>
          <p>{postContent.thumbnailData.length}/150</p>
        </Stack>
      </LeftContainer>
      <RightContainer xs={0} md={5} xxl={4}>
        <ButtonContainer gap={3} direction="horizontal">
          <Button variant="outline-primary" onClick={onPreview}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>{isEdit ? "Edit" : "Write Up"}</Button>
        </ButtonContainer>
      </RightContainer>
    </PreviewContainer>
  );
};

export default Preview;
