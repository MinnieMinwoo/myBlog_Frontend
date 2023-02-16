import React, { useRef } from "react";
import { Stack, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import { uuidv4 } from "@firebase/util";

import altImage from "../../assets/images/altThumbnail.jpg";
import { deleteImg, uploadImg } from "../../logic/getSetImage";

const PreviewContainer = styled.div`
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

const ImageContainer = styled(Image)`
  background-color: #eee;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

interface Props {
  firstOpen: boolean;
  isHidden: boolean;
  imageLink: string;
  setImageLink: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  onPreview: () => void;
  onSubmit: () => void;
}

const Preview = ({
  firstOpen,
  isHidden,
  imageLink,
  setImageLink,
  title,
  description,
  setDescription,
  onPreview,
  onSubmit,
}: Props) => {
  const imgRef = useRef<HTMLInputElement | null>(null);

  const onImgUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) throw console.log("no image files");
    try {
      const uploadURL = await uploadImg(files[0], `$thumbnail/${uuidv4()}`);
      setImageLink(uploadURL);
    } catch (error) {
      console.log(error);
    }
  };

  const onUpload = () => {
    imgRef.current?.click();
  };

  const onDelete = () => {
    imageLink && deleteImg(imageLink);
    setImageLink("");
  };

  const onEditDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setDescription(value);
  };
  return (
    <PreviewContainer className={`Preview ${isHidden ? (firstOpen ? "close" : "") : "open"}`}>
      <Col md={{ span: 5, offset: 1 }} xxl={{ span: 4, offset: 2 }}>
        <Stack>
          <h3>Preview</h3>
          <ImageContainer
            src={imageLink ? imageLink : altImage}
            alt="Thumbnail"
            thumbnail={true}
          ></ImageContainer>
          <input
            hidden
            type="file"
            accept="image/*"
            ref={imgRef}
            src={imageLink}
            onChange={onImgUpload}
          />
          <Stack direction="horizontal">
            <button onClick={onUpload}>Upload Image</button>
            <button onClick={onDelete} hidden={!imageLink}>
              Delete
            </button>
          </Stack>
          <h3>{title}</h3>
          <textarea value={description} onChange={onEditDescription} />
          <p>{description.length}/150</p>
        </Stack>
      </Col>
      <Col md={{ span: 5, offset: 6 }} xxl={{ span: 4, offset: 6 }}>
        <Stack direction="horizontal">
          <button onClick={onPreview}>Cancel</button>
          <button onClick={onSubmit}>Write Up</button>
        </Stack>
      </Col>
    </PreviewContainer>
  );
};

export default Preview;
