import React, { useRef } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import styled from "styled-components";
import altImage from "../../assets/images/altThumbnail.jpg";

import { setCategoryThumbnail } from "../../logic/getSetCategoryInfo";

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
  width: 100%;
  border-radius: 20px;
`;
export const CategoryImageForm = (
  imageLink: string,
  imageRef: React.RefObject<HTMLInputElement>
) => {
  const onUpload = () => {
    imageRef.current?.click();
  };
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return console.log("no image file");
    if (imageRef.current)
      imageRef.current.value = await setCategoryThumbnail(event.target.files[0]);
  };
  const onDelete = () => {};
  const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = altImage;
  };

  return (
    <Form>
      <Form.Label>Please upload the image.</Form.Label>
      <Stack gap={2}>
        <ThumbnailImage
          src={imageRef.current?.value ?? imageLink}
          onError={onError}
          alt="Thumbnail"
        />
        <input
          hidden
          type="file"
          accept="image/*"
          ref={imageRef}
          src={imageRef.current?.value ?? imageLink}
          onChange={onChange}
        />
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
