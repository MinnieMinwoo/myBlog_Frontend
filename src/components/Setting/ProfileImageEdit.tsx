import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { updateUserImage } from "../../logic/getSetUserInfo";
import { Stack, Button, Image } from "react-bootstrap";
import styled from "styled-components";

const ImgContainer = styled.div`
  flex-basis: 210px;
  padding: 0 24px;
  border-right: 1px solid #eee;
`;

const ProfileImg = styled(Image)`
  width: 128px;
  height: 128px;
  margin: auto;
`;
const ProfileImageEdit = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const [imageLink, setImageLink] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (userData.photoURL) setImageLink(userData.photoURL);
  }, [userData.photoURL]);

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!userData.uid) throw window.alert("no user uid data");
    if (!event.target.files) throw window.alert("no files exist");
    const imageURL = await updateUserImage(
      Boolean(userData.photoURL),
      userData.uid,
      event.target.files[0]
    );
    setUserData((prev) => ({
      ...prev,
      photoURL: imageURL,
    }));
  };

  const onUpload = () => {
    inputRef.current?.click();
  };

  const onDelete = () => {
    if (inputRef.current?.value) inputRef.current.value = "";
  };

  return (
    <ImgContainer className="ProfileImageEdit">
      <Stack gap={3}>
        <ProfileImg src={imageLink} alt="Profile" roundedCircle={true} thumbnail={true} />
        <input
          hidden
          type="file"
          accept="image/*"
          ref={inputRef}
          src={imageLink}
          onChange={onChange}
        />
        <Button onClick={onUpload}>Upload Image</Button>
        <Button variant="outline-primary" onClick={onDelete}>
          Delete Image
        </Button>
      </Stack>
    </ImgContainer>
  );
};

export default ProfileImageEdit;
