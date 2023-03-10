import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import styled from "styled-components";

import { setCategoryThumbnail } from "../../logic/getSetCategoryInfo";
import { deleteImg } from "../../logic/getSetImage";
import altImage from "../../assets/images/altThumbnail.jpg";

export const CategoryNameForm = (
  categoryRef: React.RefObject<HTMLInputElement>,
  defaultValue = ""
) => {
  return (
    <Form>
      <Form.Label>Write down the category name.</Form.Label>
      <Form.Control
        type="text"
        placeholder="enter category name"
        defaultValue={defaultValue}
        ref={categoryRef}
        required
      />
    </Form>
  );
};

const ThumbnailImage = styled.img`
  background-color: #666;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  font-size: 0;
`;
export const CategoryImageForm = (
  imageRef: React.MutableRefObject<string>,
  inputRef: React.RefObject<HTMLInputElement>,
  thumbnailRef: React.RefObject<HTMLImageElement>,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>,
  onDelete: () => void
) => {
  const onUpload = () => {
    inputRef.current?.click();
  };

  return (
    <Form>
      <Form.Label>Please upload the image.</Form.Label>
      <Stack gap={2}>
        <ThumbnailImage
          ref={thumbnailRef}
          src={
            thumbnailRef.current?.src
              ? thumbnailRef.current?.src
              : imageRef.current
              ? imageRef.current
              : altImage
          }
          alt="Thumbnail"
        />
        <input hidden type="file" accept="image/*" ref={inputRef} onChange={onChange} />
        <Stack direction="horizontal" gap={2}>
          <Button onClick={onUpload}>Upload Image</Button>
          <Button variant="outline-primary" onClick={onDelete}>
            Delete Image
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};
