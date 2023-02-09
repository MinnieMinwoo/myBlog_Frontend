import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { updateUserProfile } from "../../logic/getSetUserInfo";
import { loginData } from "../../states/LoginState";
import styled from "styled-components";

const ProfileInfo = styled.div`
  flex-grow: 1;
  padding: 0 44px 0 24px;
`;

const Nickname = styled.h2`
  font-size: 36px;
  line-height: 50px;
  color: #111;
`;

const Description = styled.div`
  line-height: 24px;
  color: #333;
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

const Input = styled.input`
  display: block;
  padding: 8px;
  width: 100%;
  height: ${(props) => props.height};
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #eee;
  font-weight: 500;
`;

const ProfileInfoEdit = () => {
  const [userData, setUserData] = useRecoilState(loginData);
  const [hidden, setHidden] = useState(true);
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setNickname(userData.nickname ?? "");
    setDescription(userData.description ?? "");
  }, [userData]);
  const onToggle = () => {
    setHidden((prev) => !prev);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "nickname") setNickname(value);
    else if (name === "description") setDescription(value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userData.uid) throw window.alert("no user uid data");
    await updateUserProfile(userData.uid, nickname, description);
    setUserData((prev) => ({
      ...prev,
      nickname: nickname,
      description: description,
    }));
    setHidden(true);
  };

  return (
    <ProfileInfo>
      <div hidden={!hidden}>
        <Nickname>{userData.nickname}</Nickname>
        <Description>{userData.description}</Description>
        <Button onClick={onToggle}>Edit</Button>
      </div>
      <form hidden={hidden} onSubmit={onSubmit}>
        <Input
          type="text"
          name="nickname"
          placeholder="nickname"
          value={nickname}
          maxLength={20}
          onChange={onChange}
          required
          height="28px"
        />
        <Input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          maxLength={100}
          onChange={onChange}
          height="18px"
        />
        <Button as="input" type="submit" value="Save" />
      </form>
    </ProfileInfo>
  );
};

export default ProfileInfoEdit;
