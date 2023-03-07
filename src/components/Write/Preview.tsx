import React, { useState, useEffect, useRef } from "react";
import { Stack, Col, Image, Button, Form, InputGroup } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import styled from "styled-components";
import { uuidv4 } from "@firebase/util";

import { useToast } from "../../states/ToastState";

import altImage from "../../assets/images/altThumbnail.jpg";
import { deleteImg, uploadImg } from "../../logic/getSetImage";
import { getCategoryData } from "../../logic/getSetCategoryInfo";

const PreviewContainer = styled.div`
  display: flex;
  position: absolute;
  visibility: hidden;
  background-color: #fff;
  width: 100%;
  height: 100%;
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
  object-fit: cover;
  object-position: center center;
`;

const ThumbnailText = styled(InputGroup)`
  height: 200px;
`;

interface Props {
  isEdit: boolean;
  isPreview: boolean;
  postContent: postEditData;
  setPostContent: React.Dispatch<React.SetStateAction<postEditData>>;
  onPreview: () => void;
  categoryValue: string;
  setCategoryValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const Preview = ({
  isEdit,
  isPreview,
  postContent,
  setPostContent,
  onPreview,
  categoryValue,
  setCategoryValue,
  onSubmit,
}: Props) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const userData = useRecoilValue(loginData);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [firstOpen, setFirstOpen] = useState(false);
  const { openToast } = useToast();

  useEffect(() => {
    userData.uid && getCategoryData(userData.uid).then((result) => setCategoryData(result));
  }, [userData]);

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
        thumbnailImgLink: uploadURL,
      }));
    } catch (error) {
      console.log(error);
      openToast("Error", "Image upload failed.", "danger");
    }
  };

  const onUpload = () => {
    imgRef.current?.click();
  };

  const onDelete = () => {
    postContent.thumbnailImgLink && deleteImg(postContent.thumbnailImgLink);
    setPostContent((prev) => ({
      ...prev,
      thumbnailImgLink: "",
    }));
    if (imgRef.current?.value) imgRef.current.value = "";
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

  const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setCategoryValue(value);
  };

  return (
    <PreviewContainer className={`Preview ${isPreview ? "open" : firstOpen ? "close" : ""}`}>
      <LeftContainer md={{ span: 5, offset: 1 }} xxl={{ span: 4, offset: 2 }}>
        <Stack gap={3}>
          <h3>Preview</h3>
          <ImageContainer
            src={postContent.thumbnailImgLink ? postContent.thumbnailImgLink : altImage}
            alt="Thumbnail"
            thumbnail={true}
          ></ImageContainer>
          <input
            hidden
            type="file"
            accept="image/*"
            ref={imgRef}
            src={postContent.thumbnailImgLink}
            onChange={onImgUpload}
          />
          <Stack gap={2} direction="horizontal">
            <Button onClick={onUpload}>Upload Image</Button>
            <Button
              variant="outline-primary"
              onClick={onDelete}
              hidden={!postContent.thumbnailImgLink}
            >
              Delete Image
            </Button>
          </Stack>
          <h3>{postContent.title}</h3>
          <ThumbnailText size="lg">
            <Form.Control
              as="textarea"
              value={postContent.thumbnailData}
              maxLength={150}
              onChange={onEditDescription}
            />
          </ThumbnailText>
          <p>{postContent.thumbnailData.length}/150</p>
        </Stack>
      </LeftContainer>
      <RightContainer xs={0} md={5} xxl={4}>
        <Stack gap={1}>
          <h4>Category Setting</h4>
          <Form.Select value={categoryValue} onChange={onCategoryChange}>
            <option value={""}>None</option>
            {categoryData &&
              categoryData.map((category, id) => {
                return category.subField.map((subCategory, index) => (
                  <option key={index} value={String([[id, index]])}>
                    {`${category.mainField} - ${subCategory}`}
                  </option>
                ));
              })}
          </Form.Select>
        </Stack>
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
