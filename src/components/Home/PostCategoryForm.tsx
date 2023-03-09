import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import styled from "styled-components";
import altImage from "../../assets/images/altThumbnail.jpg";

import { setCategoryThumbnail } from "../../logic/getSetCategoryInfo";
import { deleteImg } from "../../logic/getSetImage";

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
  aspect-ratio: 16/9;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
`;
export const CategoryImageForm = (
  imageLink: string,
  inputRef: React.RefObject<HTMLInputElement>,
  imageRef: React.RefObject<HTMLImageElement>
) => {
  console.log(imageLink);
  const onUpload = () => {
    inputRef.current?.click();
  };

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return console.log("no image file");
    imageRef.current?.src && imageRef.current?.src !== altImage && deleteImg(imageRef.current.src);
    const imageURL = await setCategoryThumbnail(event.target.files[0]);
    imageRef.current && (imageRef.current.src = imageURL);
  };

  const onDelete = () => {
    if (
      imageRef.current?.src &&
      imageRef.current?.src !== altImage &&
      imageRef.current?.src !== imageLink &&
      inputRef.current
    ) {
      deleteImg(imageRef.current.src);
      imageRef.current.src = "";
    }
  };

  return (
    <Form>
      <Form.Label>Please upload the image.</Form.Label>
      <Stack gap={2}>
        <ThumbnailImage
          ref={imageRef}
          src={imageRef.current?.src ?? imageLink ?? altImage}
          alt="Thumbnail"
        />
        <input
          hidden
          type="file"
          accept="image/*"
          ref={inputRef}
          src={inputRef.current?.value ?? imageLink ? imageLink : altImage}
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
