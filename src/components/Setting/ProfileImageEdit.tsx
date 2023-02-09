import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { loginData } from "../../states/LoginState";
import { updateUserImage } from "../../logic/getSetUserInfo";
import styled from "styled-components";

const ProfileImg = styled.div`
  width: 128px;
  padding: 0 24px;
  border-right: 1px solid #eee;
`;

const Image = styled.img`
  background-color: #eee;
  width: 128px;
  height: 128px;
  border-radius: 50%;
`;

const Button = styled.button`
  display: block;
  width: 128px;
  height: 32px;
  border-radius: 4px;
  background-color: #eee;
  border: 0;
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
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
    <ProfileImg className="ProfileImageEdit">
      <Image src={imageLink} alt="Profile" width="128px" height="128px" />
      <input
        hidden
        type="file"
        accept="image/*"
        ref={inputRef}
        src={imageLink}
        onChange={onChange}
      />
      <Button onClick={onUpload}>Upload Image</Button>
      <Button onClick={onDelete}>Delete Image</Button>
    </ProfileImg>
  );
};

export default ProfileImageEdit;
